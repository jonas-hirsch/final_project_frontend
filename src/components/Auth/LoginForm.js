import React, { useEffect } from "react";
import { login, getToken } from "../../utils/auth";

const LoginForm = ({
  setDisplayLogin,
  setDisplayResetPassword,
  getContext,
}) => {
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
