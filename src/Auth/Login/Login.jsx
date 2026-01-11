import { Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router";
import SocialLogin from "../SocialLogin/SocialLogin";
import BannerImag from "../../assets/banner-img.png";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const Login = () => {
  const { signInUser } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);

  // 🔑 Quick credential fill
  const fillAdminCredential = () => {
    setValue("email", "admin@ph.com");
    setValue("password", "123456aA@");
  };

  const fillCreatorCredential = () => {
    setValue("email", "creator@aktar.com");
    setValue("password", "123456aA@");
  };

  const handleUserLogin = (data) => {
    signInUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          position: "center",
          icon: "success",
          text: "Login Successfully",
          showConfirmButton: true,
          timer: 2000,
        });
        navigate(location?.state || "/");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          text: error.message,
        });
      });
  };

  return (
    <div className="flex gap-4 h-screen bg-primary/10">
      {/* Left - Form */}
      <div className="flex-1 flex justify-center items-center">
        <div className="shadow-xl bg-gray-50 w-full max-w-md p-8 rounded-lg">
          {/* Heading */}
          <div className="mb-5">
            <p>Welcome back to</p>
            <h1 className="text-4xl font-bold bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
              Prize Arena
            </h1>
            <p>
              Don't have an account?{" "}
              <Link to="/register" className="text-blue-500 underline">
                Register
              </Link>
            </p>
          </div>

          {/* Quick Login Buttons */}
          <div className="flex gap-3 mb-4">
            <button
              type="button"
              onClick={fillAdminCredential}
              className="flex-1 border border-primary text-primary py-1 rounded hover:bg-primary hover:text-white transition"
            >
              Admin Login
            </button>

            <button
              type="button"
              onClick={fillCreatorCredential}
              className="flex-1 border border-secondary text-secondary py-1 rounded hover:bg-secondary hover:text-white transition"
            >
              Creator Login
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(handleUserLogin)}>
            <fieldset className="space-y-3">
              {/* Email */}
              <div>
                <label className="block mb-1 text-gray-700 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  className="w-full border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-primary/70 rounded-sm"
                  placeholder="Enter Your Email"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs">Email is required</p>
                )}
              </div>

              {/* Password */}
              <div>
                <label className="block mb-1 text-gray-700 font-medium">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    {...register("password", { required: true })}
                    className="w-full border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-primary/70 rounded-sm"
                    placeholder="Enter Your Password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute top-2 right-3 text-gray-600"
                  >
                    {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-red-500 text-xs">Password is required</p>
                )}
              </div>

              {/* Submit */}
              <input
                type="submit"
                value="Login"
                className="w-full bg-linear-to-r from-primary to-secondary text-white py-2 mt-3 hover:opacity-90 rounded-sm cursor-pointer"
              />
            </fieldset>
          </form>

          {/* OR */}
          <div className="flex items-center gap-4 my-5">
            <hr className="grow border-gray-300" />
            <p className="text-gray-800">OR</p>
            <hr className="grow border-gray-300" />
          </div>

          <SocialLogin />
        </div>
      </div>

      {/* Right - Image */}
      <div className="flex-1 bg-secondary hidden lg:flex justify-center items-center">
        <img className="max-w-[400px]" src={BannerImag} alt="Login Banner" />
      </div>
    </div>
  );
};

export default Login;
