import React from "react";

const ResetPasswordForm = ({ setDisplayLogin, setDisplayResetPassword }) => {
  const performResetPassword = (e) => {
    e.preventDefault();
    console.log(e.target.email.value);
  };
  const displayLoginPage = () => {
    setDisplayLogin(true);
    setDisplayResetPassword(false);
  };
  return (
    <>
      <h2>Reset Password</h2>
      <p>
        If you've forgot your password to your account, you can reset it here.
      </p>
      <p>
        Please enter your E-Mail-Address, so that we can send you a mail with a
        link to reset the password.
      </p>
      <form onSubmit={performResetPassword}>
        <label htmlFor="email">E-Mail-Address</label>
        <input type="text" name="email" placeholder="E-Mail-Address" />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <p onClick={displayLoginPage}>Back to login</p>
    </>
  );
};

export default ResetPasswordForm;
