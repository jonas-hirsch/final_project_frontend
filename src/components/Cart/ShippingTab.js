import React from "react";

const ShippingTab = ({ openTab, cartIndex, setOpenTab }) => {
  const continueToPayment = () => {
    setOpenTab(3);
    window.scrollTo(0, 0);
  };
  return (
    <div className={openTab === cartIndex + 1 ? "block" : "hidden"} id="link2">
      <div className="text-md text-body">
        <div className="flex justify-center align-center p-2 text-3xl">
          <h3>Shipping</h3>
        </div>
        <div className="divide-y divide-gray-700 w-md max-w-md m-2 border border-light rounded-default">
          <form action="#" method="post" className="pt-10 pb-6 text-left px-2">
            <label className="font-semibold text-base text-secondary">
              Email address<span>*</span>
            </label>
            <br />
            <input
              type="text"
              name="email_address"
              id="email_address"
              placeholder="email@example.com"
              required
              className="border rounded-default border-light  w-full px-4 mb-4 mt-2 pb-1 pt-2 outline-none focus:border-danger"
            />
            <br />
            <label className="font-semibold text-base  text-secondary">
              First name<span>*</span>
            </label>
            <br />
            <input
              type="text"
              name="first_name"
              id="first_name"
              placeholder="John"
              required
              className="border rounded-default border-light w-full px-4 mb-4 mt-2 pb-1 pt-2 text-md text-body outline-none focus:border-danger"
            />
            <br />
            <label className="font-semibold text-base  text-secondary">
              Last name<span>*</span>
            </label>
            <br />
            <input
              type="text"
              name="last_name"
              id="last_name"
              placeholder="Doe"
              required
              className="border rounded-default border-light w-full px-4 mb-4 mt-2 text-md  text-body pb-1 pt-2 outline-none focus:border-danger"
            />
            <br />
            <label className="font-semibold text-base  text-secondary">
              Delivery address<span>*</span>
            </label>
            <br />
            <input
              type="text"
              name="delivery_address"
              id="delivery_address"
              placeholder="Rudolf-Diesel-Str. 22"
              required
              className="border rounded-default border-light w-full px-4 text-md text-body mb-4 mt-2 pb-1 pt-2 outline-none focus:border-danger"
            />
            <br />
            <label className="font-semibold text-base  text-secondary">
              Postcode<span>*</span>
            </label>
            <br />
            <input
              type="text"
              name="postcode"
              id="postcode"
              placeholder="23489 Kiel"
              required
              className="border rounded-default border-light w-full px-4 text-md text-body mb-4 mt-2 pb-1 pt-2 outline-none focus:border-danger"
            />
            <br />
            <div className="px-0 pt-8 mx-0 text-center">
              <button
                className="bg-secondary text-primary font-regular py-2.5 px-6 rounded-default text-xl shadow-xl active:bg-s-hover my-2 w-full"
                onClick={continueToPayment}
              >
                NEXT
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ShippingTab;
