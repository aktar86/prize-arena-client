import React from "react";
import useAuth from "../../../../hooks/useAuth";
import useAxios from "../../../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import Loder from "../../../../components/Loder/Loder";

const MyProfile = () => {
  const { user } = useAuth();
  console.log(user);
  const axiosSecure = useAxios();

  const { data: userProfile = {}, isLoading } = useQuery({
    queryKey: ["user", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/update-profile?email=${user.email}`);

      return res.data;
    },
  });

  console.log("Profile Data:", userProfile);

  if (isLoading) {
    return <Loder />;
  }

  return (
    <div className=" max-w-md  mx-auto flex justify-center items-center h-[calc(100vh-80px)] ">
      <div className=" min-w-md bg-secondary/5 p-5 shadow-xl">
        <div>
          <h2 className="text-3xl  font-semibold">My Profile</h2>
          {/* <p>View and update your account's persnal information</p> */}
        </div>
        {/* profile photo and image */}
        <div className="my-8 flex flex-col-reverse md:flex-row justify-between items-center gap-5">
          <div className="flex justify-center items-center w-full">
            <div className=" w-40 h-40 object-cover rounded-full overflow-hidden border-5 border-green-500  ">
              <img
                className=" bg-white "
                src={user?.photoURL}
                alt={user?.photoURL}
              />
            </div>
          </div>
        </div>
        {/* name  */}
        <h3 className="text-center text-3xl font-semibold">
          {userProfile?.displayName}
        </h3>
        {/* email  */}
        <h3 className="text-center">{userProfile?.email}</h3>

        {/* Street  */}
        <p className="text-center">
          {userProfile.address ? userProfile.address : "No address added"}
        </p>

        <div className="mt-5 ">
          <button className="btn bg-linear-to-r from-primary to-secondary text-white w-full rounded-full ">
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
