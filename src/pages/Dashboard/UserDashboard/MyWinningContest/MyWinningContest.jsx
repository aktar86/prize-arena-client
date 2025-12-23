import React from "react";
import useAuth from "../../../../hooks/useAuth";
import useAxios from "../../../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import Loder from "../../../../components/Loder/Loder";
import { Trophy } from "lucide-react";

const MyWinningContest = () => {
  const { user } = useAuth();
  const axiosSecure = useAxios();

  const { isLoading, data: myWinningContests = [] } = useQuery({
    queryKey: ["my-winnging-contests", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/my-won-contests?email=${user.email}`);
      return res.data;
    },
  });

  if (isLoading) {
    return <Loder />;
  }

  console.log(myWinningContests);
  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold text-primary">My winning Contests</h1>
      <p className="mt-10">({myWinningContests.length}) contests found</p>

      {/* <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th></th>
              <th>Contest Title</th>
              <th>Prize</th>
              <th>Contest Create</th>
            </tr>
          </thead>
          <tbody>
            {myWinningContests.map((contest, index) => (
              <tr key={contest._id}>
                <th>{index + 1}</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
        {myWinningContests.map((contest) => (
          <div
            key={contest._id}
            className="relative bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all"
          >
            {/* Top Right Decoration: Winning Icon */}
            <div className="absolute -top-3 -right-3 bg-yellow-400 text-white p-2 rounded-full shadow-lg">
              <Trophy />
            </div>

            <div className="flex flex-col h-full">
              {/* Contest Category/Status Badge */}
              <span className="text-xs font-bold text-yellow-600 uppercase tracking-wider mb-2">
                🏆 Champion
              </span>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {contest.contestTitle}
              </h3>

              {/* Info */}
              <div className="mt-auto">
                <p className="text-sm text-gray-500 mb-4">
                  Successfully closed on:{" "}
                  {new Date(contest.winner.declaredAt).toLocaleDateString()}
                </p>

                <div className="flex justify-between items-center bg-pink-50 p-3 ">
                  <span className="text-sm font-medium text-yellow-800">
                    Your Prize:
                  </span>
                  <span className="font-bold text-yellow-700">
                    ${contest.contestPrizeMoney || "Award"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyWinningContest;
