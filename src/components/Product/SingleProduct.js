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
        <div className='flex justify-center items-center'>
            <div className='w-md max-w-md m-2 px-1.5 rounded-default overflow-hidden border border-light shadow-md'>
            
            <div>
                <p className="text-left pl-1 pb-3 pt-6   font-semibold text-3xl text-secondary">{singleProduct.title}</p>
                <img className="rounded-default" src={singleProduct.media ? singleProduct.media[0].path : 'defaultProductPicture.jpeg'} alt='Productview'></img>
                <div className="w-1/4 flex justify-start py-3 ml-1" >
                    {singleProduct.media && singleProduct.media.map(media => <img className='mr-2 rounded-default  hover:shadow cursor-pointer'src={media.path} key={media.id} alt='Productview'/>)}
                </div>
                <div className="py-2 pb-3 text-left pl-1 text-sm">
                    <p className="font-normal text-body">Quantity:
                    <span className="pl-6 ">
                    <button className='font-semibold text-secondary'>- &nbsp;</button>
                    <button className='font-semibold text-secondary'>1 &nbsp;</button>
                    <button className='font-semibold text-secondary'>+ &nbsp;</button> 
                    </span>
                    </p>
                    <p className="font-normal text-body">Size: 
                    <span className='pl-14'>
                    <button className="pr-2 font-semibold text-secondary">S&nbsp;</button>
                    <button className="pr-2 font-semibold text-secondary">M&nbsp;</button>
                    <button className="pr-2 font-semibold text-secondary">L&nbsp;</button>
                    <button className="pr-2 font-semibold text-secondary">XL&nbsp;</button>
                    </span>
                    </p>
                    <p className="font-normal text-body">Price:
                    <span className="pl-12 pr-2 font-semibold text-secondary">{singleProduct.stock[0].price}</span></p>
                </div>
                <div className="text-left my-2.5 pb-2">
                    <p className="py-1.5 text-xl font-semibold text-secondary">Description: </p>
                    <p dangerouslySetInnerHTML={{__html: singleProduct.description}} className='break-normal text-body'></p>
                </div>
                <select onChange={selectItem}>
                    {singleProduct.stock && singleProduct.stock.map(stock => <option key={stock.id} value={stock.id}>{stock.color} - {stock.size}</option>)}
                </select>
                <div className="px-1 pb-2 pt-4 mx-auto text-center">
                    <button className='bg-secondary text-primary font-regular py-2.5 px-6 rounded-default text-xl shadow-xl active:bg-s-hover my-2 w-full' onClick={addToCart} style={{margin:'50px 50px', width:'60%'}}>Add to Cart</button>
                </div>
            </div>
    </div>
        </div>
)};
    

export default SingleProduct
