import React, {Fragment} from 'react'

const Shipping = () => {
    return (
        <Fragment>
            <div>
                <div>
                    <p>1. Products</p>
                    <p>2. Shipping</p>
                    <p>3. Payment</p>
                </div>
                <div>
                    <form>
                        <label>eamil</label>
                        <input type="text" name="email" id="email" placeholder="Email"></input>
                        <label>first name</label>
                        <input type="text" name="firstname" id="firstname" placeholder="First Name"></input>
                        <label>last name</label>
                        <input type="lastname" name="lastname" id="lastname" placeholder="Sir Name"></input>
                        <label>address</label>
                        <input type="adress" name="adress" id="adress" placeholder="adress"></input>
                        <label>postcode</label>
                        <input type="postcode" name="postcode" id="postcode" placeholder="Postcode"></input>
                    </form>
                    <div>
                        <h4>Total:</h4>
                        <h4>Price</h4>
                    </div>
                    <button>Next</button>
                </div>    
            </div>
        </Fragment>
    )
}

export default Shipping
