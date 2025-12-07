import { Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import SocialLogin from "../SocialLogin/SocialLogin";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);

  const handleUserRegister = (data) => {
    console.log("form Data:", data);
  };
  return (
    <div className="flex gap-4 h-screen bg-blue-50 ">
      {/* form  */}
      <div className="flex-1 border flex justify-center items-center ">
        <div className="shadow-xl bg-gray-50 mx-auto w-full max-w-md p-8 rounded-lg ">
          <div className="mb-5">
            <p>Welcome to</p>
            <h1 className="text-4xl font-bold bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent ">
              Prize Arena
            </h1>
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
      <div className="flex-1 border bg-green-500 hidden lg:flex">
        <h1>Image text </h1>
      </div>
    </div>
  );
};

export default Register;
