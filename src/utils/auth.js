import client from "./client";
import Cookies from "js-cookie";
import { useContext } from "react";

const { REACT_APP_APP_NAME } = process.env;

const getToken = () => Cookies.get(`${REACT_APP_APP_NAME}-auth-token`);

const setToken = (data) =>
  Cookies.set(`${REACT_APP_APP_NAME}-auth-token`, data);

const removeToken = () => Cookies.remove(`${REACT_APP_APP_NAME}-auth-token`);

const logout = (history, forwordToLogin) => {
  removeToken();
  if (forwordToLogin) {
    history.push("/login");
  }
};

const login = async (credentials) => {
  console.log(credentials);
  try {
    const { headers } = await client.post("/auth/login", {
      ...credentials,
    });
    const token = headers["x-authorization-token"];
    console.log(token);
    if (token) {
      setToken(token);

      return true;
    }
  } catch (e) {
    console.log(e.message);
  }
};

const getUserContext = async (setMe) => {
  try {
    const meResult = await client.get("/auth/me");
    const { data } = meResult;
    if (data) {
      setMe(data);
      console.log(data);

      return data;
    }
  } catch (e) {
    console.log("User not logged in:", e.message);
  }
};

export { login, setToken, getToken, logout, getUserContext };
