import React, { useState, useEffect } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

import client from "../../utils/client";

import "./AnotherCheckoutForm.module.css";

export default function CheckoutForm({ orderId }) {
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();

  //   {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify({items: [{ id: "xl-tshirt" }]})
  //   }

  useEffect(() => {
    console.log("Fetching payment data the order with the id : " + orderId);
    // Create PaymentIntent as soon as the page loads
    client
      .get(`/payment/${orderId}`)
      .then(({ data }) => {
        setClientSecret(data.clientSecret);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, [orderId]);

  const cardStyle = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: "Arial, sans-serif",
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#32325d",
        },
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  };

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

  const styles = {
    form: {
      width: "30vw",
      alignSelf: "center",
      borderRadius: "7px",
      boxShadow: `0px 0px 0px 0.5px rgba(50, 50, 93, 0.1), 0px 2px 5px 0px rgba(50, 50, 93, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.07)`,
      padding: "40px",
      justifyContent: "center",
    },
    button: {
      background: "#5469d4",
      fontFamily: `Arial, sans-serif`,
      color: "#ffffff",
      borderRadius: "0 0 4px 4px",
      border: 0,
      padding: "12px 16px",
      fontSize: "16px",
      fontWeight: 600,
      cursor: "pointer",
      display: "block",
      transition: `all 0.2s ease`,
      boxShadow: `0px 4px 5.5px 0px rgba(0, 0, 0, 0.07)`,
      width: "100%",
    },
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit} style={styles["form"]}>
      <CardElement
        id="card-element"
        options={cardStyle}
        onChange={handleChange}
      />
      <button
        disabled={processing || disabled || succeeded}
        id="submit"
        style={styles["button"]}
      >
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
        Payment succeeded, you've received an E-Mail for confirmation.
      </p>
    </form>
  );
}
