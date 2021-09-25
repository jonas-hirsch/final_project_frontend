import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import { logout } from "../../utils/auth";
import * as All from "minja-ui";
import { useHistory } from "react-router-dom";
import {
  Menu24,
  Home24,
  Email24,
  ShoppingBag24,
  ShoppingCart24,
  Login24,
  Logout24
} from "@carbon/icons-react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { me, setMe } = useContext(AuthContext);
  const history = useHistory();

  const onLogout = () => {
    setMe(null);
    logout(history, true);
  };

  return (
    <>
      <div className="bg-transparent pt-2 pb-2 text-secondary ">
        <nav className="relative flex-wrap flex items-center justify-between ">
          <div className=" container px-3 mx-auto flex flex-wrap items-center justify-between">
            <div className="w-full text-left relative flex items-center justify-between lg:w-auto lg:static lg:block lg:justify-start">
             
              <Link
                to="/"
                className="text-2xl font-semibold inline-block mr-4 py-2"
              >
                JBM
              </Link>

              {/* Login & Logout */}
              <div className=" absolute right-14 lg:hidden">
                {me ? (
                  <div className="categorie_button" onClick={onLogout}>
                    <div className="flex uppercase hover:opacity-50">
                    <Logout24 className="mr-4" />Logout
                    </div>
                    
                  </div>
                ) : (
                  <Link className="categorie_button" to="/login">
                    <div className="flex uppercase hover:opacity-50"><Login24 className="mr-2" />login</div>
                  </Link>
                )}
              </div>
              <button
                className=" text-xl px-2 py-1 block lg:hidden outline-none focus:outline-none"
                type="button"
                onClick={() => setIsOpen(!isOpen)}
              >
                <Menu24 />
              </button>

            </div>


            <div
              className={`lg:flex ${isOpen ? "flex items-center" : "hidden flex-col"
                }`}
            >
              <ul className="flex flex-row flex-wrap list-none items-start py-2 -mb-5 justify-start md:-mb-2 md:pt-0 lg:flex-row lg:-mb-0 lg:pt-2 lg:ml-auto">
             
                <li className="nav-item">
                  <Link
                    to="/"
                    className="px-0 py-2 flex items-center text-md uppercase  hover:opacity-50"
                  >
                    <span>
                      <Home24 className="mr-2" />
                    </span>
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/catalog"
                    className="px-4 py-2 flex items-center text-md uppercase  hover:opacity-50
										"
                  >
                    <span>
                      <ShoppingBag24 className="mr-2" />
                    </span>
                    Shop
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/contact"
                    className="px-2 py-2 flex items-center text-md uppercase   hover:opacity-50"
                  >
                    <span>
                      <Email24 className="mr-2" />
                    </span>
                    Contact
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/myCart"
                    className="px-2 py-2 flex items-center text-md uppercase   hover:opacity-50"
                  >
                    <span>
                      <ShoppingCart24 className="mr-2" />
                    </span>
                    Cart
                  </Link>
                </li>
                <li className="nav_item invisible lg:visible">
                  <div className="relative px-2 py-2" >
                    {me ? (
                      <div className="categorie_button" onClick={onLogout}>
                        <div className="hover:opacity-50 flex uppercase">
                          <Logout24 className="mr-2 " />Logout
                        </div>

                      </div>
                    ) : (
                      <Link className="categorie_button" to="/login">
                        <div className="flex uppercase hover:opacity-50"><Login24 className="mr-4" />Login</div>
                      </Link>
                    )}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
