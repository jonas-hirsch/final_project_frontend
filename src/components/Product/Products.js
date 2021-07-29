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

  if (!realProducts) return <span>Loading...</span>

    return (
        <div className="root">
            {realProducts && realProducts.filter(product => product.stock).map((product) => {
              
                return (
                  <div key={product.id} id="container">
                      <h2>{product.title}</h2>
                      <img style={{width:'100%'}} src={product.media ? product.media[0].path : 'defaultProductPicture.jpeg'} alt='Productview'></img>
                      
                      <p>{product.stock[0].price}€</p>
                      <div style={{display:'flex', justifyContent: 'space-between',}}>
                      <Link to={"/catalog/"+product.id}><button>More Details</button> </Link>
                      <Link to={"/catalog/"+product.id}><button>Add to Cart</button> </Link>
                      </div>
                  </div>
              )
            })}
        </div>
    )
}

export default Product
