import axios from "axios";
import React, { useState, useCallback, useEffect } from "react";
import { useHistory, Redirect } from "react-router-dom";

import { login, getToken } from "../../utils/auth";
import client from "../../utils/client";

const LoginForm = ({ setDisplayLogin, setDisplayResetPassword }) => {
  const history = useHistory();
  const [me, setMe] = useState();

  const performLogin = async (e) => {
    e.preventDefault();

    const isAuthenticated = await login({
      email: e.target.email.value,
      password: e.target.password.value,
    });
    if (isAuthenticated) {
      alert("Successfully loged in");
      getContext();
    } else {
      alert("Failed to login");
    }
  };

  const getContext = useCallback(async () => {
    try {
      const meResult = await client.get("/auth/me");
      const { data } = meResult;
      if (data) {
        console.log(data);
        setMe(data);
        console.log("Push to root");
        history.push("/");
      }
    } catch (e) {
      console.log("User not logged in:", e.message);
    }
  }, [history]);

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
