import { Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import SocialLogin from "../SocialLogin/SocialLogin";
import { Link, useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import useAxios from "../../hooks/useAxios";
import Swal from "sweetalert2";
import BannerImag from "../../assets/banner-img.png";

const Register = () => {
  const { registerUser, updateUserProfile } = useAuth();
  const navigate = useNavigate();
  const axiosSecure = useAxios();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);

  const handleUserRegister = (data) => {
    const email = data.email;
    const password = data.password;
    const profileImage = data.photoURL[0];

    registerUser(email, password)
      .then(async (result) => {
        console.log(result.user);

        //store the image and get the photo url
        const formData = new FormData();
        formData.append("image", profileImage);

        const image_API_URL = `https://api.imgbb.com/1/upload?expiration=600&key=${
          import.meta.env.VITE_IMAGE_HOST
        }`;

        axios.post(image_API_URL, formData).then((res) => {
          const photoURL = res.data.data.display_url;

          //store userinfo in database
          const userInfo = {
            email: email,
            displayName: data.name,
            photoURL: photoURL,
          };
          axiosSecure.post("/users", userInfo).then((res) => {
            navigate(location?.state || "/");
            if (res.data.insertedId) {
              console.log("user created in the data base");
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Registration Successfully",
                showConfirmButton: false,
                timer: 2000,
              });
            }
          });

          //update user profile
          const userProfile = {
            displayName: data.name,
            photoURL: photoURL,
          };

          //update user profile
          updateUserProfile(userProfile)
            .then(() => {})
            .catch((error) => {
              console.log(error.message);
            });
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="flex gap-4 h-screen bg-primary/10 ">
      {/* form  */}
      <div className="flex-1  flex justify-center items-center ">
        <div className="shadow-xl bg-gray-50 mx-auto w-full max-w-md p-8 rounded-lg ">
          <div className="mb-5">
            <p>Welcome to</p>
            <h1 className="text-4xl font-bold bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent ">
              Prize Arena
            </h1>
            <p>
              Have an account? please,{" "}
              <Link to="/login" className="text-blue-500 underline">
                Login
              </Link>
            </p>
          </div>

          <form onSubmit={handleSubmit(handleUserRegister)}>
            <fieldset className="space-y-2">
              {/* Name */}
              <div>
                <label className="block mb-1 text-gray-700 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  className="w-full border border-gray-300 px-3 py-2 outline-0 focus:ring-2 focus:ring-primary/70 rounded-sm"
                  placeholder="Enter Your Name"
                />
                {errors.name?.type === "required" && (
                  <p className="text-red-500 text-xs"> Name is required</p>
                )}
              </div>

              {/* Photo Upload */}
              <div>
                <label className="block mb-1 text-gray-700 font-medium">
                  Photo
                </label>
                <input
                  type="file"
                  {...register("photoURL")}
                  className="file-input outline-0 w-full  border border-gray-300  rounded-sm"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block mb-1 text-gray-700 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  className="w-full border border-gray-300 px-3 py-2 outline-0 focus:ring-2 focus:ring-primary/70 rounded-sm"
                  placeholder="Enter Your Email"
                />
                {errors.email?.type === "required" && (
                  <p className="text-red-500 text-xs"> Email is required</p>
                )}
              </div>

              {/* Password */}
              <div>
                <label className="block mb-1 text-gray-700 font-medium">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={`${showPassword ? "text" : "password"}`}
                    {...register("password", { required: true })}
                    className="w-full border border-gray-300 px-3 py-2 outline-0 focus:ring-2 focus:ring-primary/70 rounded-sm"
                    placeholder="Enter Your Password"
                  />
                  <button
                    onClick={() => setShowPassword(!showPassword)}
                    className=" absolute top-2 right-3"
                  >
                    {showPassword ? <EyeOff /> : <Eye />}
                  </button>
                </div>
                {errors.password?.type === "required" && (
                  <p className="text-red-500 text-xs"> Password is required</p>
                )}
              </div>

              {/* Button */}
              <div>
                <input
                  type="submit"
                  value="Register Now"
                  className="w-full bg-linear-to-r from-primary to-secondary text-white py-2 mt-3 hover:opacity-90 rounded-sm"
                />
              </div>
            </fieldset>
          </form>
          {/* or operator */}
          <div className="flex items-center gap-4 my-5">
            <hr className="grow border-gray-300" />
            <p className="text-gray-800">OR</p>
            <hr className="grow border-gray-300" />
          </div>
          <SocialLogin></SocialLogin>
        </div>
      </div>
      {/* img */}
      <div className="flex-1 bg-secondary hidden lg:flex justify-center items-center">
        <img
          className="max-w-200 max-h-150"
          src={BannerImag}
          alt={BannerImag}
        />
      </div>
    </div>
  );
};

export default Register;
