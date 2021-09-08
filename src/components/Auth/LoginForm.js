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
      await transferLocalStorageToDatabase(userId);
      getContext();
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
      {/* Login Form */}
      <div className="h-screen w-screen">
        <div className="flex items-center justify-around flex-wrap">
        <div className="w-1/2 h-full bg-s-hover " >
          <img src="https://images.unsplash.com/photo-1533745848184-3db07256e163?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2VsY29tZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt='Welcome to the Login Page' className="rounded-default relative w-full"/>
        </div>
        <div className="w-full md:w-1/2 ">
        <p className="text-5xl text-center pr-20 pb-10 font-semibold">User Login</p>
          <form onSubmit={performLogin} className='flex flex-col items-baseline justify-center space-y-2 mx-20'>
            <label htmlFor="email">Email: </label>
            <input className='py-2 px-4 placeholder-gray-30 border border-gray-30 focus:ring focus:outline-none
	          focus:placeholder-gray-50 rounded-default w-full' type='text' name='email' placeholder='example@gmail.com' />
            <label className='pt-6' htmlFor="password">Password: </label>
            <input className='py-2 px-4 placeholder-gray-30 border border-gray-30 focus:ring focus:outline-none
	          focus:placeholder-gray-50 rounded-default w-full' type='password' name='password' placeholder='password' />
            <input className='bg-primary text-white uppercase  focus:shadow-lg py-2 px-8 min-w-min max-w-full mx-auto rounded-default shadow-md flex flex-wrap text-center border cursor-pointer focus:bg-p-hover' type='submit' value='Login' />
          </form>
          <p className='font-semibold mt-3 cursor-pointer text-left pl-20' onClick={displayResetPassword}>Forgot password?</p>
        </div>
      </div>
      </div>
     
      {/* <form onSubmit={performLogin}>
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
      </form> */}
      
    </>
  );
};

export default LoginForm;
