import axios from 'axios';
import React, { useState, useEffect} from 'react'
import './singleproduct.css';
import  { useParams } from "react-router-dom";
import { Link } from "react-router-dom";



const SingleProduct = (realProducts) => {

    const [singleProduct, setSingleProduct ] = useState();

    const { id } = useParams();    

    console.log(id)

    useEffect(() => {
        axios.get(`https://final-projekt-backend.herokuapp.com/products/${id}`)
        .then((res) => {
            console.log(res.data)
            setSingleProduct(res.data)
        })
        .catch((e) => {
            console.log(e)
        })
    },[id])

    if (!singleProduct) return <span>Loading...</span>

    


    const addToCart_serialized =JSON.stringify([singleProduct]);
    console.log(addToCart_serialized);

    // const addToCart = () => {
    //     let cart = localStorage.getItem('Cart')
    //     if (!cart){
    //         localStorage.setItem('Cart', addToCart_serialized);
    //     } else {
    //         localStorage.setItem('Cart', [...cart, addToCart_serialized])
    //     }
    //     localStorage.setItem('Cart', addToCart_serialized);
    //     console.log(singleProduct);
    // }





    return (

        <div className='container'>
            <h2 >This is the Single Product Page</h2>
                    <div key={singleProduct.id} className="singleProduct_container">
                        <h2>{singleProduct.title}</h2>
                        <img style={{width:'100%'}} src={singleProduct.media ? singleProduct.media[0].path : 'defaultProductPicture.jpeg'} alt='Productview'></img>
                        <div style={{display: 'flex', justifyContent:'space-between', width:'70%'}} >
                            <img style={{width:'23%'}} src={singleProduct.media ? singleProduct.media[1].path : 'defaultProductPicture.jpeg'} alt='Productview'></img>
                            <img style={{width:'23%'}} src={singleProduct.media ? singleProduct.media[1].path : 'defaultProductPicture.jpeg'} alt='Productview'></img>
                            <img style={{width:'23%'}} src={singleProduct.media ? singleProduct.media[1].path : 'defaultProductPicture.jpeg'} alt='Productview'></img>
                        </div>


                        <p>{singleProduct.description}</p>
                        <p>{singleProduct.stock[0].price}</p>
                        <Link><button>Add to Cart</button></Link>
                    </div>
        </div>      
        )};
    

export default SingleProduct
