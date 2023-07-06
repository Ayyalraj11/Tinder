import React from "react"; 
import "./login.css";
import welcome from "../assests/welcome.png";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import{faG} from '@fortawesome/free-solid-svg-icons';
import{faDove} from '@fortawesome/free-solid-svg-icons';
import LoginForm from "./email";
const Loginpage = () => {
    return (<>
   <div className="container">
    <div className="text">Hi, Welcome Back</div>
    <img src={welcome} className="img1"/>
    </div>
    <div className="text1">Sign in to Minimal</div>
    <div className="text2">Don’t have an account? <a className="text3">Get started</a> </div>
   <div className="button"><button className="gmail"><FontAwesomeIcon icon={faG} className="google"/></button>
    <button className="fb"><div className="face">f</div></button>
    <button className="twit"><FontAwesomeIcon icon={faDove} className="tw"/></button></div>
    <div><LoginForm/></div>
    
    </>
    )
}
export default Loginpage;