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
                        <input></input>
                        <label>first name</label>
                        <input></input>
                        <label>last name</label>
                        <input></input>
                        <label>address</label>
                        <input></input>
                        <label>postcode</label>
                        <input></input>
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
