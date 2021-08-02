import React from "react";
import CartItem from "./CartItem";

const CartTab = ({
  openTab,
  cartIndex,
  cartItems,
  deleteCartItem,
  setOpenTab,
  setCartItems,
}) => {
  const openShippingTab = () => {
    setOpenTab(2);
    window.scrollTo(0, 0);
  };
  return (
    <div className={openTab === cartIndex + 1 ? "block" : "hidden"} id="link1">
      <div className="text-md text-body">
        <div className="flex justify-center align-center p-2 text-3xl">
          <h3>Cart</h3>
        </div>
      </div>
      {cartItems &&
        cartItems
          .sort((a, b) => a.id - b.id)
          .map((item) => (
            <CartItem
              key={item.id}
              cartItem={item}
              deleteCartItem={deleteCartItem}
              cartItems={cartItems}
              setCartItems={setCartItems}
            />
          ))}
      <div className="px-1 pb-2 pt-4 mx-auto text-center">
        <button
          className="bg-secondary text-primary font-regular py-2.5 px-6 rounded-default text-xl shadow-xl active:bg-s-hover my-2 w-full"
          style={{ margin: "50px 50px", width: "60%" }}
          onClick={openShippingTab}
        >
          NEXT
        </button>
      </div>
    </div>
  );
};
export default CartTab;
