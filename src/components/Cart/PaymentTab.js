import React from "react";

const PaymentTab = ({ openTab, cartIndex }) => {
  return (
    <div className={openTab === cartIndex + 1 ? "block" : "hidden"} id="link3">
      <div className="text-md text-body">
        <div className="flex justify-center align-center p-2 text-3xl">
          <h3>Payment</h3>
        </div>
        <div className="divide-y divide-gray-700 w-md max-w-md m-2 border border-light rounded-default">
          <form action="#" method="post" className="pt-10 pb-4 text-left px-2">
            <label className="font-semibold text-base text-secondary">
              Credit Card<span>*</span>
            </label>
            <br />
            <input
              type="tel"
              max-length="19"
              placeholder="XXXX XXXX XXXX XXX"
              required
              className="border rounded-default border-light w-full px-4 mb-4 mt-2 pb-1 pt-2 outline-none text-md text-body focus:border-danger"
            />
            <br />
            <label className="font-semibold text-base  text-secondary">
              ExpirationDate<span>*</span>
            </label>
            <br />
            <input
              type="tel"
              name="expiration_date"
              id="expiration_date"
              placeholder="MM/YYYY"
              required
              className="border rounded-default border-light w-full px-4 mb-4 mt-2 pb-1 pt-2 outline-none text-md text-body focus:border-danger"
            />
            <br />
            <label className="font-semibold text-base  text-secondary">
              Card Verification Number<span>*</span>
            </label>
            <br />
            <input
              type="tel"
              name="cvc"
              id="cvc"
              placeholder="CVC"
              required
              className="border rounded-default border-light w-full px-4 mb-4 mt-2 pb-1 pt-2 outline-none text-md text-body focus:border-danger"
            />
            <br />
            <div className="px-0 pb-2 pt-10 mx-0 text-center">
              <button className="bg-secondary  text-primary font-regular py-2.5 px-6 rounded-default text-xl shadow-xl active:bg-s-hover my-2 w-full">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default PaymentTab;
