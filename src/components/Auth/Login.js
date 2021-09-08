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
      <div>
        <div>
          <h1 className="w-full py-40 primary font-semibold text-6xl justify-center flex">
            Welcome Back
          </h1>
        </div>
        {/* <div>
          {displayLogin && (
            <LoginForm
              setDisplayLogin={setDisplayLogin}
              setDisplayResetPassword={setDisplayResetPassword}
              getContext={getContext}
            />
          )}
        </div> */}
        <div>
          {displayLogin && (
            <LoginForm
              setDisplayLogin={setDisplayLogin}
              setDisplayResetPassword={setDisplayResetPassword}
              getContext={getContext}
            />
          )}
        </div>
        <div>
          {displayResetPassword && (
            <ResetPasswordForm
              setDisplayLogin={setDisplayLogin}
              setDisplayResetPassword={setDisplayResetPassword}
            />
          )}
        </div>
        <div>
          {displayResgisterForm ? (
            <RegisterForm
              setDisplayLogin={setDisplayLogin}
              setDisplayResgisterForm={setDisplayResgisterForm}
              getContext={getContext}
            />
          ) : (
            <div>
              <h2>I'm new in this shop</h2>
              <button onClick={displayRegisterForm}>Register</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Login;
