import React, { useEffect } from "react";
import { register, getToken } from "../../utils/auth";
import { transferLocalStorageToDatabase } from "../../utils/shoppingCart";

const RegisterForm = ({
  setDisplayLogin,
  setDisplayResgisterForm,
  getContext,
}) => {
  const performRegister = async (e) => {
    e.preventDefault();

    const userId = await register({
      email: e.target.email.value.trim().toLowerCase(),
      password: e.target.password.value.trim(),
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
    });
    if (userId) {
      alert("Successfully registered");
      getContext();
      transferLocalStorageToDatabase(userId);
    } else {
      alert("Failed to login");
    }
  };

  useEffect(() => {
    if (getToken()) {
      getContext();
    }
  }, [getContext]);

  const backToLogin = () => {
    setDisplayLogin(true);
    setDisplayResgisterForm(false);
  };
  return (
    <>
      <button onClick={backToLogin}>Back to login</button>
      <h1> I'm new in this shop</h1>
      <form onSubmit={performRegister}>
        <label htmlFor="firstName">First Name:</label>
        <br />
        <input type="text" name="firstName" placeholder="First Name" />
        <br />
        <label htmlFor="lastName">Last Name:</label>
        <br />
        <input type="text" name="lastName" placeholder="Last Name" />
        <br />
        <label htmlFor="email">E-Mail-Address:</label>
        <br />
        <input type="text" name="email" placeholder="E-Mail-Address" />
        <br />
        <label htmlFor="password">Password:</label>
        <br />
        <input type="password" name="password" placeholder="Password" />
        <br />
        <br />
        <input type="submit" value="Register" />
      </form>
    </>
  );
};

export default RegisterForm;
