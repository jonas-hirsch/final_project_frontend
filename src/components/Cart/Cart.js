import React, { useState } from "react";
import TabNavigationItem from "./TabNavigationItem";
import "./Cart.css";
import PaymentTab from "./PaymentTab";
import ShippingTab from "./ShippingTab";
import CartTab from "./CartTab";

const tabItems = ["1. Cart", "2. Shipping", "3. Payment"];

const Cart = () => {
  const [openTab, setOpenTab] = useState(1);

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
                cartName={item}
                index={index}
                openTab={openTab}
                setOpenTab={setOpenTab}
              />
            ))}
          </ul>
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 text-left shadow-sm">
            <div className="px-4 py-5 flex-auto">
              <div className="tabs-content">
                <CartTab openTab={openTab} cartIndex={0} />
                <ShippingTab openTab={openTab} cartIndex={1} />
                <PaymentTab openTab={openTab} cartIndex={2} />
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
