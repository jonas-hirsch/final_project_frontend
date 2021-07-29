import axios from 'axios';
import React, { useState, useEffect} from 'react'
import './singleproduct.css';
import  { useParams } from "react-router-dom";


const SingleProduct = () => {

    const [singleProduct, setSingleProduct ] = useState();
    const [stockId, setStockId ] = useState();

    const { id } = useParams();    

    console.log(id)

    useEffect(() => {
        axios.get(`https://final-projekt-backend.herokuapp.com/products/${id}`)
        .then((res) => {
            console.log(res.data)
            setSingleProduct(res.data)
            if (res.data && res.data.stock.length > 0)
                setStockId(res.data.stock[0].id)
        })
        .catch((e) => {
            console.log(e)
        })
    },[id])


    const selectItem = (e) => {
        setStockId(e.target.value)
        console.log(e.target.value)
    };


    const addToCart = () => {
        const newCartItem = { stockId: parseInt(stockId), amount: 1 };
        const addToCart_serialized =JSON.stringify([newCartItem]);
        console.log(addToCart_serialized);
        let cart = localStorage.getItem('Cart')
        if (!cart){
            localStorage.setItem('Cart', addToCart_serialized);
        } else {
            const cartObj = JSON.parse(cart)
            console.log(cartObj)
            const currentObj = cartObj.find(singleCartObj => singleCartObj.stockId === parseInt(stockId))
            if (currentObj) {
                cartObj.forEach(singleCartObj => {
                    if (singleCartObj.stockId === parseInt(stockId)){
                        singleCartObj.amount = singleCartObj.amount + 1;
                    }
                })
            } else {
                cartObj.push(newCartItem)
            }                
            const serializedCart = JSON.stringify(cartObj)
            localStorage.setItem('Cart', serializedCart);
        }
    }

    if (!singleProduct) return <span>Loading...</span>
    return (

        <div className='container'>
            
                    <div style={{width:'90%', textAlign: 'center', border:'1px solid black', margin:'50px auto'}} key={singleProduct.id} className="singleProduct_container">
                        <h2>{singleProduct.title}</h2>
                        <img style={{width:'50%', border:'1px solid black'}} src={singleProduct.media ? singleProduct.media[0].path : 'defaultProductPicture.jpeg'} alt='Productview'></img>
                        <div style={{display: 'flex', justifyContent:'center', width:'70%'}} >
                            {singleProduct.media && singleProduct.media.map(media => <img key={media.id} style={{width:'10%'}} src={media.path} alt='Productview'></img>)}
                        </div>
                        <div dangerouslySetInnerHTML={{__html: singleProduct.description}}></div>
                        <label>Please Choose:</label>
                        <select onChange={selectItem}>
                            {singleProduct.stock && singleProduct.stock.map(stock => <option key={stock.id} value={stock.id}>{stock.color} - {stock.size}</option>)}
                        </select>
                        <p>{singleProduct.stock[0].price}</p>
                        <button onClick={addToCart} style={{margin:'50px 50px', width:'60%'}}>Add to Cart</button>
                    </div>
        </div>      
        )};
    

export default SingleProduct
