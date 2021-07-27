import React from 'react'




const Cart = () => {
    return (
        <div className='root' style={{ display:'flex', flexDirection:'column'}}>
            <div>
            <h2>You Cart</h2>
                <div className='singleProductPurchased' style={{ width:'75vw'}}>
                    <img src='#' alt='#'/>
                </div>
                <div>
                    <h4>Product Title</h4>
                    <button>delete</button>
                </div>
                <div>
                    <p>Product amount</p>
                    <p>Single Product Price</p>
                </div>

                <div style={{display:'flex', justifyContent:'space-between'}}>
                    <div>
                        <h3>Total:</h3>
                    </div>
                    <div>
                        <p>Shipping Price</p>
                        <h3>Total Price</h3>
                    </div>
                </div>
            </div>
            <button style={{width:'80%'}}>Kaufen</button>
        </div>
    )
}

export default Cart

