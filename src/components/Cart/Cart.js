import React, { useState, useEffect, useContext } from "react";
import TabNavigationItem from "./TabNavigationItem";
import "./Cart.css";
import PaymentTab from "./PaymentTab";
import ShippingTab from "./ShippingTab";
import CartTab from "./CartTab";
import { getShoppingCartItems } from "../../utils/shoppingCart";
import AuthContext from "../../context/AuthContext";
import client from "../../utils/client";

const tabItems = ["1. Cart", "2. Shipping", "3. Payment"];

const Cart = () => {
  const [openTab, setOpenTab] = useState(1);
  const [cartItems, setCartItems] = useState([]);
  const { me, setMe } = useContext(AuthContext);

  useEffect(async () => {
    const cart = await getShoppingCartItems(me);
    setCartItems(cart);
  }, [me]);

  const deleteCartItem = (cartItem) => {
    setCartItems((prev) => prev.filter((item) => item.id !== cartItem.id));
  };

  /*
  useEffect(() => {
    const fetchData = async () => {
      const cart = await getShoppingCartItems(me);
      setCartItems(cart);
      if (!me) {
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
      }
    };
    fetchData();
  }, [me, setMe]);
  */

  const onSetOpenTab = (tabIndex) => {
    if (tabIndex !== 3) {
      setOpenTab(tabIndex);
    }
  };

  /*
  if (!me) {
    return <></>;
  }
  */
  return (
    <>
      <div
        className="w-full tabs flex flex-wrap"
        style={{ justifyContent: "space-even", textAlign: "center" }}
      >
        <div className="w-full">
          <ul className="flex flex-wrap pt-3 pb-2 flex-row" role="tablist">
            {tabItems.map((item, index) => (
              <TabNavigationItem
                key={index}
                cartName={item}
                index={index}
                openTab={openTab}
                setOpenTab={onSetOpenTab}
              />
            ))}
          </ul>
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 text-left shadow-sm">
            <div className="px-4 py-5 flex-auto">
              <div className="tabs-content">
                <CartTab
                  openTab={openTab}
                  cartIndex={0}
                  cartItems={cartItems}
                  deleteCartItem={deleteCartItem}
                  setOpenTab={setOpenTab}
                  me={me}
                  setCartItems={setCartItems}
                />
                <ShippingTab
                  openTab={openTab}
                  cartIndex={1}
                  cartItems={cartItems}
                  setOpenTab={setOpenTab}
                  me={me}
                />
                <PaymentTab
                  openTab={openTab}
                  cartIndex={2}
                  setCartItems={setCartItems}
                  me={me}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

    // <div className='root' style={{ display:'flex', flexDirection:'column'}}>
    //     <div>
    //     <h2>Cart</h2>
    //         <div className='singleProductPurchased' style={{ width:'75vw'}}>
    //             <img src='#' alt='#'/>
    //         </div>
    //         <div>
    //             <h4>Product Title</h4>
    //             <button>delete</button>
    //         </div>
    //         <div>
    //             <p>Product amount</p>
    //             <p>Single Product Price</p>
    //         </div>

    //         <div style={{display:'flex', justifyContent:'space-between'}}>
    //             <div>
    //                 <h3>Total:</h3>
    //             </div>
    //             <div>
    //                 <p>Shipping Price</p>
    //                 <h3>Total Price</h3>
    //             </div>
    //         </div>
    //     </div>
    //     <button style={{width:'80%'}}>Kaufen</button>
    // </div>
  );
};

export default Cart;
