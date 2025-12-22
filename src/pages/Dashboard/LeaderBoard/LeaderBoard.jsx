import React from "react";
// import useRole from "../../../hooks/useRole";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../hooks/useAxios";

const LeaderBoard = () => {
  // const { role } = useRole();
  const axiosSecure = useAxios();

  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/leaderboard?role=user");
      return res.data;
    },
  });
  return (
    <div>
      {/* <h1 className="text-5xl font-bold">Leaderboard : {role}</h1>
      <p>Users: {users.length}</p> */}

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>SL</th>
              <th>Name</th>
              <th>Role</th>
              <th>Win Contests</th>
              <th>Create At</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user, index) => (
              <tr key={user._id}>
                <th className="bg-blue-100">{index + 1}</th>
                <td className="bg-pink-100">
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className=" rounded-lg h-12 w-12">
                        <img
                          src={user.photoURL}
                          referrerPolicy="no-referrer"
                          alt={user.photoURL}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user.displayName}</div>
                      <div className="text-sm opacity-50">{user.email}</div>
                    </div>
                  </div>
                </td>
                <td className="bg-green-200">{user.role}</td>
                <td className="bg-orange-200">{user.wins ? user.wins : 0}</td>
                <td className="bg-purple-300">
                  {new Date(user.createAt).toDateString()} <br />
                  {new Date(user.createAt).toLocaleTimeString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeaderBoard;
