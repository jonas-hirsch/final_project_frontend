import React, { useState, useCallback, useContext } from "react";
import "./styles.css";
import LoginForm from "./LoginForm";
import ResetPasswordForm from "./ResetPasswordForm";
import RegisterForm from "./RegisterForm";
import { getUserContext } from "../../utils/auth";
import AuthContext from "../../context/AuthContext";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [displayLogin, setDisplayLogin] = useState(true);
  const [displayResetPassword, setDisplayResetPassword] = useState(false);
  const [displayResgisterForm, setDisplayResgisterForm] = useState(false);

  const { setMe } = useContext(AuthContext);
  const history = useHistory();
  console.log(history);

  const displayRegisterForm = () => {
    setDisplayLogin(false);
    setDisplayResetPassword(false);
    setDisplayResgisterForm(true);
  };

  const getContext = useCallback(async () => {
    const data = getUserContext(setMe);
    if (data) {
      history.goBack();
    }
  }, [history, setMe]);

  return (
    <>
      <h1>Welcome back</h1>
      {displayLogin && (
        <LoginForm
          setDisplayLogin={setDisplayLogin}
          setDisplayResetPassword={setDisplayResetPassword}
          getContext={getContext}
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
          getContext={getContext}
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
