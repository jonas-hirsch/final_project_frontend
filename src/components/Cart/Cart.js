import React from 'react'

const Cart = (product) => {
    return (
        <div className='root' style={{height:'50vh'}}>
            <div>
                <h1>Your Cart</h1>
            </div>
            <div>
                <img style={{width:'15%'}} src={product.media ? product.media[0].path : 'defaultProductPicture.jpeg'} alt='Productview'></img>
            </div>
            <div>
           
            </div>

6
        </div>
    )
}

export default Cart
