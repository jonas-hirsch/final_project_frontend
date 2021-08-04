import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import MyCheckoutForm from "./MyCheckoutForm.js";
import "./PaymentTab.css";


const promise = loadStripe(process.env.REACT_APP_PUBLISHABLE_KEY);


const PaymentTab = ({ openTab, cartIndex }) => {
  return (
    <div className={openTab === cartIndex + 1 ? "block" : "hidden"} id="link3">
        <Elements stripe={promise}>
          <MyCheckoutForm />
        </Elements>
    </div>
  );
};
export default PaymentTab;
