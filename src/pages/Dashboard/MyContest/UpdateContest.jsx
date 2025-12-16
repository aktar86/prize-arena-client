import React, { useState } from "react";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import axios from "axios";
import { Link, useParams } from "react-router";
import useAxios from "../../../hooks/useAxios";
import Swal from "sweetalert2";
import { FaArrowLeft } from "react-icons/fa";

const UpdateContest = () => {
  const { register, handleSubmit, setValue } = useForm();
  const [deadline, setDeadline] = useState();
  const axiosSecure = useAxios();
  const { id } = useParams();

  const categories = [
    "Logo Design",
    "Photography",
    "Business Idea",
    "Landing Page UI",
  ];

  const handleUpdateContest = (data) => {
    const contestBannerImage = data.contestImage[0];

    const formData = new FormData();
    formData.append("image", contestBannerImage);

    const img_api_url = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_IMAGE_HOST
    }`;

    axios.post(img_api_url, formData).then((res) => {
      const photoURL = res.data.data.display_url;

      const updateInfo = {
        ...data,
        contestImage: photoURL,
      };

      axiosSecure.patch(`/contests/${id}`, updateInfo).then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount) {
          Swal.fire({
            position: "center",
            icon: "success",
            text: "Contest updated Successfully. Please, wait for admin apprval",
            showConfirmButton: true,
            timer: 2000,
          });
        }
      });
    });
  };

  return (
    <div className="bg-secondary/10 min-h-[calc(100vh-84px)] py-10">
      <div className="flex flex-col justify-center items-center pb-5">
        <Link to="/dashboard/my-contest" className="flex items-center gap-2">
          <FaArrowLeft />
          <p>Go Back</p>
        </Link>
        <h1 className="text-3xl font-bold text-center mt-5">
          Update <span className="text-primary">Contest</span>
        </h1>
      </div>

      <div className="w-full max-w-xl mx-auto bg-white p-7 rounded-sm">
        <form onSubmit={handleSubmit(handleUpdateContest)}>
          <fieldset className="space-y-2">
            {/* name  */}
            <div>
              <label className="block"> Contest title</label>
              <input
                type="text"
                {...register("contestTitle")}
                className="border border-gray-300 w-full  py-2 focus:border focus:border-primary outline-0 rounded-sm "
              />
            </div>

            {/* IMAGE */}
            <div>
              <label className="block"> Image </label>
              <input
                type="file"
                {...register("contestImage")}
                className="border border-gray-300 w-full p-2 focus:ring-2  rounded-sm focus:ring-indigo-400 focus:outline-0"
              />
            </div>

            {/* Description  */}
            <div>
              <label className="block">Description</label>
              <textarea
                type="text"
                rows={3}
                {...register("contestDescription")}
                className="border border-gray-300 w-full  py-2 focus:border focus:border-primary outline-0 rounded-sm "
              />
            </div>

            {/* Task Instruction  */}
            <div>
              <label className="block">Task Instructions</label>
              <textarea
                rows={7}
                type="text"
                {...register("contestTaskInstruction")}
                className="border border-gray-300 w-full  py-2 focus:border focus:border-primary outline-0 rounded-sm "
              />
            </div>

            <div className="flex items-center gap-2">
              {/* deadline */}
              <div>
                <legend>Deadline</legend>
                <DatePicker
                  selected={deadline}
                  onChange={(data) => {
                    setDeadline(data);
                    setValue("contestDeadline", data, { shouldValidate: true });
                  }}
                  minDate={new Date()}
                  placeholderText="Select deadline"
                  className="border border-gray-300 w-full  py-2 focus:border focus:border-primary outline-0 rounded-sm  px-2"
                  showTimeSelect // enable time selection
                  timeFormat="HH:mm" // 24-hour format, you can use "hh:mm aa" for 12-hour
                  timeIntervals={15} // step in minutes
                  dateFormat="dd/MM/yyyy HH:mm" // format date + time
                />
              </div>

              {/* category */}
              <div className="flex-1">
                <label className="block text-sm font-medium">Category</label>
                <select
                  {...register("contestCategory")}
                  className="mt-1 w-full border border-gray-300  rounded-md p-2 outline-0 focus:ring-2 focus:ring-indigo-400"
                  required
                >
                  <option value="">Select Category</option>
                  {categories.map((category, index) => (
                    <option key={index} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex-1">
                <label className="block"> Prize Money</label>
                <input
                  type="number"
                  {...register("contestPrizeMoney")}
                  className="border border-gray-300 w-full  py-2 focus:border focus:border-primary outline-0 rounded-sm "
                />
              </div>
              <div>
                <label className="block">Entry Fee</label>
                <input
                  type="number"
                  {...register("contestEntryFee")}
                  className="border border-gray-300 w-full  py-2 focus:border focus:border-primary outline-0 rounded-sm "
                />
              </div>
            </div>

            <div>
              <input
                type="submit"
                value="Update Contest"
                className="bg-linear-to-r from-primary to-secondary text-white py-2 px-2 w-full mt-5 rounded-sm"
              />
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default UpdateContest;
