import React from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router";

const ContestCard = ({ contest }) => {
  const { darkMode } = useAuth();
  const {
    _id: id,
    contestImage,
    contestTitle,
    contestDescription,
    participantsCount,
    status,
  } = contest;

  const descriptionTrim =
    contestDescription.length > 100
      ? contestDescription.slice(0, 60) + "..."
      : contestDescription;

  return (
    <div
      className={`p-3 flex flex-col shadow-lg ${
        darkMode ? "bg-gray-800 text-white" : "bg-white"
      }`}
    >
      <img
        className="w-full object-cover h-[250px]"
        src={contestImage}
        alt={contestImage}
      />
      {/* card body */}
      <div className="flex-1 my-2">
        <h3 className="font-semibold text-2xl">{contestTitle}</h3>
        <p className="my-2">
          <span className="font-bold">Description: </span>
          {descriptionTrim}
        </p>
      </div>
      <div className="flex items-center gap-5">
        <p className="  py-1 text-left flex-1">
          Participate Count:{" "}
          <span className="text-orange-500">{participantsCount}</span>
        </p>
        <p className="text-orange-500  py-1 text-right flex-1">
          Status:{" "}
          <span
            className={`${
              status === "Closed" ? "text-red-500" : "text-green-500"
            }`}
          >
            {status}
          </span>
        </p>
      </div>
      {/* card btn */}
      <Link
        to={`/contests/contest-card-details/${id}`}
        className="w-full py-2 bg-linear-to-r from-primary to-secondary text-white font-semibold flex justify-center items-center "
      >
        See Details
      </Link>
    </div>
  );
};

export default ContestCard;

// contestCategory
// contestDeadline
// contestDescription
// contestEntryFee
//
// contestPrizeMoney
//
//
// createAt
// creatorEmail
// creatorName
// status
// _id
