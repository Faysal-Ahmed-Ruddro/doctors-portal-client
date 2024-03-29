import { Alert, CircularProgress } from "@mui/material";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth"

const CheckOutForm = ({ appointment }) => {
  console.log(appointment);
  const {patientName, price , _id } = appointment;
  const stripe = useStripe();
  const elements = useElements();
  const {user} = useAuth()
  
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [success, setSuccess] = useState("");
  const [processing,setProcessing] = useState(false)

  useEffect(() => {
    fetch("https://immense-river-34161.herokuapp.com/create-payment-intent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [price]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    setProcessing(true)
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      setError(error.message);
      setSuccess("")
    } else {
      setError("");
      console.log(paymentMethod);
    }
    // payment intent
    const { paymentIntent, error:intentError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: patientName,
            email: user?.email
          },
        },
      }
    );
    if(intentError){
      setError(intentError.message);
      setSuccess("")
    }
    else {
      setError("");
      console.log(paymentIntent);
      setSuccess("Your Payment Process SuccessFully")
      setProcessing(false)
      //  save to db
      const payment = {
          amount : paymentIntent.amount,
          created: paymentIntent.created,
          last4 :paymentMethod.card.last4,
          transaction: paymentIntent.client_secret.slice("_secret")[0]
       }
      const url = `https://immense-river-34161.herokuapp.com/appointment/${_id}`;
      fetch(url,{
        method:"PUT",
        headers : {"content-type": "application/json"},
        body:JSON.stringify(payment)
      })
      .then(res => res.json())
      .then(data => console.log(data))
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
       {processing ?  <CircularProgress/> :
          <button type="submit" disabled={!stripe || success}>
          Pay:${price}
        </button>}
      </form>
      {error && <Alert severity="error">{error}</Alert>}
      {success && <Alert severity="success">{success}</Alert>}
    </div>
  );
};

export default CheckOutForm;
