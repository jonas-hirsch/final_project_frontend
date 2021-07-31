import client from "./client";

const { REACT_APP_APP_NAME } = process.env;

const getToken = () => localStorage.getItem(`${REACT_APP_APP_NAME}_auth_token`);

const setToken = (data) =>
  localStorage.setItem(`${REACT_APP_APP_NAME}_auth_token`, data);

const removeToken = () =>
  localStorage.removeItem(`${REACT_APP_APP_NAME}_auth_token`);

const logout = (history, forwordToLogin) => {
  removeToken();
  if (forwordToLogin) {
    history.push("/login");
  }
};

const login = async (credentials) => {
  try {
    const { headers } = await client.post("/auth/login", {
      ...credentials,
    });
    const token = headers["x-authorization-token"];
    const userId = headers["user-id"];
    console.log(token);
    if (token) {
      setToken(token);

      return userId;
    }
  } catch (e) {
    console.log(e.message);
  }
};

const register = async (data) => {
  try {
    const { headers } = await client.post("/auth/register", {
      ...data,
    });
    const token = headers["x-authorization-token"];
    const userId = headers["user-id"];
    console.log(token);
    if (token) {
      setToken(token);

      return userId;
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

export { login, setToken, getToken, logout, getUserContext, register };
