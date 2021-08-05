import axios from "axios";
import { getToken } from "./auth";

const { REACT_APP_PROD_API_URL, NODE_ENV } = process.env;
const baseURL =
  NODE_ENV === "production" ? REACT_APP_PROD_API_URL : REACT_APP_PROD_API_URL;

// const baseURL = process.env.BACKEND_URL;
const client = axios.create({ baseURL });

client.interceptors.request.use(
  (req) => {
    const token = getToken();
    if (token) req.headers.Authorization = `Bearer ${token}`;
    return req;
  },
  (error) => {
    return Promise.reject(error);
  }
);

client.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401 || error.response.status === 403) {
      alert("Authentication failed, please try again");
      throw new Error(`${error.config.url}: ${error.request.response}`);
    }
    throw error;
  }
);

export default client;
