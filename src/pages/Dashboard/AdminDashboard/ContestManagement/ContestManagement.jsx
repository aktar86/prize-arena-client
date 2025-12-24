import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxios from "../../../../hooks/useAxios";
import { FaCheckCircle, FaTimesCircle, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

// admin route
const ContestManagement = () => {
  const axiosSecure = useAxios();
  const { refetch, data: contestData = {} } = useQuery({
    queryKey: ["contests"],
    queryFn: async () => {
      const res = await axiosSecure.get("/contests");
      return res.data;
    },
  });

  const contests = contestData.contests || [];

  const updateContest = (id, status, titleText) => {
    const updateStatus = { status: status };

    axiosSecure.patch(`/contests/admin/${id._id}`, updateStatus).then((res) => {
      console.log(res.data);

      if (res.data.modifiedCount) {
        refetch();
        Swal.fire({
          position: "center",
          icon: "success",
          text: titleText,
          showConfirmButton: true,
          timer: 2000,
        });
      }
    });
  };

  const handleApproveContest = (contest) => {
    updateContest(contest, "Confirmed", "Contest Approved Successfully");
  };

  const handleRemoveContest = (contest) => {
    updateContest(contest, "Rejected", "Contest Rejected Successfully");
  };

  const handleContestDelete = (contest) => {
    Swal.fire({
      title: "Are you sure?",
      text: `You won't be able to revert ${contest.contestTitle}!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/contests/${contest._id}`).then((res) => {
          if (res.data.deletedCount) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your contest has been deleted.",
              icon: "success",
            });
          }
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
                    contest.status === "Confirmed"
                      ? "text-green-500"
                      : contest.status === "Rejected"
                      ? "text-red-500"
                      : "text-amber-500"
                  }`}
                >
                  {contest.status}
                </td>
                <td>{new Date(contest.createAt).toLocaleDateString()}</td>
                <td>
                  <button
                    onClick={() => handleApproveContest(contest)}
                    className="btn btn-squire bg-emerald-500 text-white"
                  >
                    <FaCheckCircle />
                  </button>
                  <button
                    onClick={() => handleRemoveContest(contest)}
                    className="btn btn-squire md:mx-2 bg-rose-500 text-white"
                  >
                    <FaTimesCircle />
                  </button>
                  <button
                    onClick={() => handleContestDelete(contest)}
                    className="btn btn-squire bg-amber-500 text-white"
                  >
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
