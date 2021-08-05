import React, { useState, useEffect } from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import {CardElement} from '@stripe/react-stripe-js';

import client from "../../utils/client";
// import express from "express";

const MyCheckoutForm = () => {
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await client.get(`/payment/138`);
        setClientSecret(result.data.clientSecret);
      } catch (error) {
        console.error("Error");
        console.error(error);
      }
    };
    fetchData();
  }, []);
  // const cardStyle = {
  //   style: {
  //     base: {
  //         backgroundColor: 'pink',
  //       color: "#32325d",
  //       fontFamily: "Arial, sans-serif",
  //       fontSmoothing: "antialiased",
  //       fontSize: "16px",
  //       "::placeholder": {
  //         color: "#32325d",
  //       },
  //     },
  //     invalid: {
  //       color: "#fa755a",
  //       iconColor: "#fa755a",
  //     },
  //   },
  // };
  const handleChange = async (event) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };
  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setProcessing(true);
    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });
    if (payload.error) {
      setError(`Payment failed ${payload.error.message}`);
      setProcessing(false);
    } else {
      setError(null);
      setProcessing(false);
      setSucceeded(true);
    }
  };
  return (
    <>
      <form style={{margin: "50px"}} id="payment-form" onSubmit={handleSubmit}>
        {/* <input id="card-element" options={cardStyle} onChange={handleChange} /> */}
        <CardElement
          id="card-element"
        //   options={cardStyle}
          onChange={handleChange}
        />
        <button disabled={processing || disabled || succeeded} id="submit">
          <span id="button-text">
            {processing ? (
              <div className="spinner" id="spinner"></div>
            ) : (
              "Pay now"
            )}
          </span>
        </button>
        {/* Show any error that happens when processing the payment */}
        {error && (
          <div className="card-error" role="alert">
            {error}
          </div>
        )}
        {/* Show a success message upon completion */}
        <p className={succeeded ? "result-message" : "result-message hidden"}>
          Payment succeeded, see the result in your
          <a href={`https://dashboard.stripe.com/test/payments`}>
            {" "}
            Stripe dashboard.
          </a>{" "}
          Refresh the page to pay again.
        </p>
      </form>
    </>
  );
};


export default MyCheckoutForm;


// const CheckoutForm = () => {
//     return (
//         <div className="text-md text-body">
//         <div className="flex justify-center align-center p-2 text-3xl">
//           <h3>Payment</h3>
//         </div>
//         <div className="divide-y divide-gray-700 w-md max-w-md m-2 border border-light rounded-default">
//           <form action="#" method="post" className="pt-10 pb-4 text-left px-2">
//             <label className="font-semibold text-base text-secondary">
//               Credit Card<span>*</span>
//             </label>
//             <br />
//             <input
//               type="tel"
//               max-length="19"
//               placeholder="XXXX XXXX XXXX XXX"
//               required
//               className="border rounded-default border-light w-full px-4 mb-4 mt-2 pb-1 pt-2 outline-none text-md text-body focus:border-danger"
//             />
//             <br />
//             <label className="font-semibold text-base  text-secondary">
//               ExpirationDate<span>*</span>
//             </label>
//             <br />
//             <input
//               type="tel"
//               name="expiration_date"
//               id="expiration_date"
//               placeholder="MM/YYYY"
//               required
//               className="border rounded-default border-light w-full px-4 mb-4 mt-2 pb-1 pt-2 outline-none text-md text-body focus:border-danger"
//             />
//             <br />
//             <label className="font-semibold text-base  text-secondary">
//               Card Verification Number<span>*</span>
//             </label>
//             <br />
//             <input
//               type="tel"
//               name="cvc"
//               id="cvc"
//               placeholder="CVC"
//               required
//               className="border rounded-default border-light w-full px-4 mb-4 mt-2 pb-1 pt-2 outline-none text-md text-body focus:border-danger"
//             />
//             <br />
//             <div className="px-0 pb-2 pt-10 mx-0 text-center">
//               <button className="bg-secondary  text-primary font-regular py-2.5 px-6 rounded-default text-xl shadow-xl active:bg-s-hover my-2 w-full">
//                 Submit
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     )
// }
