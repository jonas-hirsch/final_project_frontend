import React from 'react';
import "./styles.css";
import { Link } from "react-router-dom";





const NavBar = () => {
    

    return (
    <>
    <div className="navBar">
        <div>
            <span><Link className="categorie_button"  to='/'>COD/NG</Link></span>
        </div>
        <div className='navBar_categorie'>
            <span><Link className="categorie_button">NEWS</Link></span>
            <span><Link className="categorie_button" to='/products'>CLOTHING</Link></span>
            <span><Link className="categorie_button" to='/products'>TRENDS</Link></span>
            <span><Link className="categorie_button" to='/products'>GEAR</Link></span>
        </div>
        <div className="navBar-links">
            <span><Link className="categorie_button" to='/myCart'>Shopping Cart</Link></span>
            <span><Link className="categorie_button" to='/myProfil'>Profile</Link></span>
            <span><Link className="categorie_button" to='/myMessage'>Message</Link></span>
        </div>
    </div>
    </>
    )
}

export default NavBar


