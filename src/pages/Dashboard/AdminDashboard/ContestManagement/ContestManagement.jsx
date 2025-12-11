import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxios from "../../../../hooks/useAxios";
import { FaCheckCircle, FaTimesCircle, FaTrashAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

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

  const updateContest = (id, status, titleText) => {
    const updateStatus = { status: status };

    axiosSecure.patch(`/contests/${id._id}`, updateStatus).then((res) => {
      console.log(res.data);

      if (res.data.modifiedCount) {
        refetch();
        Swal.fire({
          position: "center",
          icon: "success",
          title: titleText,
          showConfirmButton: true,
          timer: 2000,
        });
      }
    });
  };

  const handleApproveContest = (id) => {
    updateContest(id, "Confirm", "Contest Approved Successfully");
  };

  const handleRemoveContest = (id) => {
    updateContest(id, "Reject", "Contest Rejected Successfully");
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
                    contest.status === "Confirm"
                      ? "text-green-500"
                      : contest.status === "Reject"
                      ? "text-red-500"
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
                  <button
                    onClick={() => handleRemoveContest(contest)}
                    className="btn btn-squire md:mx-2 bg-rose-500 text-white"
                  >
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
