import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router";

const BecomeACreator = () => {
  const { user, darkMode } = useAuth();
  const axiosSecure = useAxios();
  const navigate = useNavigate();
  console.log(user);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const registerCreator = (data) => {
    console.log("register creator:", data);

    axiosSecure
      .post("/creators", data)
      .then((res) => {
        if (res.data.insertedId) {
          toast.success("Registration submitted! Wait for admin approval.", {
            onClose: () => navigate("/dashboard/leaderboard"),
            autoClose: 2000, // 2 sec
          });
        }
      })
      .catch((err) => {
        console.log("ERROR RESPONSE:", err.response?.data);

        const msg = err.response?.data?.message || "Something went wrong";
        toast.error(msg);
      });
  };
  return (
    <div
      className={`py-5  ${
        darkMode ? "bg-gray-900 text-white" : "bg-secondary/5 "
      }`}
    >
      <div className="max-w-2xl   rounded-xl w-full mx-auto">
        <h1 className="text-4xl font-bold my-10 text-center">
          Become A Contest <span className="text-primary">Creator</span>
        </h1>
      </div>

      <div
        className={`max-w-2xl   rounded-xl w-full mx-auto p-7 ${
          darkMode ? "bg-gray-800 text-white" : "bg-white"
        }`}
      >
        <form onSubmit={handleSubmit(registerCreator)}>
          <fieldset className="space-y-2">
            {/* creator name */}
            <div>
              <legend className="font-bold">Creator Name</legend>
              <input
                type="text"
                defaultValue={user?.displayName}
                readOnly
                {...register("creatorName", { required: true })}
                className="border border-gray-400 w-full p-2 rounded-sm outline-0 focus:ring-2 focus:ring-primary/60  "
              />
              {errors.creatorName?.type === "required" && (
                <p className="text-red-500">Name is required</p>
              )}
            </div>

            {/* email */}
            <div>
              <legend className="font-bold">Creator Email</legend>
              <input
                type="email"
                defaultValue={user?.email}
                {...register("creatorEmail", { required: true })}
                className="border border-gray-400 w-full p-2 rounded-sm outline-0 focus:ring-2 focus:ring-primary/60"
              />
              {errors.creatorEmail?.type === "required" && (
                <p className="text-red-500">Email is required</p>
              )}
            </div>

            {/* reasons why want to be a creator */}
            <div>
              <label className="block">Reasons why want to be a creator </label>
              <textarea
                {...register("creatorDescription")}
                rows={4} // height: 4 lines
                cols={50} // optional, can omit if using w-full
                className="border border-gray-400 w-full p-2 rounded-sm outline-0 focus:ring-2 focus:ring-primary/60"
              ></textarea>
            </div>

            {/* Contact info */}
            <div>
              <legend className="font-bold">Contact Number</legend>
              <input
                type="number"
                {...register("number", { required: true, maxLength: 11 })}
                onInput={(e) => {
                  if (e.target.value > 11) {
                    e.target.value = e.target.value.slice(0, 11);
                  }
                }}
                className="border border-gray-400 w-full p-2 rounded-sm outline-0 focus:ring-2 focus:ring-primary/60"
              />
              {errors.number?.type === "required" && (
                <p className="text-red-500">Number is required</p>
              )}
            </div>

            <input
              type="submit"
              value="Submit Now"
              className="bg-linear-to-r from-primary to-secondary w-full py-2 text-white mt-5"
            />
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default BecomeACreator;
