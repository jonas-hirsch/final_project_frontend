import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
// import MyCheckoutForm from "./MyCheckoutForm.js";
import client from "../../utils/client"
import AnotherCheckoutForm from "./AnotherCheckoutForm"
import "./PaymentTab.css";

const PaymentTab = ({ openTab, cartIndex, me, setCartItems }) => {

  const [orderId, setOrderId] = useState()

  useEffect(() => {
    const fetchData = async () => {
      if (openTab === cartIndex + 1) {
        console.log("Opened payment tab.");
        try {
          console.log("Fetching order checkout data");
          const order = await client.post(`/order/checkout/${me.id}`);
          console.log({ order });
          setOrderId(order.data.orderId);
          setCartItems([]);
        } catch (error) {
          console.error(error);
        }
      }
    };
    fetchData();
  }, [openTab, cartIndex, setCartItems, me.id]);

  const promise = loadStripe(process.env.REACT_APP_PUBLISHABLE_KEY);

  return (
    <div className={openTab === cartIndex + 1 ? "block" : "hidden"} id="link3">
        <Elements stripe={promise}>
          <AnotherCheckoutForm orderId={orderId} />
        </Elements>
    </div>
  );
};
export default PaymentTab;
