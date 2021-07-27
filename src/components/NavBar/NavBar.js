import React from 'react';
import "./styles.css";
import { Link } from "react-router-dom";





const NavBar = () => {
    

    return (
    <>
    <div className="navBar">
        <div>
            <span><Link className="categorie_button"  to='/'>JBM</Link></span>
        </div>
        <div className='navBar_categorie'>
            <span><Link className="categorie_button" to='/catalog'>HOME</Link></span>
            <span><Link className="categorie_button" to='/catalog'>CATALOG</Link></span>
            <span><Link className="categorie_button" to='/catalog'>ACCESOIRE</Link></span>
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


