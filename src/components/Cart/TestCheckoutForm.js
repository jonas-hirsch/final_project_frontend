import React, { useState, useEffect } from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import {CardElement} from '@stripe/react-stripe-js';

const TestCheckoutForm = () => {
    return (
        <>
        <CardElement
        id="card-element-2"
      //   options={cardStyle}
      />
      <button>Test</button>
      </>
    )
}

export default TestCheckoutForm
