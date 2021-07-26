import React from 'react';
import './Footer.css';
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        
        <div className='footer'>
            <div className="footer_headcontainer">
                <div className="footer_container">
                    <img id='logo' className='logo' src='WBS-CODING-SCHOOL-logo-square.png' alt='Coding-Logo' />
                    <p>subscribe to Newsletter</p>
                    <div>
                    <input type="text" placeholder="Search ..." />
                    <button>subscribe</button>
                    </div>
                </div>
                <div className='footer_container' >
                    <h4>QUICK LINKS</h4>
                    <h5>ORDER STATUS</h5>
                    <p>PAYMENT</p>
                    <p>CUSTOMER ORDER</p>
                    <p>ADDRESS</p>
                    <p>PERSON</p>
                </div>
                <div className='footer_container'>
                    <h4><Link to='/contact'>CONTACT</Link></h4>
                    <p>EMAIL</p>
                    <p>PHONE</p>
                    <p>MESSAGE</p>
                </div>
                <div className='footer_container'>
                    <h4>FOLLOW US</h4>
                    <p>FACEBOOK</p>
                    <p>LINKED IN</p>
                    <p>INSTAGRAM</p>
                </div>
            </div>
            <p className='copyright'>Copyright 2021</p>
        </div>
        
        
    )
}

export default Footer
