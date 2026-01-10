import React from "react";
import PieCharts from "../../../components/PieCharts/PieCharts";

const UsersTable = ({ usersData = [] }) => {
  return (
    <>
      <div className="flex gap-4">
        <div className="flex-2">
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
              {usersData.map((user, index) => (
                <tr key={user._id}>
                  <th>{index + 1}</th>
                  <td>
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
                  <td>{user.role}</td>
                  <td>{user.wins ? user.wins : 0}</td>
                  <td>
                    {new Date(user.createAt).toDateString()} <br />
                    {new Date(user.createAt).toLocaleTimeString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* <div className="flex-1">
          <div className=" w-full border border-amber-300 mb-5 p-5">
            <PieCharts />
          </div>
        </div> */}
      </div>
    </>
  );
};

export default UsersTable;
