import React, { useState } from "react";
import "./styles.css";
import LoginForm from "./LoginForm";
import ResetPasswordForm from "./ResetPasswordForm";
import RegisterForm from "./RegisterForm";

const Login = () => {
  const [displayLogin, setDisplayLogin] = useState(true);
  const [displayResetPassword, setDisplayResetPassword] = useState(false);
  const [displayResgisterForm, setDisplayResgisterForm] = useState(false);

  const displayRegisterForm = () => {
    setDisplayLogin(false);
    setDisplayResetPassword(false);
    setDisplayResgisterForm(true);
  };
  return (
    <>
      <h1>Welcome back</h1>
      {displayLogin && (
        <LoginForm
          setDisplayLogin={setDisplayLogin}
          setDisplayResetPassword={setDisplayResetPassword}
        />
      )}
      {displayResetPassword && (
        <ResetPasswordForm
          setDisplayLogin={setDisplayLogin}
          setDisplayResetPassword={setDisplayResetPassword}
        />
      )}
      {displayResgisterForm ? (
        <RegisterForm
          setDisplayLogin={setDisplayLogin}
          setDisplayResgisterForm={setDisplayResgisterForm}
        />
      ) : (
        <>
          <h2>I'm new in this shop</h2>
          <button onClick={displayRegisterForm}>Register</button>
        </>
      )}
    </>
  );
};

export default Login;
