import React from 'react'
import './Main.css';



const Main = () => {
    return (
        <div >
            <div style={{ width: "100%", height: "100%", textAlign: 'center', margin: '50px auto'}} >
                <div >
                    <img src='#' alt='#' />
                    <button>Shop Now</button>
                    <h3>Discover</h3>
                    <p>Minimal and Trends for Developer</p>
                </div>
                <div>
                    <img src='#' alt='#'/>
                    <h3>Shirts</h3>
                    <p>Developer Shirts for everybody</p>
                    <a href='#'>Discover more</a>
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
                    <p>Always have the little Accesoir which makes you special</p>
                    <a href='#'>Discover more </a>
                </div>
            </div>
        </div>
    )
}

export default Main
