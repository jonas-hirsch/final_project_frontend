import React, { useState, useEffect } from "react";
import client from "../../utils/client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ShippingTab = ({ openTab, cartIndex, setOpenTab, me, cartItems }) => {
  const [personalData, setPersonalData] = useState({ ...me });
  // const [selectedAddress, setSelectedAddress] = useState(0);
  const [address, setAddress] = useState({});

  useEffect(async () => {
    if (me) {
      setPersonalData(me);
      try {
        const addressData = await client.get(`/address/person/${me.id}`);
        setAddress(addressData.data[0]);
        console.log({ add: addressData.data[0] });
      } catch (error) {
        console.error(error);
      }
    }
  }, [me]);
  const continueToPayment = async (e) => {
    e.preventDefault();
    // setMe(personalData);
    if (cartItems.length === 0) {
      console.log("Aborted: Shopping cart is empty.");
      toast.error("Payment not possible: Shopping cart is empty", {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    const validationError = verifyAddressData();
    if (validationError.error) {
      toast.error(validationError.errorMessage, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    try {
      address.primary = false;
      if (address.id) {
        // Create new address
        console.log("Update current address");
        const result = await client.put(`/address/${address.id}`, address);
        console.log(result);
      } else {
        // Update Address
        console.log("Create New addresss");
        const result = await client.post(`/address/`, address);
        console.log(result);
      }
    } catch (error) {}
    setOpenTab(3);
    window.scrollTo(0, 0);
  };

  const verifyAddressData = () => {
    let error = false;
    let errorMessage = "Invalid ";
    if (address.street.length < 3) {
      error = true;
      errorMessage += "street, ";
    }
    if (address.postcode.length < 3) {
      error = true;
      errorMessage += "postcode, ";
    }
    if (address.city.length < 3) {
      error = true;
      errorMessage += "city  ";
    }
    if (error) {
      errorMessage = errorMessage.slice(0, -2);
      return { error: true, errorMessage: errorMessage };
    }

    return false;
  };

  const changeAddress = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    setAddress((prev) => ({ ...prev, [field]: value }));
  };

  // const changePersonalData = (e) => {
  //   const field = e.target.name;
  //   const value = e.target.value;
  //   setPersonalData((prev) => ({ ...prev, [field]: value }));
  // };

  if (!me) {
    return <h1>Login to continue</h1>;
  }
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
      />
      <div
        className={openTab === cartIndex + 1 ? "block" : "hidden"}
        id="link2"
      >
        <div className="text-md text-body ">
          <div className="flex justify-center align-center p-2 text-3xl">
            <h3>Shipping</h3>
          </div>
          <div
            style={{ margin: " 0 auto" }}
            className="divide-y divide-gray-700 w-md max-w-md m-2 border border-light rounded-default"
          >
            <form
              onSubmit={continueToPayment}
              className="pt-10 pb-6 text-left px-2"
            >
              <label className="font-semibold text-base  text-secondary">
                First name<span>*</span>
              </label>
              <br />
              <input
                type="text"
                name="firstname"
                id="firstname"
                placeholder="John"
                required
                disabled
                value={personalData.firstname}
                // onChange={(e) => changePersonalData(e)}
                className="border rounded-default border-light w-full px-4 mb-4 mt-2 pb-1 pt-2 text-md text-body outline-none focus:border-danger"
              />
              <br />
              <label className="font-semibold text-base  text-secondary">
                Last name<span>*</span>
              </label>
              <br />
              <input
                type="text"
                name="lastname"
                id="lastname"
                placeholder="Doe"
                required
                disabled
                value={personalData.lastname}
                // onChange={(e) => changePersonalData(e)}
                className="border rounded-default border-light w-full px-4 mb-4 mt-2 text-md  text-body pb-1 pt-2 outline-none focus:border-danger"
              />
              <br />
              <label className="font-semibold text-base  text-secondary">
                Delivery address<span>*</span>
              </label>
              <br />
              <input
                type="text"
                name="street"
                id="street"
                placeholder="Rudolf-Diesel-Str. 22"
                required
                value={address && address.street}
                onChange={(e) => changeAddress(e)}
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
                placeholder="23489"
                required
                value={address && address.postcode}
                onChange={(e) => changeAddress(e)}
                className="border rounded-default border-light w-full px-4 text-md text-body mb-4 mt-2 pb-1 pt-2 outline-none focus:border-danger"
              />
              <br />
              <label className="font-semibold text-base  text-secondary">
                City<span>*</span>
              </label>
              <br />
              <input
                type="text"
                name="city"
                id="city"
                placeholder="Kiel"
                required
                value={address && address.city}
                onChange={(e) => changeAddress(e)}
                className="border rounded-default border-light w-full px-4 text-md text-body mb-4 mt-2 pb-1 pt-2 outline-none focus:border-danger"
              />
              <br />
              <div className="px-0 pt-8 mx-0 text-center">
                <button
                  className="bg-secondary text-primary font-regular py-2.5 px-6 rounded-default text-xl shadow-xl active:bg-s-hover my-2 w-full"
                  onClick={continueToPayment}
                >
                  BUY NOW
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default ShippingTab;
