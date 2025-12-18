import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useAxios from "../../../../hooks/useAxios";
import axios from "axios";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router";
import useAuth from "../../../../hooks/useAuth";

const AddContest = () => {
  const { user } = useAuth();
  const axiosSecure = useAxios();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const [deadline, setDeadline] = useState(null);

  const categories = [
    "Logo Design",
    "Photography",
    "Business Idea",
    "Landing Page UI",
  ];

  const handleAddContestForm = (data) => {
    console.log("handleAddContestForm:", data);
    const contestBannerImage = data.contestImage[0];

    const formData = new FormData();
    formData.append("image", contestBannerImage);

    const image_API_URL = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_IMAGE_HOST
    }`;

    axios.post(image_API_URL, formData).then((res) => {
      const photoURL = res.data.data.display_url;

      const updatedData = {
        ...data,
        contestImage: photoURL,
        creatorName: user?.displayName,
        creatorEmail: user?.email,
      };

      console.log("updatedData:", updatedData);

      axiosSecure.post("/contests", updatedData).then((res) => {
        if (res.data.insertedId) {
          navigate("/dashboard/my-contest");
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Contest Added Successfully. Please, wait for admin apprval",
            showConfirmButton: true,
            timer: 2000,
          });
        }
      });
    });
  };

  return (
    <div>
      <h1>Add contest form</h1>

      <div className="border border-gray-300 shadow-2xl p-10 w-full max-w-xl mx-auto rounded-xl">
        <form onSubmit={handleSubmit(handleAddContestForm)}>
          <fieldset className="space-y-2">
            {/* title */}
            <div>
              <legend className="font-semibold">Contest Title</legend>
              <input
                type="text"
                {...register("contestTitle", { required: true })}
                placeholder="Your contest title"
                className="border border-gray-300 w-full p-2 focus:ring-2  rounded-sm focus:ring-indigo-400 focus:outline-0"
              />
              {errors.contestTitle?.type === "required" && (
                <p className="text-red-500">Contest Title is required</p>
              )}
            </div>

            {/* IMAGE */}
            <div>
              <legend className="font-semibold">Image</legend>
              <input
                type="file"
                {...register("contestImage", { required: true })}
                className="border border-gray-300 w-full p-2 focus:ring-2  rounded-sm focus:ring-indigo-400 focus:outline-0"
              />
              {errors.contestImage?.type === "required" && (
                <p className="text-red-500">Image is required</p>
              )}
            </div>

            {/* category */}
            <div>
              <label className="block text-sm font-medium">Category</label>
              <select
                {...register("contestCategory", {
                  required: "Category is required",
                })}
                className="mt-1 w-full border border-gray-300  rounded-md p-2 outline-0 focus:ring-2 focus:ring-indigo-400"
                required
              >
                <option value="">Select Category</option>
                {categories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
                {/* errors */}
                {errors.contestCategory && (
                  <p className="text-red-500 text-sm">
                    {errors.contestCategory.message}
                  </p>
                )}
              </select>
            </div>

            {/* Description */}
            <div>
              <legend className="font-semibold">Description</legend>
              <input
                type="text"
                {...register("contestDescription", { required: true })}
                placeholder="Description"
                className="border border-gray-300 w-full p-2 focus:ring-2  rounded-sm focus:ring-indigo-400 focus:outline-0"
              />
              {errors.contestDescription?.type === "required" && (
                <p className="text-red-500">Contest Description is required</p>
              )}
            </div>

            {/* Task instruction */}
            <div>
              <legend className="font-semibold">Task Instruction</legend>
              <textarea
                type="text"
                rows={5}
                {...register("contestTaskInstruction", { required: true })}
                className="border border-gray-300 w-full p-2 focus:ring-2  rounded-sm focus:ring-indigo-400 focus:outline-0"
              />
              {errors.contestTaskInstruction?.type === "required" && (
                <p className="text-red-500">Contest Instruction is required</p>
              )}
            </div>

            {/* Price and Prize */}
            <div className="flex w-full gap-4">
              {/* Prize Money */}
              <div className="flex-1">
                <legend className="font-semibold">Prize Money</legend>
                <input
                  type="number"
                  placeholder="Prize Money"
                  {...register("contestPrizeMoney", { required: true })}
                  className="border border-gray-300 w-full p-2 focus:ring-2  rounded-sm focus:ring-indigo-400 focus:outline-0"
                />
                {errors.contestPrizeMoney?.type === "required" && (
                  <p className="text-red-500">Prize Money is required</p>
                )}
              </div>

              {/* Entry Fee */}
              <div className="flex-1">
                <legend className="font-semibold">Entry Fee </legend>
                <input
                  type="number"
                  placeholder="Entry Fee"
                  {...register("contestEntryFee", { required: true })}
                  className="border border-gray-300 w-full p-2 focus:ring-2  rounded-sm focus:ring-indigo-400 focus:outline-0"
                />
                {errors.contestEntryFee?.type === "required" && (
                  <p className="text-red-500">Entry Fee is required</p>
                )}
              </div>
            </div>

            {/* deadline */}
            <div className="w-full">
              <legend>Deadline</legend>
              <DatePicker
                selected={deadline}
                onChange={(data) => {
                  setDeadline(data);
                  setValue("contestDeadline", data, { shouldValidate: true });
                }}
                minDate={new Date()}
                placeholderText="Select deadline"
                className="border p-2 w-full rounded"
                showTimeSelect // enable time selection
                timeFormat="HH:mm" // 24-hour format, you can use "hh:mm aa" for 12-hour
                timeIntervals={15} // step in minutes
                dateFormat="dd/MM/yyyy HH:mm" // format date + time
              />
              {errors.contestDeadline && (
                <p className="text-red-500">Deadline is required</p>
              )}
            </div>

            {/* button */}
            <input
              type="submit"
              value="SUBMIT CONTEST"
              className="py-2 bg-linear-to-r from-primary to-secondary w-full mt-5 text-white"
            />
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default AddContest;
