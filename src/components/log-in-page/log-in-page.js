import React, {useEffect, useRef, useState} from "react";
import "./log-in-page.css";
import SignUp from "./sign-up";

const LoginPage = ({closeModal}) => {

    const ref = useRef();

    useEffect(() => {

        document.body.style.overflow = "hidden";

        const handleClickOutside = (e) => {
            if (!ref.current.contains(e.target)) {
                closeModal();
                document.body.style.overflow = "auto";
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [])

    return (
        <div className="blur-back">
            <div ref={ref} className="modal-back">
                <SignUp/>
            </div>
        </div>
    )
}
export default LoginPage;