import axios from 'axios';
import React, { useState, useEffect} from 'react'
import './singleproduct.css';
import  { useParams } from "react-router-dom";



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


    return (

        <div className='container'>
            <h2>This is the Single Product Page</h2>
            <div key={singleProduct.id} className="singleProduct_container">
                        <h2>{singleProduct.title}</h2>
                        <h3>{singleProduct.description}</h3>
                        <h3>{singleProduct.stock[0].price}</h3>
                        <button>Add to Cart</button>
                    </div>
        </div>      
        )};
    

export default SingleProduct
