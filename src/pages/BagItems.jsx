import React from 'react'

const BagItems = (props) => {
    const {id, productName, price, productImage} = props.data
    return (
        <div className='bag-item-container'>
            <div className="bag-item-img">
                <img src={productImage} alt="" />
            </div>
            <div className="bag-item-contents">
                <div className="bag-item-heading">{productName}</div>
                <div className="bag-item-price">${price}/-</div>
                <div className="bag-item-buttons">
                    <button className='bag-item-deletebtn'>Delete</button>
                    <button className='bag-item-wishlistbtn'>Move to Wishlist</button>
                </div>
            </div>
        </div>
    )
}

export default BagItems