import React, { useEffect, useState } from "react";
import { PRODUCTS } from '../products'
import '../styles/bag.css'
import BagItems from "./BagItems";

function Bag() {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const cart = localStorage.getItem("cart");
        if (cart) {
            const cartArray = cart.split(",");
            const items = cartArray.map((id) =>
                PRODUCTS.find((item) => item.id == id)
            ).filter(Boolean); // removes any undefined if id not found
            setCartItems(items);
            console.log(cartItems)
        }
    }, []);

    return (
        <div className="bag-container">
            <div className="bag-heading">Shopping Bag</div>
            <div className="column">
                {
                    cartItems.map((item) => (
                        <BagItems data={item} />
                    ))
                }
            </div>
        </div>
    )
}

export default Bag