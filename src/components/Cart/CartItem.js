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
    <div className="mx-auto flex justify-between w-full rounded-default md:w-3/5 lg:w-2/5 ">
      <div className="shadow-md mx-auto m-2 w-md max-w-full p-2 border border-light rounded-default">
        <div className="flex justify-between">
          <img
            src={cartItem.media && cartItem.media[0].path}
            alt="Example"
            className="w-1/6 max-w-1/6 rounded-default md:w-1/6"
          />
          <div className="flex flex-col justify-between py-0.5 px-1 w-3/5">
            <div className="flex justify-between">
              <p className="text-left text-secondary text-xl font-normal md:text-2xl">
                {cartItem.title}
              </p>
              <button onClick={deleteItem}>
                <Close24 className="active:text-danger text-secondary relativ" />
              </button>
            </div>
            <div>
              <div className="flex justify-between w-4/5 ">
                <div className="flex">
                  <div className="font-regular text-md">Quantity: &nbsp;</div>{" "}
                  <div className="pl-6 ">
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
                  </div>
                </div>
                <div>Price:</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
