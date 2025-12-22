import React, { useState } from "react";
import useAuth from "../../../../hooks/useAuth";
import useAxios from "../../../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import Loder from "../../../../components/Loder/Loder";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";

const MyProfile = () => {
  const { user } = useAuth();
  console.log(user);
  const axiosSecure = useAxios();

  const [isEditing, setIsEditing] = useState(false);

  const { register, handleSubmit, reset } = useForm();

  const {
    refetch,
    data: userProfile = {},
    isLoading,
  } = useQuery({
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

  const handleUpdateFormOpen = () => {
    setIsEditing(true);
  };

  const handleUpdateProfile = (data) => {
    console.log(data);
    const profileImage = data.photoURL[0];
    console.log(profileImage);

    const formData = new FormData();
    formData.append("image", profileImage);

    const image_API_URL = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_IMAGE_HOST
    }`;

    axios.post(image_API_URL, formData).then((res) => {
      const photoURL = res.data.data.display_url;

      //store userinfo in database
      const userInfo = {
        displayName: data.name,
        photoURL: photoURL,
        address: data.address,
      };

      console.log(userInfo);
      axiosSecure
        .patch(`/update-profile?email=${user?.email}`, userInfo)
        .then((res) => {
          if (res.data.modifiedCount) {
            refetch();
            reset();
            setIsEditing(false);
            Swal.fire({
              position: "center",
              icon: "success",
              text: "Profile Update Successfully",
              showConfirmButton: true,
              timer: 2000,
            });
          }
        });
    });
  };

  return (
    <div className=" max-w-md  mx-auto flex justify-center items-center h-[calc(100vh-80px)] ">
      {isEditing ? (
        <div className="min-w-md bg-secondary/3 p-5 ">
          <h3 className="text-2xl font-semibold text-primary mb-5">
            Update Profile Form
          </h3>
          <form
            onSubmit={handleSubmit(handleUpdateProfile)}
            className="space-y-3"
          >
            <div>
              <label className="block"> Name </label>
              <input
                type="text"
                placeholder="Update Your Name"
                {...register("name")}
                className="border w-full py-2 rounded-lg px-2 border-gray-300 bg-white focus:ring focus:ring-primary outline-0"
              />
            </div>
            {/* photo */}
            <div>
              <label className="block"> Photo </label>
              <input
                type="file"
                placeholder="Update Your Name"
                {...register("photoURL")}
                className="border w-full py-2 rounded-lg px-2 border-gray-300 bg-white focus:ring focus:ring-primary outline-0"
              />
            </div>

            {/* address  */}
            <div>
              <label className="block"> Address </label>
              <input
                type="text"
                placeholder="address"
                {...register("address")}
                className="border w-full py-2 rounded-lg px-2 border-gray-300 bg-white focus:ring focus:ring-primary outline-0"
              />
            </div>
            <div className="flex items-center gap-5">
              <input
                type="submit"
                value="Save Changes"
                className="btn flex-1 w-full rounded-full mt-5 bg-green-500 text-white"
              />
              <button onClick={() => setIsEditing(false) } className="btn flex-1 w-full  rounded-full mt-5 bg-red-500 text-white">
                Cancel
              </button>
            </div>
          </form>
        </div>
      ) : (
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
                  className=" bg-white w-full h-full object-cover "
                  src={userProfile?.photoURL}
                  alt={userProfile?.photoURL}
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
            <button
              onClick={handleUpdateFormOpen}
              className="btn bg-linear-to-r from-primary to-secondary text-white w-full rounded-full "
            >
              Update
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyProfile;
