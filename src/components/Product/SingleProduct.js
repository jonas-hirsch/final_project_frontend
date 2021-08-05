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
      autoClose: 2000,
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
      <div className="flex justify-center items-center">
        <div className="w-md max-w-md m-2 px-1.5 rounded-default overflow-hidden border border-light shadow-md">
          <div>
            <p className="pl-1 pb-3 pt-6 font-semibold text-3xl text-secondary">
              {singleProduct.title}
            </p>
            <img
              className="rounded-default"
              src={
                singleProduct.media
                  ? singleProduct.media[displayedMedia].path
                  : "defaultProductPicture.jpeg"
              }
              alt="Productview"
            ></img>
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
              {/* <p className="font-normal text-body">
                Quantity:
                <span className="pl-6 ">
                  <button className="font-semibold text-secondary">
                    - &nbsp;
                  </button>
                  <button className="font-semibold text-secondary">
                    1 &nbsp;
                  </button>
                  <button className="font-semibold text-secondary">
                    + &nbsp;
                  </button>
                </span>
              </p>
              <p className="font-normal text-body">
                Size:
                <span className="pl-14">
                  <button className="pr-2 font-semibold text-secondary">
                    S&nbsp;
                  </button>
                  <button className="pr-2 font-semibold text-secondary">
                    M&nbsp;
                  </button>
                  <button className="pr-2 font-semibold text-secondary">
                    L&nbsp;
                  </button>
                  <button className="pr-2 font-semibold text-secondary">
                    XL&nbsp;
                  </button>
                </span>
              </p> */}
              <select class="" onChange={selectItem}>
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
                dangerouslySetInnerHTML={{ __html: singleProduct.description }}
                className="break-normal text-body"
              ></p>
            </div>

            <div className="px-1 pb-2 pt-4 mx-auto text-center">
              <button
                className="bg-secondary text-primary font-regular py-2.5 px-6 rounded-default text-xl shadow-xl active:bg-s-hover my-2 w-full"
                onClick={addToCart}
                style={{ margin: "50px 50px", width: "60%" }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
