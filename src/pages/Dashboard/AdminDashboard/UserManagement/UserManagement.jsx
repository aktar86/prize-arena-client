import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxios from "../../../../hooks/useAxios";
import { FaUserShield } from "react-icons/fa";
import { FiShieldOff } from "react-icons/fi";
import Swal from "sweetalert2";

const UserManagement = () => {
  const axiosSecure = useAxios();
  const { refetch, data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const updateAdminRole = (user, role, confirmText, suscessText) => {
    const roleInfo = { role: role };
    Swal.fire({
      title: "Are you sure?",
      text: confirmText,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, make admin!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/users/${user._id}/role`, roleInfo).then((res) => {
          if (res.data.modifiedCount) {
            refetch();
            Swal.fire({
              title: "Updated!",
              text: suscessText,
              icon: "success",
            });
          }
        });
      }
    });
  };

  //   make admin
  const handleMakeAdmin = (user) => {
    const confirmText = `Are you sure you want to make ${user.displayName} an admin?`;
    const suscessText = `${user.displayName} is now an admin!`;

    updateAdminRole(user, "admin", confirmText, suscessText);
  };

  //remove admin
  const handleRemoveAdmin = (user) => {
    const confirmText = `Are you sure you want to remove ${user.displayName} from admin?`;
    const suscessText = `${user.displayName} has been removed from admin.`;

    updateAdminRole(user, "user", confirmText, suscessText);
  };

  return (
    <div>
      <h1 className="text-5xl font-bold">All User: {users.length} </h1>

      {/* table */}
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>SL</th>
              <th>Name</th>
              <th>Email</th>
              <th>Created Date</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.displayName}</td>
                <td>{user.email}</td>
                <td>{user.createAt}</td>
                <td
                  className={`${
                    user.role === "admin"
                      ? "text-green-500"
                      : user.role === "user"
                      ? "text-yellow-500"
                      : "text-blue-500"
                  }`}
                >
                  {user.role}
                </td>
                <td>
                  {user.role === "admin" ? (
                    <button
                      onClick={() => handleRemoveAdmin(user)}
                      className="btn btn-square bg-red-500 text-white"
                    >
                      <FiShieldOff />
                    </button>
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn btn-square bg-green-500 text-white"
                    >
                      <FaUserShield />
                    </button>
                  )}
                </td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagement;
