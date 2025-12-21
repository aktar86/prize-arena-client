import { useQuery } from "@tanstack/react-query";
import React, { useRef } from "react";
import { data, Link, useParams } from "react-router";
import useAxios from "../../hooks/useAxios";
import Loder from "../../components/Loder/Loder";
import ContestNotFoundPage from "../../components/ContestNotFoundPage/ContestNotFoundPage";
import useAuth from "../../hooks/useAuth";
import Countdown from "../../components/Countdown/Countdown";
import { FaArrowLeft, FaUser } from "react-icons/fa";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import closeIcon from "../../assets/close.png";

const ContestCardDetails = () => {
  const { user, darkMode } = useAuth();
  const { id } = useParams();
  const axiosSecure = useAxios();
  const submitModalRef = useRef();

  console.log(user);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  //contest card details data fetch here
  const { isLoading, data: contest } = useQuery({
    queryKey: ["contest", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/contests/${id}`);
      return res.data;
    },
    enabled: !!id,
  });

  //participation status check for register button disable
  const { data: participation } = useQuery({
    queryKey: ["participation", id, user?.uid],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/participation/${id}?userUID=${user.uid}`
      );
      return res.data;
    },
    enabled: !!id && !!user?.uid,
  });
  const hasParticipated = participation?.participated ?? false;
  console.log(hasParticipated);

  //submit-task for status check and btn disable
  const { data: submissionData, refetch } = useQuery({
    queryKey: ["submit-task", id, user?.uid],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/submit-task?contestId=${id}&userId=${user?.uid}`
      );
      return res.data; // Eta { isSubmitted: true/false } return korbe
    },
    enabled: !!id && !!user?.uid,
  });

  const hasSubmitted = submissionData?.isSubmitted || false;
  console.log(hasSubmitted);
  if (!contest) return <ContestNotFoundPage />;

  const {
    contestImage,
    contestTitle,
    contestDescription,
    contestTaskInstruction,
    contestDeadline,
    contestCategory,
    contestPrizeMoney,
    creatorName,
    contestEntryFee,
    status,
    participantsCount,
  } = contest;

  //payment button
  const hanleRegisterAndPayment = async (contest) => {
    // console.log(contest);

    const paymentInfo = {
      contestId: contest._id,
      userUID: user?.uid,
      title: contest.contestTitle,
      cost: contest.contestEntryFee,
      email: user.email,
      name: contest.creatorName,
      deadline: contest.contestDeadline,
    };
    console.log("paymentInfo", paymentInfo);

    const res = await axiosSecure.post("/create-checkout-session", paymentInfo);
    // console.log(res.data.url);
    window.location.assign(res.data.url);
  };

  //open modal button
  const handleSubmitModal = () => {
    submitModalRef.current.showModal();
  };

  //submit modal
  const handleModalSubmit = (contest, data) => {
    console.log(contest);
    console.log(data);

    const submitInfo = {
      contestId: contest._id,
      name: user?.displayName,
      email: user?.email,
      userId: user?.uid,
      photoUrl: user?.photoURL,
      ...data,
    };
    console.log(submitInfo);

    axiosSecure.post("/submit-task", submitInfo).then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        reset();
        submitModalRef.current.close();
        refetch();
        setTimeout(() => {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Task has been submitted successfully",
            showConfirmButton: true,
            timer: 2000,
            focusConfirm: false,
          });
        }, 100);
      } else {
        Swal.fire({
          position: "center",
          icon: "error",
          title: res.data.message || "Submission failed",
          showConfirmButton: true,
        });
      }
    });
  };

  const onSubmit = (data) => {
    handleModalSubmit(contest, data);
  };

  const isClosedByStatus = status === "Closed";
  const isContestEnd = new Date(contestDeadline) < new Date();
  const isRegistrationDisabled =
    hasParticipated || isContestEnd || isClosedByStatus;
  console.log(isRegistrationDisabled);

  return (
    <>
      {isLoading ? (
        <Loder />
      ) : (
        <div
          className={`w-full max-w-[1440px] mx-auto p-2 lg:p-2  ${
            darkMode ? "text-white bg-black" : "bg-white"
          }`}
        >
          <div className="flex items-center justify-center mt-10 ">
            <FaArrowLeft />
            <Link to="/all-contests" className="ml-2">
              {" "}
              Go Back
            </Link>
          </div>
          <div className="text-center lg:max-w-8/12 mx-auto my-10">
            <h1 className="text-3xl font-bold ">
              Contest <span className="text-secondary">Details</span>
            </h1>
            <p>
              Join this exciting contest to showcase your skills, compete with
              talented participants, gain recognition, and win amazing prizes.
              Don’t miss this opportunity to prove yourself and stand out.
            </p>
          </div>

          {/* card content wrap  */}
          <div>
            {/* img and title and description  */}
            <div>
              <div className="w-full lg:h-[500px]  grid lg:grid-cols-3 gap-4">
                <div className="lg:relative h-full w-full lg:col-span-2 overflow-hidden">
                  <img
                    className="w-full object-cover"
                    src={contestImage}
                    alt={contestImage}
                  />
                  {/* gradient overlay */}
                  <div className="lg:absolute lg:inset-0 lg:bg-linear-to-t from-gray-900/80 via-gray-900/40 to-transparent"></div>
                  {/* title and description  */}
                  <div className="lg:absolute  lg:bottom-10 lg:left-5 mt-5 lg:mt-0 ">
                    <h1 className="lg:text-white text-4xl font-bold">
                      {contestTitle}
                    </h1>
                    <p className="lg:text-white max-w-4/5 mt-2">
                      {contestDescription}
                    </p>
                  </div>
                </div>
                <div className="h-full hidden  lg:flex flex-col gap-4 overflow-hidden">
                  <div className="flex-1 w-full overflow-hidden">
                    <img
                      className="w-full object-cover"
                      src={contestImage}
                      alt={contestImage}
                    />
                  </div>
                  <div className="flex-1  overflow-hidden">
                    <img
                      className="w-full object-cover"
                      src={contestImage}
                      alt={contestImage}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* content  */}
            <div
              className={`mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 p-5 ${
                darkMode ? "bg-black text-white" : " bg-secondary/10"
              }`}
            >
              {/* left */}
              <div className="md:col-span-2 ">
                <div>
                  <p className="lg:max-w-2/3">
                    <span className="font-semibold text-xl">
                      Full Task and Instruction:
                    </span>{" "}
                    <br /> {contestTaskInstruction}
                  </p>
                </div>

                <div className="my-10">
                  <p className=" mt-5 ">
                    Category: <br />
                    <span className=" text-xl font-semibold">
                      {contestCategory}
                    </span>
                  </p>
                  <p className="mt-5">
                    Prize Money: <br />
                    <span className="text-3xl font-bold">
                      {" "}
                      ${contestPrizeMoney}
                    </span>
                  </p>

                  <p className="mt-5">Participants: {participantsCount}</p>
                </div>

                <div>
                  <p>Contest Created By- </p>
                  <h3 className="text-2xl font-bold">{creatorName}</h3>
                  {/* <p>{creatorEmail}</p> */}
                </div>
              </div>
              {/* right */}
              <div className=" flex flex-col justify-end items-end w-full ">
                <div
                  className={`${
                    darkMode ? "bg-gray-900 text-white" : "bg-white"
                  } w-full  p-5 shadow-sm  rounded-lg `}
                >
                  <div>
                    {status === "Closed" ? (
                      <>
                        <div className="flex flex-col justify-center items-center">
                          <img
                            src={closeIcon}
                            alt={closeIcon}
                            className="w-30"
                          />
                          <h2 className="text-2xl text-red-500 font-semibold">
                            Contest is closed
                          </h2>
                        </div>
                      </>
                    ) : (
                      <Countdown contestDeadline={contestDeadline} />
                    )}
                  </div>
                  <div className="flex gap-5 my-5">
                    <p>Status:</p>
                    <p>
                      {status === "Confirmed" ? (
                        <span className="text-green-500">Active</span>
                      ) : (
                        <span className="text-red-500">Completed</span>
                      )}
                    </p>
                  </div>

                  <div className="my-5">
                    <h2 className="text-xl font-bold text-secondary">
                      Contest Winner:
                    </h2>
                    <div className="flex flex-col md:flex-row md:gap-2 ">
                      <img
                        src={contest.winner?.photoUrl}
                        alt={contest.winner?.photoUrl}
                        referrerPolicy="no-referrer"
                        className="max-w-20 rounded-full object-cover flex-1"
                      />
                      <div className="flex-1">
                        <p className="text-lg lg:text-2xl font-bold ">
                          {contest.winner.name}
                        </p>
                        <p className="text-sm ">{contest.winner.email}</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-5">
                    {/* register button */}
                    <button
                      onClick={() => hanleRegisterAndPayment(contest)}
                      disabled={isRegistrationDisabled}
                      className={`bg-linear-to-r from-primary to-secondary w-full py-2 text-xl text-white ${
                        isRegistrationDisabled
                          ? "opacity-50 cursor-not-allowed"
                          : "cursor-pointer"
                      }`}
                    >
                      {hasParticipated
                        ? "Already Registered"
                        : isClosedByStatus || isContestEnd
                        ? "Registration Closed"
                        : `Register & Pay ${contestEntryFee}`}
                    </button>

                    {/* task button */}
                    <button
                      disabled={!hasParticipated || hasSubmitted}
                      className={` py-2 w-full text-xl bg-gray-300 cursor-pointer ${
                        !hasParticipated || hasSubmitted
                          ? "btn-disabled opacity-50 cursor-not-allowed"
                          : "cursor-pointer"
                      }`}
                      onClick={() => handleSubmitModal()}
                    >
                      {hasSubmitted ? "Task Already Submitted" : "Submit Task"}
                    </button>
                  </div>

                  {/* modal for submit task */}
                  <dialog
                    ref={submitModalRef}
                    className="modal modal-bottom sm:modal-middle"
                  >
                    <div className="modal-box">
                      <form method="dialog" className="absolute right-3 top-3 ">
                        <button className="btn btn-sm btn-circle bg-linear-to-r from-primary to-secondary text-white">
                          ✕
                        </button>
                      </form>
                      <div className="pt-10">
                        <h3 className="font-semibold text-xl text-primary mb-2">
                          Submit Important Links and Text
                        </h3>
                        <hr className="border border-primary" />

                        <form onSubmit={handleSubmit(onSubmit)}>
                          <textarea
                            rows={5}
                            {...register("taskText", { required: true })}
                            className=" border-2  border-gray-400 rounded-lg p-2 outline-0  focus:border-2 focus:border-primary w-full mt-5"
                            placeholder="Write contest details..."
                          ></textarea>
                          {errors.taskText?.type === "required" && (
                            <p className="text-red-500">
                              Task Text is required
                            </p>
                          )}
                          <input
                            type="submit"
                            value="Submit Now"
                            className="btn w-full bg-linear-to-r from-primary to-secondary text-white mt-5"
                          />
                        </form>
                      </div>
                    </div>
                  </dialog>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ContestCardDetails;

// contestEntryFee
//

//
//
// createAt
// creatorEmail
// creatorName
// status
// _id
