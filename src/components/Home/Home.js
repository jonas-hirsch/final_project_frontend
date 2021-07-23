import React from "react";
import './Home.css';
import { Link } from "react-router-dom";



const Home = () => {
    return (
    
        <div className='home_container'>
            <div className='banner_container'>
                <div className="eat_code_sleep_container">
                    <h1>EAT. SLEEP. CODE. REPEAT.</h1> 
                    <Link to='/shop'><button>Give me Stuff</button> </Link>
                </div>
            </div>
        </div>
    )
}

export default Home