import React, { useContext } from "react";
import "./styles.css";
import { logout } from "../../utils/auth";
import AuthContext from "../../context/AuthContext";
import { useHistory, Redirect } from "react-router-dom";

const Logout = () => {
  const history = useHistory();
  const { setMe } = useContext(AuthContext);
  setMe(null);
  logout(history);

  return <></>;
};

export default Logout;
