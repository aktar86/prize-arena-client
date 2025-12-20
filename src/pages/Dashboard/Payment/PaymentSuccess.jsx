import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router";
import useAxios from "../../../hooks/useAxios";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const [paymentInfo, setPaymentInfo] = useState();
  const sessionId = searchParams.get("session_id");
  const axiosSecure = useAxios();
  const navigate = useNavigate();

  const hasCalledApi = useRef(false);

  useEffect(() => {
    if (sessionId && !hasCalledApi.current) {
      hasCalledApi.current = true;

      axiosSecure
        .patch(`/payment-success?session_id=${sessionId}`)
        .then((res) => {
          if (!paymentInfo) {
            setPaymentInfo({
              transactionId: res.data.transactionId,
              trackingId: res.data.trackingId,
            });
          }
        });
    }
  }, [sessionId, axiosSecure, paymentInfo]);
  return (
    <div className="bg-gray-200 h-[calc(100vh-80px)] flex items-center justify-center">
      <div className="bg-white p-5">
        <h1 className="text-2xl font-semibold text-green-500">
          Payment Success Page
        </h1>
        {paymentInfo ? (
          <>
            <p>Tracking Id: {paymentInfo.trackingId}</p>
            <p>Transaction Id: {paymentInfo.transactionId}</p>
            <div className="flex justify-center gap-5 mt-5">
              <button
                onClick={() => navigate("/all-contests")}
                className="bg-linear-to-r from-primary to-secondary px-5 py-2 text-white w-full"
              >
                Go All Contest
              </button>
            </div>
          </>
        ) : (
          <p>Pay First</p>
        )}
      </div>
    </div>
  );
};

export default PaymentSuccess;
