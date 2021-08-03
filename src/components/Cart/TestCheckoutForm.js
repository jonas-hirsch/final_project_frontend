import React, { useState, useEffect } from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import { CardElement } from '@stripe/react-stripe-js';

const TestCheckoutForm = () => {
    return (
        <>
        {/* <CardElement
        id="card-element-2"
      //   options={cardStyle}
      />
      <button>Test</button> */}
      <CardElement
  options={{
    style: {
      base: {
        fontSize: '16px',
        color: '#424770',
        '::placeholder': {
          color: '#aab7c4',
        },
      },
      invalid: {
        color: '#9e2146',
      },
    },
  }}
/>
      </>
    )
}

export default TestCheckoutForm
