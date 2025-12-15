import React, { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router";
import useAxios from "../../../hooks/useAxios";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const [paymentInfo, setPaymentInfo] = useState();
  const sessionId = searchParams.get("session_id");
  const axiosSecure = useAxios();

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
    <div>
      <h1>Payment Success Page</h1>
      {paymentInfo ? (
        <>
          <p>{paymentInfo.trackingId}</p>
          <p>{paymentInfo.transactionId}</p>
        </>
      ) : (
        <p>Pay First</p>
      )}
    </div>
  );
};

export default PaymentSuccess;
