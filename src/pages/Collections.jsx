import React from "react";
import Card from '../Card'

import '../styles/collections.css'
import '../styles/card.css'

import { PRODUCTS } from "../products.js"
console.log(PRODUCTS)

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



                {/* {productdata.map( product => {
                    <Card name={product.name} productimage={`${product.imgurl}`}/>
                })} */}
                {/* <Card name="New Balance 530 Sneakers" productimage="/newbalanceshoe1.png" />
                <Card name="New Balance 574 Athletics" productimage="/newbalanceshoe2.png" />
                <Card name="New Balance 574 Core" productimage="/newbalanceshoe3.png" />
                <Card name="Adidas Campus 00s" productimage="/adidasshoe1.png" />
                <Card name="Under Armour Lockdown 7" productimage="/underarmourshoe1.png" />
                <Card name="Puma Suede Sneakers" productimage="/pumashoe1.png" />
                <Card name="Nike Court Vision Sneakers" productimage="/nikeshoe1.png" />
                <Card name="New Balance 550 Basketball" productimage="/newbalanceshoe4.png" />
                <Card name="On Running Cloudtilt" productimage="/onshoe1.png" /> */}
            
            </div>
        </div>
    )
}

export default Collections;