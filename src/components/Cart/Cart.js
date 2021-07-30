import React, { useState } from "react";
import { Close24 } from "@carbon/icons-react";

const Cart = () => {
  const [openTab, setOpenTab] = useState(2);

  return (
    <>
      <div
        className="w-full tabs flex flex-wrap"
        style={{ justifyContent: "space-even", textAlign: "center" }}
      >
        <div className="w-full">
          <ul className="flex flex-wrap pt-3 pb-2 flex-row" role="tablist">
            <li className=" last:mr-0 flex-auto text-center ">
              <a
                className={`font-normal 
										text-md px-4 py-2 uppercase 
										tracking-wide ${
                      openTab === 1
                        ? "text-secondary  border-b-2 font-semibold border-secondary"
                        : " text-body"
                    }`}
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#Link1"
                role="tablist"
              >
                1. Cart
              </a>
            </li>
            <li className=" mr-2 last:mr-0 flex-auto text-center">
              <a
                className={`font-normal 
										text-md px-4 py-2 uppercase 
										tracking-wide ${
                      openTab === 2
                        ? "text-secondary  border-b-2 font-semibold border-secondary"
                        : " text-body"
                    }`}
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="/#"
                role="tablist"
              >
                2. Shipping
              </a>
            </li>
            <li className=" mr-2 last:mr-0 flex-auto text-center">
              <a
                className={`font-normal 
										text-md px-4 py-2 uppercase 
										tracking-wide ${
                      openTab === 3
                        ? "text-secondary  border-b-2 font-semibold border-secondary"
                        : " text-body"
                    }`}
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="/#"
                role="tablist"
              >
                3. Payment
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 text-left shadow-sm">
            <div className="px-4 py-5 flex-auto">
              <div className="tabs-content">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                <div className="text-md text-body">                  
                <div className="flex justify-center align-center p-2 text-3xl"><h3>Cart</h3></div>
                  
                </div>
                {/* Cart */}
            
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
                              Enjoy your Code
                            </p>
                            <button>
                              <Close24 className="active:text-danger " />
                            </button>
                          </div>
                          <div>
                            <p className="flex justify-start w-full">
                              <span className="font-regular text-md">
                                Quantity: &nbsp;
                              </span>{" "}
                              <span className="pl-6 ">
                                <button className="font-semibold text-2xl">
                                  - &nbsp;
                                </button>
                                <button className="font-semibold text-2xl">
                                  1 &nbsp;
                                </button>
                                <button className="font-semibold text-2xl">
                                  + &nbsp;
                                </button>
                              </span>
                            </p>
                          </div>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                  <div className="px-1 pb-2 pt-4 mx-auto text-center">
                    <button className='bg-secondary text-primary font-regular py-2.5 px-6 rounded-default text-xl shadow-xl active:bg-s-hover my-2 w-full'style={{margin:'50px 50px', width:'60%'}}>BUY</button>
                </div>
                </div>
                {/* Shipping */}

                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <div className="text-md text-body">
                  <div className="flex justify-center align-center p-2 text-3xl"><h3>Shipping</h3></div>
                    <div className="divide-y divide-gray-700 w-md max-w-md m-2 border border-light rounded-default">
                        <form action="#" method="post" className="pt-10 pb-6 text-left px-2">
                            <label className="font-semibold text-base text-secondary" >Email address<span>*</span></label>
                            <br />
                            <input type="text" name="email_address" id="email_address" placeholder="email@example.com" required
                                className="border rounded-default border-light  w-full px-4 mb-4 mt-2 pb-1 pt-2 outline-none focus:border-danger"
                            />
                            <br />
                            <label className="font-semibold text-base  text-secondary">First name<span>*</span></label>
                            <br />
                            <input type="text" name="first_name" id="first_name" placeholder="John" required
                                className="border rounded-default border-light w-full px-4 mb-4 mt-2 pb-1 pt-2 text-md text-body outline-none focus:border-danger"
                            />
                            <br />
                            <label className="font-semibold text-base  text-secondary">Last name<span>*</span></label>
                            <br />
                            <input type="text" name="last_name" id="last_name" placeholder="Doe" required
                                className="border rounded-default border-light w-full px-4 mb-4 mt-2 text-md  text-body pb-1 pt-2 outline-none focus:border-danger"
                            />
                            <br />
                            <label className="font-semibold text-base  text-secondary">Delivery  address<span>*</span></label>
                            <br />
                            <input type="text" name="delivery_address" id="delivery_address" placeholder="Rudolf-Diesel-Str. 22" required
                                className="border rounded-default border-light w-full px-4 text-md text-body mb-4 mt-2 pb-1 pt-2 outline-none focus:border-danger"
                            />
                            <br />
                            <label className="font-semibold text-base  text-secondary">Postcode<span>*</span></label>
                            <br />
                            <input type="text" name="postcode" id="postcode" placeholder="23489 Kiel" required
                                className="border rounded-default border-light w-full px-4 text-md text-body mb-4 mt-2 pb-1 pt-2 outline-none focus:border-danger"
                            />
                            <br />
                            <div className="px-0 pt-8 mx-0 text-center">
                            <button className='bg-secondary text-primary font-regular py-2.5 px-6 rounded-default text-xl shadow-xl active:bg-s-hover my-2 w-full'>Submit</button>
                        </div>
                        </form>
                    </div>
                  </div>
                </div>
                {/* Payment */}
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <div className="text-md text-body">
                  <div className="flex justify-center align-center p-2 text-3xl"><h3>Payment</h3></div>
                    <div className="divide-y divide-gray-700 w-md max-w-md m-2 border border-light rounded-default">
                        <form action="#" method="post"  className="pt-10 pb-4 text-left px-2">
                            <label className="font-semibold text-base text-secondary" >Credit Card<span>*</span></label>
                            <br />
                            <input type="tel" max-length="19" placeholder="XXXX XXXX XXXX XXX" required
                                className="border rounded-default border-light w-full px-4 mb-4 mt-2 pb-1 pt-2 outline-none text-md text-body focus:border-danger"
                            />
                            <br />
                            <label className="font-semibold text-base  text-secondary">ExpirationDate<span>*</span></label>
                            <br />
                            <input type="tel" name="expiration_date" id="expiration_date" placeholder="MM/YYYY" required
                                className="border rounded-default border-light w-full px-4 mb-4 mt-2 pb-1 pt-2 outline-none text-md text-body focus:border-danger"
                            />
                            <br />
                            <label className="font-semibold text-base  text-secondary">Card Verification Number<span>*</span></label>
                            <br />
                            <input type="tel" name="cvc" id="cvc" placeholder="CVC" required
                                className="border rounded-default border-light w-full px-4 mb-4 mt-2 pb-1 pt-2 outline-none text-md text-body focus:border-danger"
                            />
                            <br />
                            <div className="px-0 pb-2 pt-10 mx-0 text-center">
                            <button className='bg-secondary  text-primary font-regular py-2.5 px-6 rounded-default text-xl shadow-xl active:bg-s-hover my-2 w-full'>Submit</button>
                        </div>
                        </form>
                    </div>
                  </div>
                </div>
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
