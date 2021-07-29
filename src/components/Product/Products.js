import React, {useState, useEffect} from 'react'
import axios from "axios"
import "./ProductStyle.css"
import { Link } from "react-router-dom";
import { Add24 } from '@carbon/icons-react'
import { useHistory } from "react-router-dom";


const Product = () => {

  const history = useHistory();

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

        <div className="flex flex-col justify-center items-center">
            {realProducts && realProducts.filter(product => product.stock).map((product) => {
              
                return (
                  <div >
                    <div className="rounded-default shadow-lg my-2 mx-2 w-1/2 lg:w-1/3 overflow-hidden pb-3 hover:shadow-xl" key={product.id} id="container">
                      
                      <img className="w-full" style={{width: "100%", marginBottom: '-60px', marginTop: '-40px'}} src={product.media ? product.media[0].path : 'defaultProductPicture.jpeg'} alt='Productview'></img>
                      <div className='px-4 pt-3 text-secondary'>
                        <p className="text-left text-xl text-secondary font-normal tracking-wide py-1">{product.title}</p>
                      <div style={{display:'flex', justifyContent: 'space-between',}}>
                        <p className="text-base text-left font-light text-body tracking-wide mb-6">{product.stock[0].price}€</p>
                        <Link to={"/catalog/"+product.id}><button><Add24/></button> </Link>
                      </div>
                        <button onClick={() => history.push('/catalog/'+product.id)} className='text-primary font-semibold bg-secondary py-2 px-5 rounded-default border border-none text-base shadow-md active:bg-s-hover active:border-secondary focus:outline-none ease-linear transition-all duration-150 tracking-wide'>More Details</button>
                      </div>
                  </div>
                  </div>
              )
            })}
					</div>
    )
}

export default Product
