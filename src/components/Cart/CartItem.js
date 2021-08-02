import React from "react";
import { Close24 } from "@carbon/icons-react";

const CartItem = ({ cartItem }) => {
  return (
    <div className="divide-y divide-gray-700 border border-light w-md max-w-md rounded-default">
      <div className="m-2 w-md max-w-md p-2 rounded-default">
        <div className="flex pt-2">
          <img
            src="https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bXVnfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60"
            alt="Example"
            className="w-1/2 rounded-default mr-4"
          />
          <div className="flex flex-col justify-between py-0.5 w-full">
            <div className="flex justify-between">
              <p className="text-left text-secondary text-2xl font-semibold">
                {cartItem.title}
              </p>
              <button>
                <Close24 className="active:text-danger " />
              </button>
            </div>
            <div>
              <p className="flex justify-start w-full">
                <span className="font-regular text-md">Quantity: &nbsp;</span>{" "}
                <span className="pl-6 ">
                  <button className="font-semibold text-2xl">- &nbsp;</button>
                  <button className="font-semibold text-2xl">
                    {cartItem.quantity} &nbsp;
                  </button>
                  <button className="font-semibold text-2xl">+ &nbsp;</button>
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
