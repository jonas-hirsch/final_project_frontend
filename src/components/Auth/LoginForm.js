import React, { useEffect } from "react";
import { login, getToken } from "../../utils/auth";
import { transferLocalStorageToDatabase } from "../../utils/shoppingCart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginForm = ({
  setDisplayLogin,
  setDisplayResetPassword,
  getContext,
}) => {
  const performLogin = async (e) => {
    e.preventDefault();

    const userId = await login({
      email: e.target.email.value,
      password: e.target.password.value,
    });
    if (userId) {
      getContext();
      transferLocalStorageToDatabase(userId);
      console.log("Successfully logged in");
    } else {
      toast.error("Wrong credentials: Failed to login", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  useEffect(() => {
    if (getToken()) {
      getContext();
    }
  }, [getContext]);

  const displayResetPassword = () => {
    setDisplayLogin(false);
    setDisplayResetPassword(true);
  };
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
      <form onSubmit={performLogin}>
        <label htmlFor="email">E-Mail-Address:</label>
        <br />
        <input type="text" name="email" placeholder="E-Mail-Address" />
        <br />
        <label htmlFor="password">Password:</label>
        <br />
        <input type="password" name="password" placeholder="Password" />
        <br />
        <br />
        <input type="submit" value="Login" />
      </form>
      <p onClick={displayResetPassword}>Forgot password?</p>
    </>
  );
};

export default LoginForm;
