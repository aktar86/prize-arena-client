import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import useAxios from "../../../hooks/useAxios";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const [paymentInfo, setPaymentInfo] = useState();
  const sessionId = searchParams.get("session_id");
  const axiosSecure = useAxios();
  console.log(sessionId);

  useEffect(() => {
    if (sessionId) {
      axiosSecure
        .patch(`payment-success?session_id=${sessionId}`)
        .then((res) => {
          console.log(res.data);
          if (!paymentInfo) {
            setPaymentInfo({
              transactionId: res.data.transactionId,
              trackingId: res.data.trackingId,
            });
          }
        });
    }
  }, [sessionId, axiosSecure]);
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
