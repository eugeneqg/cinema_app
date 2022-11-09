import React, { useState, useEffect } from "react";
import "./header.css";
import Search from "../search/search";
import burger from "./burger-menu.svg";
import {NavLink, Link} from "react-router-dom";


const Header = ({onGetData, onClickMenuOpen, onIsOpen}) => {

    const activeLink = ({isActive}) => isActive ? "menu-link active-link" : "menu-link";

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        window.screen.width < 768 ? setIsMobile(true) : setIsMobile(false);
    }, []);

    const adaptScreenSize = () => {
        if (!isMobile) {
            return (
                <div className="container header-flex">
                    <Link to="/cinema_app"><div className="logo">MOViE</div></Link>
                    <div className="menu">
                        <NavLink to="/in-cinemas" className={activeLink}>In cinemas</NavLink>
                        <NavLink to="/my-account" className={activeLink}>My account</NavLink>
                        <Search onClickMenuOpen={onClickMenuOpen} onGetData={onGetData}/>
                        <Link to="/promo-page"><button className="header-btn">MOViE Plus</button></Link>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="container header-flex">
                    <Link onClick={onIsOpen ? onClickMenuOpen : null} to="/"><div className="logo">MOViE</div></Link>
                    <img onClick={onClickMenuOpen} src={burger} alt="menu"></img>
                </div>
            )
        }
    }

    return (
        <div className="header-menu">
            {adaptScreenSize()}
        </div>
    )
}

export default Header;