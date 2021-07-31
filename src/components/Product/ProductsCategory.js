import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Add24 } from "@carbon/icons-react";
import { useHistory, useParams } from "react-router-dom";

const ProductsCategory = () => {
  const history = useHistory();

  const [productCategory, setProductCategory] = useState();
  const [openTab, setOpenTab] = useState(3);
  const [products, setProducts] = useState([])


  const { id } = useParams();
  const { product } = useParams();

  useEffect(() => {
    axios
      .get(
        `https://final-projekt-backend.herokuapp.com/products/category/${productCategory}`
      )
      .then((res) => {
        const data = res.data;
        console.log(data)
        setProducts(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [productCategory]);

  const selectProductCategory = (e) => {
    setProductCategory(e.target.value);
    console.log(e.target.value);
  };

 

  const clickTab = (e, categoryIndex) => {
    setProductCategory(categoryIndex)
    console.log(categoryIndex)
    e.preventDefault();
    setOpenTab(categoryIndex);
  };
  // if (!productCategory) return <span>Loading...</span>

  return (
    <>
      <div className="tabs flex flex-wrap">
        <div className="w-full max-w-md">
          <ul className="flex flex-wrap pt-3 pb-2 flex-row" role="tablist">
            <li className=" last:mr-0 flex-0 text-center last:border-r-0">
              
              <a to='category/1'
                className={`font-normal 
                                    text-md px-4 border-r-2 py-1 
                                    border-light 
                                    tracking-wide ${
                                      openTab === 1
                                        ? "text-secondary font-semibold   border-secondary"
                                        : " text-body"
                                    }`}
                onClick={(e) => clickTab(e, 1)}
                data-toggle="tab"
                href="/category/1"
                role="tablist"
              >
                Hoodie
              </a>
              
            </li>
            <li className=" last:mr-0 flex-0 text-center last:border-r-0">
              <a to='/category/2'
                className={`font-normal 
                                    text-md px-4 py-1 border-r-2 
                                    border-light  
                                    tracking-wide ${
                                      openTab === 2
                                        ? "text-secondary font-semibold  border-secondary"
                                        : " text-body"
                                    }`}
                onClick={(e) => clickTab(e, 2)}
                data-toggle="tab"
                href="/category/2"
                role="tablist"
              >
                T-Shirt
              </a>
            </li>
            <li className=" last:mr-0 flex-0 text-center last:border-r-0">
              
              <a to='/category/4'
                className={`font-normal 
                                    text-md px-4 py-1 
                                     
                                    tracking-wide ${
                                      openTab === 3
                                        ? "text-secondary font-semibold  border-secondary"
                                        : " text-body"
                                    }`}
                onClick={(e) => clickTab(e, 4)}
                data-toggle="tab"
                href="/category/4"
                role="tablist"
              >
                Gear
              </a>
              
            </li>
          </ul>
          
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 text-left shadow-sm">
            <div className="px-4 py-5 flex-auto">
              <div className="tabs-content">
                {/* Hoodie */}
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <div className="text-md text-body">
                    <div className="flex flex-col justify-center items-center">
                      {products
                        //   .filter((category) => category.id)
                          .map((product) => {
                            return (
                              <div>
                                <div
                                  className="rounded-default shadow-lg my-2 mx-2 w-1/2 lg:w-1/3 overflow-hidden pb-3 hover:shadow-xl"
                                  key={product.id}
                                  id="container"
                                >
                                  <img
                                    className="w-full"
                                    style={{
                                      width: "100%",
                                      marginBottom: "-60px",
                                      marginTop: "-40px",
                                    }}
                                    src={
                                      product.media
                                        ? product.media[0].path
                                        : "defaultProductPicture.jpeg"
                                    }
                                    alt="Productview"
                                  ></img>
                                  <div className="px-4 pt-3 text-secondary">
                                    <p className="text-left text-xl text-secondary font-normal tracking-wide py-1">
                                      {product.title}
                                    </p>
                                    <div
                                      style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                      }}
                                    >
                                      <p className="text-base text-left font-light text-body tracking-wide mb-6">
                                        {product && product.stock && product.stock[0].price}€
                                      </p>
                                      <Link to={"/catalog/" + product.id}>
                                        <button>
                                          <Add24 />
                                        </button>{" "}
                                      </Link>
                                    </div>
                                    <button
                                      onClick={() =>
                                        history.push("/catalog/" + product.id)
                                      }
                                      className="text-primary font-semibold bg-secondary py-2 px-5 rounded-default border border-none text-base shadow-md active:bg-s-hover active:border-secondary focus:outline-none ease-linear transition-all duration-150 tracking-wide"
                                    >
                                      More Details
                                    </button>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                    </div>
                  </div>
                </div>
                {/* T-Shirt */}
                <div className={openTab === 2 ? "block" : "hidden"} id="Link3">
                  <div className="text-md text-body">
                    <div className="flex flex-col justify-center items-center">
                      {products
                        //   .filter((product) => product.stock)
                          .map((product) => {
                            return (
                              <div>
                                <div
                                  className="rounded-default shadow-lg my-2 mx-2 w-1/2 lg:w-1/3 overflow-hidden pb-3 hover:shadow-xl"
                                  key={product.id}
                                  id="container"
                                >
                                  <img
                                    className="w-full"
                                    style={{
                                      width: "100%",
                                      marginBottom: "-60px",
                                      marginTop: "-40px",
                                    }}
                                    src={
                                      product.media
                                        ? product.media[0].path
                                        : "defaultProductPicture.jpeg"
                                    }
                                    alt="Productview"
                                  ></img>
                                  <div className="px-4 pt-3 text-secondary">
                                    <p className="text-left text-xl text-secondary font-normal tracking-wide py-1">
                                      {product.title}
                                    </p>
                                    <div
                                      style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                      }}
                                    >
                                      <p className="text-base text-left font-light text-body tracking-wide mb-6">
                                        {product && product.stock && product.stock[0].price}€
                                      </p>
                                      <Link to={"/catalog/" + product.id}>
                                        <button>
                                          <Add24 />
                                        </button>{" "}
                                      </Link>
                                    </div>
                                    <button
                                      onClick={() =>
                                        history.push("/catalog/" + product.id)
                                      }
                                      className="text-primary font-semibold bg-secondary py-2 px-5 rounded-default border border-none text-base shadow-md active:bg-s-hover active:border-secondary focus:outline-none ease-linear transition-all duration-150 tracking-wide"
                                    >
                                      More Details
                                    </button>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                    </div>
                  </div>
                </div>
                {/* Gear */}
                <div className={openTab === 3 ? "block" : "hidden"} id="Link3">
                  <div className="text-md text-body">
                    <div className="flex flex-col justify-center items-center">
                      {products
                        //   .filter((product) => product.stock)
                          .map((product) => {
                            return (
                              <div>
                                <div
                                  className="rounded-default shadow-lg my-2 mx-2 w-1/2 lg:w-1/3 overflow-hidden pb-3 hover:shadow-xl"
                                  key={product.id}
                                  id="container"
                                >
                                  <img
                                    className="w-full"
                                    style={{
                                      width: "100%",
                                      marginBottom: "-60px",
                                      marginTop: "-40px",
                                    }}
                                    src={
                                      product.media
                                        ? product.media[0].path
                                        : "defaultProductPicture.jpeg"
                                    }
                                    alt="Productview"
                                  ></img>
                                  <div className="px-4 pt-3 text-secondary">
                                    <p className="text-left text-xl text-secondary font-normal tracking-wide py-1">
                                      {product.title}
                                    </p>
                                    <div
                                      style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                      }}
                                    >
                                      <p className="text-base text-left font-light text-body tracking-wide mb-6">
                                        {product && product.stock && product.stock[0].price}€
                                      </p>
                                      <Link to={"/catalog/" + product.id}>
                                        <button>
                                          <Add24 />
                                        </button>{" "}
                                      </Link>
                                    </div>
                                    <button
                                      onClick={() =>
                                        history.push("/catalog/" + product.id)
                                      }
                                      className="text-primary font-semibold bg-secondary py-2 px-5 rounded-default border border-none text-base shadow-md active:bg-s-hover active:border-secondary focus:outline-none ease-linear transition-all duration-150 tracking-wide"
                                    >
                                      More Details
                                    </button>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductsCategory;
