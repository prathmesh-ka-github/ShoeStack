import React from "react";
import './styles/card.css';

function Card(props) {
    const {id, productName, price, productImage} = props.data
    function addtocart(id) {
        let existingcart = localStorage.getItem('cart')
        if (existingcart == null) {
            var cartarray = []
        }
        else {
            var cartarray = existingcart.split(',')
        }
        cartarray.push(id)
        localStorage.setItem('cart', cartarray)
        console.log(cartarray)
    }
    return (
        <div className="card-container">
            <div className="card-img">
                <img src={productImage} alt="" />
            </div>
            <div className="card-name">{productName}</div>
            <div className="card-price">{price}</div>
            <div className="buttons">
                <button onClick={() => addtocart(id)} id="cart">Add to cart</button>
                <button onClick={() => localStorage.setItem('wishlist',id)} id="wishlist">Add to wishlist</button>
            </div>
        </div>
    )
}

export default Card