import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router";
import useAxios from "../../hooks/useAxios";
import Loder from "../../components/Loder/Loder";
import ContestNotFoundPage from "../../components/ContestNotFoundPage/ContestNotFoundPage";
import useAuth from "../../hooks/useAuth";
import Countdown from "../../components/Countdown/Countdown";

const ContestCardDetails = () => {
  const { user, darkMode } = useAuth();
  const { id } = useParams();
  const axiosSecure = useAxios();

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

  console.log(participation);

  if (isLoading) return <Loder />;
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
  // console.log(user);

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

  return (
    <div
      className={`w-full max-w-[1440px] mx-auto p-2 lg:p-2  ${
        darkMode ? "text-white bg-gray-800" : "bg-white"
      }`}
    >
      <h1 className="text-3xl font-bold">
        Contest <span className="text-secondary">Details</span>
      </h1>

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
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 p-5 bg-secondary/10">
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
            <div className="w-full p-5 shadow-sm  bg-white rounded-lg ">
              <div>
                <Countdown contestDeadline={contestDeadline} />
              </div>
              <div className="flex gap-5 my-5">
                <p>Status:</p>
                <p>
                  {status === "Confirmed" ? (
                    <span className="text-green-500">Active</span>
                  ) : (
                    <span>Completed</span>
                  )}
                </p>
              </div>

              <div className="my-5">
                <p>Contest Winner:</p>
                <p className="text-xl font-bold">
                  Winner name will appear here
                </p>
              </div>
              <div className="space-y-5">
                <button
                  onClick={() => hanleRegisterAndPayment(contest)}
                  disabled={
                    participation === undefined || participation?.participated
                  }
                  className={`bg-linear-to-r from-primary to-secondary w-full py-2 text-xl text-white cursor-pointer`}
                >
                  Register & Pay ${contestEntryFee}
                </button>
                <button
                  disabled={!participation?.participated}
                  className="btn w-full text-xl "
                >
                  Submit Task
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
