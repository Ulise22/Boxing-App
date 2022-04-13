import React, { useState} from "react";
import { Link } from "react-scroll/modules";
import Logo from './logo.png'
import './Navbar.css';

const Navbar = () => {
    const [menu, setMenu] = useState(false);

    const handleClick = () => setMenu(!menu);

    return(
        <div className="navbar">
            <div className="navbar__container">
                <div className="navbar__logo">
                    <a href="#">
                        <img src={Logo} className="logo__img" />
                        <Link activeClass="active" to="home" spy={true} smooth={true} duration={500}>Box classes</Link>
                    </a>
                </div>

                <div className="navbar__icon" onClick={handleClick}>
                    <i className={menu ? 'fas fa-times fa-2x' : 'fas fa-bars fa-2x'} />
                </div>

               <ul className={menu ? "navbar__list active" : "navbar__list"}>
                    <li className="navbar__list-item" >
                        <a href="#" className="navbar__list-links">
                            <Link activeClass="active" to="home" spy={true} smooth={true} duration={500} onClick={handleClick}>Home</Link>
                        </a>
                    </li>
                    <li className="navbar__list-item">
                        <a href="#" className="navbar__list-links">
                            <Link activeClass="active" to="training" spy={true} smooth={true} duration={500} onClick={handleClick}>Training</Link>
                        </a>
                    </li>
                    <li className="navbar__list-item">
                        <a href="#" className="navbar__list-links">
                            <Link activeClass="active" to="students" spy={true} smooth={true} duration={500} onClick={handleClick}>Students</Link>
                        </a>
                    </li>
                    <li className="navbar__list-item">
                        <a href="#" className="navbar__list-links">
                            <Link activeClass="active" to="discount" spy={true} smooth={true} duration={500} onClick={handleClick}>Discount</Link>
                        </a>
                    </li>
                    <li className="navbar__list-item">
                        <a href="#" className="navbar__list-links">
                            <Link activeClass="active" to="buy" spy={true} smooth={true} duration={500} onClick={handleClick}>Buy</Link>
                        </a>
                    </li>
               </ul>
            </div>
        </div>
    )
}

export default Navbar;