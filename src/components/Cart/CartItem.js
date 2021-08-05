import React, { useContext } from "react";
import { Close24 } from "@carbon/icons-react";
import {
  deleteShoppingCardItem,
  updateShoppingCartItem,
} from "../../utils/shoppingCart";
import AuthContext from "../../context/AuthContext";

const CartItem = ({ cartItem, deleteCartItem, cartItems, setCartItems }) => {
  const { me } = useContext(AuthContext);
  const deleteItem = async () => {
    const deleted = deleteShoppingCardItem(me, cartItem.id);
    if (deleted) {
      deleteCartItem(cartItem);
    }
  };

  const handleChangeQuantity = async (cartItem, deltaValue) => {
    const targetItem = { ...cartItem };
    targetItem.quantity += deltaValue;

    if (targetItem.quantity < 0) {
      return;
    }

    changeState(targetItem, setCartItems);

    const ok = await updateShoppingCartItem(targetItem, me);
    if (!ok) {
      targetItem.quantity -= deltaValue;
      changeState(targetItem, setCartItems);
    }
  };

  const changeState = (targetItem, setCartItems) => {
    console.log({ targetItem });
    setCartItems((prevCartItems) => {
      console.log({ prevCartItems });
      return [
        ...prevCartItems.filter((item) => item.id !== targetItem.id),
        targetItem,
      ];
    });
  };

  return (
    <div
      style={{ margin: " 0 auto" }}
      className="divide-y divide-gray-700 border border-light w-md max-w-md rounded-default"
    >
      <div className="m-2 w-md max-w-md p-2 rounded-default">
        <div className="flex pt-2">
          <img
            src={cartItem.media && cartItem.media[0].path}
            alt="Example"
            className="w-1/2 rounded-default mr-4"
          />
          <div className="flex flex-col justify-between py-0.5 w-full">
            <div className="flex justify-between">
              <p className="text-left text-secondary text-2xl font-semibold">
                {cartItem.title}
              </p>
              <button onClick={deleteItem}>
                <Close24 className="active:text-danger " />
              </button>
            </div>
            <div>
              <p className="flex justify-start w-full ">
                <span className="font-regular text-md">Quantity: &nbsp;</span>{" "}
                <span className="pl-6 ">
                  <button
                    className="font-semibold text-2xl"
                    onClick={() => handleChangeQuantity(cartItem, -1)}
                  >
                    - &nbsp;
                  </button>
                  <button className="font-semibold text-2xl">
                    {cartItem.quantity} &nbsp;
                  </button>
                  <button
                    className="font-semibold text-2xl"
                    onClick={() => handleChangeQuantity(cartItem, 1)}
                  >
                    + &nbsp;
                  </button>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
