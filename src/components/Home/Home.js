import React from "react";
import './Home.css';
import { Link } from "react-router-dom";



const Home = () => {
    return (
        <div className='root'>
            <div style={{ width: "100%", height: "100%", textAlign: 'center', margin: '50px auto'}} >
                <div >
                    <img src='#' alt='#' />
                    <Link to='/catalog'><button>Shop Now</button></Link>
                    <h3>Discover</h3>
                    <p>Minimal and Trends for Developer</p>
                </div>
                <div>
                    <img src='#' alt='#'/>
                    <h3>Shirts</h3>
                    <p>Developer Shirts for everybody</p>
                    <a href='/catalog'>Discover more</a>
                </div>
                <div>
                    <img src='#' alt='#'/>
                    <h3>Gear</h3>
                    <p>For late night coding sessions</p>
                    <a href='#'>Discover more</a>
                </div>
                <div>
                    <img src='#' alt='#'/>
                    <h3>Accesoire</h3>
                    <p>Always have the little Accessoir which makes you special</p>
                    <a href='#'>Discover more </a>
                </div>
                <div className="eat_code_sleep_container">
                    <h1>EAT. SLEEP. CODE. REPEAT.</h1> 
                    <Link to='/catalog'><button>Shop Now</button> </Link>
                </div>
                <div>
                    <img src='#' alt='#'/>
                    <h3>Keep in touch</h3>
                    <p>Subscribe to our Newsletter and always stay Up to Date</p>
                    <input type='text' placeholder='email...' />
                    <button type='submit' >Subscribe</button>
                </div>
            </div>
    </div>
        
    )
}

export default Home