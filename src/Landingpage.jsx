import React, { useEffect } from 'react'
import './styles/landingpage.css'

import { NavLink } from 'react-router-dom'


function Landingpage() {
    useEffect(() => {
        const shoeimg = document.getElementById('shoeimg')
        shoeimg.classList.add('animateonload')
    }, [])
    
    return (  
        <div className="landingpage-container">
            <div className="mainimg-wrapper">
                <div className="mainimg-container">
                    <div className="bordertxt">PREMIUM SHOES</div>
                    <img className='shoeimg' id='shoeimg' src="/shoeimg.png" alt="landingpageimg" />
                    <div className="filltxt">PREMIUM SHOES</div>
                </div>
                    <div className="landingpage-description">
                        <div className="desc-text">Starting at $119/-</div>
                        <NavLink to="/collections">Explore</NavLink>
                    </div>
            </div>
        </div>
    )
}
export default Landingpage;