import React from "react";
import './styles/card.css';

function Card(props) {
    var productimage = props.productimage
 
    return (
        <div className="card-container">
            <div className="card-img">
                <img src={`${productimage}`} alt="image"/>
            </div>
            <div className="card-name">{props.name}</div>
            <div className="buttons">
                <button id="cart">Add to cart</button>
                <button id="wishlist">Add to wishlist</button>
            </div>
        </div>
    )
}

export default Card