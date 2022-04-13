import React from "react";
import './Discount.css';

const Discount = () => {
    return(
        <div name='discount' className="discount">
            <div className="container">
                <div className="discount__text">
                    <h2 className="discount__text__sub">You can Join this Month for:</h2>
                    <h1 className="discount__text__price">$19.99</h1>
                </div>
            </div>
        </div>
    )
}

export default Discount;