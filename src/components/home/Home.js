import React from "react";
import './Home.css';

const Home = () => {
    return(
        <div name='home' className="home">
            <div className="home__container">
                <h1 className="home__title">Box Academy</h1>
                <p className="home__text">The best Box academy in the zone</p>
                <a className="home__link">Start Now</a>
            </div>
        </div>
    )
}

export default Home;