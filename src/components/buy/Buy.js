import React from "react";
import buy from '../../images/buy.jpg';
import './Buy.css';

const Buy = () => {
    return(
        <div name='buy' className="buy">
            <div className="container buy__container">
                <div className="buy__image">
                    <img src={buy} alt="fight" className="buy__image__img" />
                </div>
                <div className="buy__text">
                    <h1 className="buy__text__title">Star Now</h1>
                    <a className="buy__text__btn">BUY</a>
                </div>
            </div>
        </div>
    )
}

export default Buy;