import React from "react";
import useAuth from "../../../../hooks/useAuth";
import useAxios from "../../../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";

const MyParticipatedContest = () => {
  const { user } = useAuth();
  const axiosSecure = useAxios();

  const { data: myParticipation = [] } = useQuery({
    queryKey: ["my-participation", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/participation?email=${user?.email}`);
      return res.data;
    },
  });

  console.log(myParticipation);

  return (
    <div>
      <h1 className="text-3xl text-primary font-semibold">
        My Participated Contest : {myParticipation.length}
      </h1>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>contestId</th>
              <th>Email</th>
              <th>Payment Status</th>
            </tr>
          </thead>
          <tbody>
            {myParticipation.map((participate, index) => (
              <tr key={participate._id}>
                <th>{index + 1}</th>
                <td>{participate.contestId}</td>
                <td>{participate.userEmail}</td>
                <td>{participate.paymentStatus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyParticipatedContest;
