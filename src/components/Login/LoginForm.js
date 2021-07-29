import React from "react";

const LoginForm = ({ setDisplayLogin, setDisplayResetPassword }) => {
  const performLogin = (e) => {
    e.preventDefault();
    console.log(e.target.email.value);
    console.log(e.target.password.value);
  };
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
