import React, { useEffect } from "react";
import Search from "../search/search";
import { NavLink } from "react-router-dom";
import "./mobile-menu.css";

const MobileMenu = ({onGetData, onClickMenuOpen, onIsOpen}) => {

    useEffect(() => {

        onIsOpen ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto";

    }, [onIsOpen])

    console.log()

    const adaptScreenSize = () => {
        if (window.screen.width < 768) {
            return (
                <div className="menu-modal">
                    <div>
                        <Search onGetData={onGetData}/>
                        <div className="mobile-links">
                            <NavLink className="mobile-link" onClick={onClickMenuOpen} to="/in-cinemas">In cinemas</NavLink>
                            <NavLink className="mobile-link" onClick={onClickMenuOpen} to="/my-account">My account</NavLink>
                        </div>
                    </div>
                </div>
            )
        }
    }
    return (
        <>{adaptScreenSize()}</>
    )
}

export default MobileMenu;