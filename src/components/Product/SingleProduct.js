import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import "./singleproduct.css";
import { useParams } from "react-router-dom";
import { addProductToCart } from "../../utils/shoppingCart";
import AuthContext from "../../context/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SingleProduct = () => {
  const [singleProduct, setSingleProduct] = useState();
  const [stockId, setStockId] = useState();
  const [displayedMedia, setDisplayedMedia] = useState(0);
  const { id } = useParams();
  const { me } = useContext(AuthContext);

  console.log(id);

  useEffect(() => {
    axios
      .get(`https://final-projekt-backend.herokuapp.com/products/${id}`)
      .then((res) => {
        console.log(res.data);
        setSingleProduct(res.data);
        if (res.data && res.data.stock.length > 0)
          setStockId(res.data.stock[0].id);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [id]);

  const selectItem = (e) => {
    setStockId(e.target.value);
    console.log(e.target.value);
  };

  const addToCart = () => {
    toast("Product added to the your shopping cart.", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    addProductToCart(stockId, 1, me);
  };

  if (!singleProduct) return <span>Loading...</span>;
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
      <div className="w-lg max-w-md m-2 rounded-default overflow-hidden border border-light shadow-md justify-center md:flex md:mx-auto md:w-full md:max-w-full md:py-10">
        <div className="w-full md:w-1/3">
          <h2 className="pl-1 pb-3 pt-6 font-semibold text-3xl text-center text-secondary">
            {singleProduct.title}
          </h2>
          <img
            className="rounded-default"
            src={
              singleProduct.media
                ? singleProduct.media[displayedMedia].path
                : "defaultProductPicture.jpeg"
            }
            alt="Productview"
          ></img>
        </div>
        <div className="w-full md:pt-40 md:w-1/4">
          <div className="w-1/4 flex justify-start py-3 ml-1">
            {singleProduct.media &&
              singleProduct.media.map((media, index) => (
                <img
                  className="mr-2 rounded-default  hover:shadow cursor-pointer"
                  src={media.path}
                  key={media.id}
                  alt="Productview"
                  onClick={() => setDisplayedMedia(index)}
                />
              ))}
          </div>
          <div className="flex justify-between font-normal text-body py-2 pb-3 text-left pl-1 text-sm">
            <select className="" onChange={selectItem}>
              {singleProduct.stock &&
                singleProduct.stock.map((stock) => (
                  <option key={stock.id} value={stock.id}>
                    {stock.color} - {stock.size}
                  </option>
                ))}
            </select>

            <div className="font-normal text-body">
              Price:
              <span className="pl-12 pr-2 font-semibold text-secondary">
                {singleProduct &&
                  singleProduct.stock &&
                  singleProduct.stock[0].price}
              </span>
            </div>
          </div>
          <div className="py-2 pb-3">
            <p className="py-1.5 text-xl font-semibold text-secondary">
              Description:{" "}
            </p>
            <p
              dangerouslySetInnerHTML={{
                __html: singleProduct.description,
              }}
              className="break-normal text-body"
            ></p>
          </div>

          <div className="px-1 pb-2 pt-4 mx-auto text-center">
            <button
              className="bg-primary text-primary font-regular py-2.5 px-6 rounded-default text-xl shadow-xl active:bg-s-hover my-2 w-full"
              onClick={addToCart}
              style={{ margin: "50px 50px", width: "80%" }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;

  
