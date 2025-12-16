import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router";
import useAxios from "../../../../hooks/useAxios";

const SubmitedTask = () => {
  const { id } = useParams();
  const axiosSecure = useAxios();
  console.log(id);

  const { data: submitTasks = [] } = useQuery({
    queryKey: ["submit-tasks", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/submit-task/${id}`);
      return res.data;
    },
  });

  console.log(submitTasks);
  return (
    <div>
      <h1> My Submitted Task : {submitTasks.length}</h1>

      <div>
        {/* table  */}
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th>SL</th>
                <th>Name</th>
                <th>Email</th>
                <th> Submitted Task</th>
                <th> Status</th>
                <th> Submit AT</th>
                <th> Action</th>
              </tr>
            </thead>
            <tbody>
              {submitTasks.map((task, index) => (
                <tr key={task._id}>
                  <th>{index + 1}</th>
                  <td>{task.name}</td>
                  <td>{task.email}</td>
                  <td>
                    <p>{task.taskText}</p>
                  </td>
                  <td className="text-green-500">{task.taskStatus}</td>
                  <td>
                    <p>{new Date(task.submitAt).toLocaleDateString()}</p>
                    <p>{new Date(task.submitAt).toLocaleTimeString()}</p>
                  </td>
                  <td>
                    <button className="bg-linear-to-r from-primary to-secondary btn text-white">
                      Winner
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SubmitedTask;
