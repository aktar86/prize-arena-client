import React from "react";
import useAuth from "../../../hooks/useAuth";
import useAxios from "../../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { MdDelete, MdEditSquare } from "react-icons/md";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Link, useNavigate } from "react-router";

const MyContest = () => {
  const { user } = useAuth();
  const axiosSecure = useAxios();

  const { data: creatorContests = [] } = useQuery({
    queryKey: ["contests", user?.email],
    queryFn: async () => {
      if (!user?.email) return [];

      const res = await axiosSecure.get(`/contests?email=${user.email}`);
      return res.data;
    },
    enabled: !!user?.email,
  });

  return (
    <div>
      <h1>Here is my Contest : {creatorContests.length}</h1>

      {/* table */}
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Category</th>
              <th>Status</th>
              <th>Create At</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {creatorContests.map((contest, intex) => (
              <tr key={contest._id}>
                <th>{intex + 1}</th>
                <td>{contest.contestTitle}</td>
                <td>{contest.contestCategory}</td>
                <td
                  className={`${
                    contest.status === "Confirmed"
                      ? "text-green-500"
                      : contest.status === "Rejected"
                      ? "text-red-500"
                      : "text-amber-500"
                  }`}
                >
                  {contest.status}
                </td>
                <td>{`${new Date(
                  contest.createAt
                ).toLocaleDateString()} ${" || "} ${new Date(
                  contest.createAt
                ).toLocaleTimeString()}`}</td>
                <td>
                  {contest.status === "Pending" ? (
                    <>
                      <Link
                        to="/dashboard/update-contest"
                        className="btn btn-squire bg-blue-500 hover:bg-blue-600 text-white"
                      >
                        <MdEditSquare />
                      </Link>
                      <button className="btn btn-squire bg-rose-500 hover:bg-rose-600 text-white lg:mx-2">
                        <MdDelete />
                      </button>
                    </>
                  ) : (
                    <button className="btn btn-squire bg-emerald-500 hover:bg-emerald-600 text-white">
                      <FaMagnifyingGlass />
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyContest;
