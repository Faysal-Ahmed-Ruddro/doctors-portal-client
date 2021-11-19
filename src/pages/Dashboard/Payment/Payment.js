import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm"

const stripePromise = loadStripe(
  "pk_test_51JwgwNGo1zBCbDa1ww7mB4z2FZwjgnLR400kfcgVPlVhQZZ53YKlXV3cB3ShU5HRAJ5uk1t4nL0iZCJkyxIFRJiJ009grJ59A4"
);

const Payment = () => {
  const { appointmentId } = useParams();
  const [appointment, setAppointment] = useState({});
  useEffect(() => {
    fetch(
      `https://immense-river-34161.herokuapp.com/appointment/${appointmentId}`
    )
      .then((res) => res.json())
      .then((data) => setAppointment(data));
  }, [appointmentId]);
  return (
    <div>
      <h2>
        Please Pay for: {appointment.patientName} for {appointment.serviceName}
      </h2>
      <h4>Pay: ${appointment.price}</h4>
      {appointment?.price && (
        <Elements stripe={stripePromise}>
          <CheckOutForm appointment={appointment} />
        </Elements>
      )}
    </div>
  );
};

export default Payment;