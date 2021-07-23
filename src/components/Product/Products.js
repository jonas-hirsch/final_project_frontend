import React, {useState, useEffect} from 'react'
import axios from "axios"
import "./ProductStyle.css"
import { Link } from "react-router-dom";


const Product = () => {

    const [realProducts, setRealProducts] = useState();



  useEffect(() => {
    axios.get('https://final-projekt-backend.herokuapp.com/products/')
    .then((res) => {
      console.log(res.data)
      setRealProducts(res.data)
    })
    .catch((e)=> {
      console.log(e)
    })
  },[]);

    return (
        <div className="root">
            {realProducts && realProducts.filter(product => product.stock).map((product) => {
              // if (product.stock) {
                return (
                  <div key={product.id} className="container">

                      <h2>{product.title}</h2>
                      <h3>{product.description}</h3>
                      <h3>{product.stock[0].price}</h3>
                      <Link to={"/shop/"+product.id}><button>Show me</button> </Link>
                  </div>
              )
              // }
                
            })}
        </div>
    )
}

export default Product
