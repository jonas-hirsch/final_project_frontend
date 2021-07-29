import React, { useState, useEffect} from 'react'
import  { useParams } from "react-router-dom";
import axios from 'axios';


const ProductsCategory = () => {

    const [productCategory, setProductCategory] = useState();

    const { id } = useParams(); 

    console.log(id)

        useEffect(() => {
            axios.get(`https://final-projekt-backend.herokuapp.com/products`)
            .then((res) => {
                const data = res.data;//.filter(element => element.category && element.category.includes(id));
                const result = res.data.filter(data => {
                    return data.category.some (element => element.id === id)
                })
                console.log(result)
                setProductCategory(result)
            })
            .catch((e) => {
                console.log(e)
            })
        },[id])

    const selectProductCategory = (e) => {
        setProductCategory(e.target.value)
        console.log(e.target.value)
    };

    // if (!productCategory) return <span>Loading...</span>

    return (

        <h1>hallo</h1>
        // <div className="root">
        //     {productCategory && productCategory.filter(product => product.category).map((product) => {
              
        //         return (
        //         //   <div key={product.id} id="container">
        //         //       <h2>{product.title}</h2>
        //         //       <img style={{width:'100%'}} src={product.media ? product.media[0].path : 'defaultProductPicture.jpeg'} alt='Productview'></img>
                      
        //         //       <p>{product.stock[0].price}€</p>
        //         //       <div style={{display:'flex', justifyContent: 'space-between',}}>
        //         //       <button to={"/catalog/"+product.id}>Add to Cart</button>
        //         //       <button to={"/catalog/"+product.id}>More Details</button> 
        //         //       </div>
        //         //   </div>
        //       )
        //     })}
        // </div>
    
    )
}
export default ProductsCategory
