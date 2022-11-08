import React from "react";
import google from "./google.svg";
import facebook from "./facebook.svg";
import apple from "./apple.svg";

const SignUp = () => {
    
    return (
            <div className="login-back">
                <div className="text-logo">
                    <span className="text-logo">MOViE</span>
                    <div className="logo-back">Plus</div>
                </div>
                <span className="login-text">Log in to your account</span>
                <div className="login-toggle-back">
                    <div className="login-button-text active">E-mail</div>
                    <div className="login-button-text">Phone number</div>
                </div>
                <form>
                    <input className="login-input" type="text" name="text" placeholder="Enter your e-mail"></input>
                    <input className="login-input" type="password" name="password" placeholder="Enter your password"></input>
                    <span className="forgot">Forgot your password?</span>
                    <button className="login-button">Log In</button>
                    <button className="register-button">Create an account</button>
                </form>
                <span className="login-text">or log in with</span>
                <div className="socials">
                    <img src={google} alt="google"></img>
                    <img src={facebook} alt="facebook"></img>
                    <img src={apple} alt="apple"></img>
                </div>
            </div>
    )
}

export default SignUp;