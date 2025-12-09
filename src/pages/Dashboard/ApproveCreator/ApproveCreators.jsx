import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxios from "../../../hooks/useAxios";
import { FaTrash, FaUserCheck } from "react-icons/fa";
import { HiUserRemove } from "react-icons/hi";
import Swal from "sweetalert2";

const ApproveCreators = () => {
  const axiosSecure = useAxios();

  const { refetch, data: creators = [] } = useQuery({
    queryKey: ["creators", "pending"],
    queryFn: async () => {
      const res = await axiosSecure.get("/creators");
      return res.data;
    },
  });

  const updateCreatorStatus = (creator, status) => {
    const updateInfo = { status: status };

    axiosSecure.patch(`/creators/${creator._id}`, updateInfo).then((res) => {
      if (res.data.modifiedCount) {
        refetch();
        Swal.fire({
          position: "center",
          icon: "success",
          title: `Rider status is set to ${status}`,
          showConfirmButton: false,
          timer: 2000,
        });
      }
    });
  };

  const handleApproveCreator = (creator) => {
    updateCreatorStatus(creator, "approved");
  };

  const handleRejectCreator = (creator) => {
    updateCreatorStatus(creator, "rejected");
  };

  const handleDeleteCreator = (creator) => {
    axiosSecure.delete(`/creators/${creator._id}`).then((res) => {
      if (res.data.deletedCount) {
        refetch();
        Swal.fire({
          position: "center",
          icon: "success",
          title: `Rider status is set to ${status}`,
          showConfirmButton: false,
          timer: 2000,
        });
      }
    });
  };

  console.log(creators);
  return (
    <div>
      <h1 className="text-3xl font-bold">
        Approve Creators: {creators.length}
      </h1>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>SL</th>
              <th>Name</th>
              <th>Email</th>
              <th>Created Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {creators.map((creator, index) => (
              <tr key={creator._id}>
                <th>{index + 1}</th>
                <td>{creator.creatorName}</td>
                <td>{creator.creatorEmail}</td>
                <td>{creator.createAt}</td>
                <td
                  className={`${
                    creator.status === "approved"
                      ? "text-green-500"
                      : creator.status === "rejected"
                      ? "text-red-500"
                      : "text-yellow-500"
                  }`}
                >
                  {creator.status}
                </td>
                <td>
                  <button
                    onClick={() => handleApproveCreator(creator)}
                    className="btn btn-square"
                  >
                    <FaUserCheck />
                  </button>
                  <button
                    onClick={() => handleRejectCreator(creator)}
                    className="btn btn-square md:mx-2 my-2 md:my-0 "
                  >
                    <HiUserRemove />
                  </button>
                  <button
                    onClick={() => handleDeleteCreator(creator)}
                    className="btn btn-square"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApproveCreators;
