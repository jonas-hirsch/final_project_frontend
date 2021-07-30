import React, { useContext } from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import { logout } from "../../utils/auth";
import { useHistory } from "react-router-dom";

const NavBar = () => {
  const { me, setMe } = useContext(AuthContext);
  const history = useHistory();

  const onLogout = () => {
    setMe(null);
    logout(history, true);
  };
  return (
    <>
      <div className="navBar">
        <div>
          <span>
            <Link className="categorie_button" to="/">
              JBM
            </Link>
          </span>
        </div>
        <div className="navBar_categorie">
          <span>
            <Link className="categorie_button" to="/Home">
              HOME
            </Link>
          </span>
          <span>
            <Link className="categorie_button" to="/catalog">
              CATALOG
            </Link>
          </span>
          <span>
            <Link className="categorie_button" to="/contact">
              CONTACT
            </Link>
          </span>
        </div>
        <span>
          {me ? (
            <div className="categorie_button" onClick={onLogout}>
              Logout
            </div>
          ) : (
            <Link className="categorie_button" to="/login">
              Login
            </Link>
          )}
        </span>
        <div className="navBar-links">
          <span>
            <Link className="categorie_button" to="/myCart">
              Shopping Cart
            </Link>
          </span>
          <span>
            <Link className="categorie_button" to="/myProfil">
              Profile
            </Link>
          </span>
          <span>
            <Link className="categorie_button" to="/myMessage">
              Message
            </Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default NavBar;
