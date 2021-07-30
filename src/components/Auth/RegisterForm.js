import React from "react";

const RegisterForm = ({ setDisplayLogin, setDisplayResgisterForm }) => {
  const performLogin = (e) => {
    e.preventDefault();
    console.log(e.target.firstName.value);
    console.log(e.target.lastName.value);
    console.log(e.target.email.value);
    console.log(e.target.password.value);
  };
  const backToLogin = () => {
    setDisplayLogin(true);
    setDisplayResgisterForm(false);
  };
  return (
    <>
      <button onClick={backToLogin}>Back to login</button>
      <h1> I'm new in this shop</h1>
      <form onSubmit={performLogin}>
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
