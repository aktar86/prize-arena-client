import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxios from "../../../../hooks/useAxios";
import { FaCheckCircle, FaTimesCircle, FaTrashAlt } from "react-icons/fa";
import { toast } from "react-toastify";

// admin route
const ContestManagement = () => {
  const axiosSecure = useAxios();
  const { refetch, data: contests = [] } = useQuery({
    queryKey: ["contests"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/contests`);
      return res.data;
    },
  });

  const handleApproveContest = (id) => {
    console.log(id._id);
    const updateStatus = { status: "approved" };

    axiosSecure.patch(`/contests/${id._id}`, updateStatus).then((res) => {
      console.log(res.data);

      if (res.data.modifiedCount) {
        refetch();
        toast.success("Contest Approved Successfully", {
          autoClose: 2000,
        });
      }
    });
  };

  return (
    <div>
      <h1 className="text-4xl font-bold">All Contest: {contests.length}</h1>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>SL</th>
              <th>Title</th>
              <th>Category</th>
              <th>Status</th>
              <th>Created At</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contests.map((contest, index) => (
              <tr key={contest._id}>
                <th>{index + 1}</th>
                <td>{contest.contestTitle}</td>
                <td>{contest.contestCategory}</td>
                <td
                  className={`${
                    contest.status === "approved"
                      ? "text-green-500"
                      : "text-amber-500"
                  }`}
                >
                  {contest.status}
                </td>
                <td>{new Date(contest.creatAt).toLocaleDateString()}</td>
                <td>
                  <button
                    onClick={() => handleApproveContest(contest)}
                    className="btn btn-squire bg-emerald-500 text-white"
                  >
                    <FaCheckCircle />
                  </button>
                  <button className="btn btn-squire md:mx-2 bg-rose-500 text-white">
                    <FaTimesCircle />
                  </button>
                  <button className="btn btn-squire bg-amber-500 text-white">
                    <FaTrashAlt />
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

export default ContestManagement;
