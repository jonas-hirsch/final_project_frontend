import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Add24 } from "@carbon/icons-react";
import { useHistory, useParams } from "react-router-dom";
import CategoryNavTab from "./CategoryNavTab";
import client from "../../utils/client";


const ProductsCategory = () => {
  const history = useHistory();

  const [productCategory, setProductCategory] = useState();
  const [openTab, setOpenTab] = useState(3);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    client.get("/categories")
    .then(({ data }) => setCategories(data))
    .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get(
        productCategory
          ? `https://final-projekt-backend.herokuapp.com/products/category/${productCategory}`
          : `https://final-projekt-backend.herokuapp.com/products/`
      )
      .then((res) => {
        const data = res.data;
        console.log(data);
        setProducts(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [productCategory]);

  const selectCategory = (e, categoryIndex) => {
    setProductCategory(categoryIndex);
    console.log(categoryIndex);
    e.preventDefault();
    setOpenTab(categoryIndex);
  };

  return (
    <>
      <div className="tabs flex flex-wrap">
        <div className="w-full max-w-full">
          <ul className="flex flex-wrap pt-3 pb-2 flex-row" role="tablist">
            {categories.map((category, index, array) => (
              <CategoryNavTab
                categoryName={category.name}
                categoryId={category.id}
                isLastCategory={index !== array.length - 1}
                curentlySelectedCategory={openTab}
                selectCategory={selectCategory}
              />
            ))}
          </ul>
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 text-left shadow-sm">
            <div className="px-4 py-5"  >
              <div className="tabs-content" >
                <div id="link1">
                  <div className="text-md text-body">
                    <div className="flex text-center justify-around flex-wrap">
                      {products.map((product) => {
                        return (
                          <div
                              className="justify-center align-center  rounded-default shadow-lg my-5 mx-2 w-full md:w-1/3 md:overflow-hidden pb-3 hover:shadow-xl lg:w-1/4 overflow-hidden pb-3 hover:shadow-xl "
                              key={product.id}
                              id="container"
                            >
                              <img
                                className="w-full"
                                style={{
                                  width: "100%",
                                  marginBottom: "-50px",
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
                                <p className="text-left text-xl text-secondary font-normal tracking-wide">
                                  {product.title}
                                </p>
                                <span
                                  style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                  }}
                                >
                                  <p className="text-base text-left font-light text-body tracking-wide mb-6">
                                    {product &&
                                      product.stock &&
                                      product.stock[0].price}
                                    €
                                  </p>
                                  <Link to={"/catalog/" + product.id}>
                                    <button>
                                      <Add24 />
                                    </button>{" "}
                                  </Link>
                                </span>
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
