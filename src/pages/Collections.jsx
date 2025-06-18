import React from "react";
import Card from '../Card'

import '../styles/collections.css'
import '../styles/card.css'

import { PRODUCTS } from "../products.js"

function Collections() {
    return (
        <div className="collections-container">
            <div className="collections-heading">Browse our collections.</div>
            <div className="row">
                {
                    PRODUCTS.map((product) => (
                        <Card data = { product } />
                    ))
                }
            </div>
        </div>
    )
}

export default Collections;