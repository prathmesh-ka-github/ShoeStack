import React from "react";
import './styles/card.css';

function Card(props) {
    const {id, productName, price, productImage} = props.data
    return (
        <div className="card-container">
            <div className="card-img">
                <img src={productImage} alt="" />
            </div>
            <div className="card-name">{productName}</div>
            <div className="card-price">{price}</div>
            <div className="buttons">
                <button id="cart">Add to cart</button>
                <button id="wishlist">Add to wishlist</button>
            </div>
        </div>
    )
}

export default Card