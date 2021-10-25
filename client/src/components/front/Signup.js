import React, { Component } from 'react'
import { Link } from "react-router-dom";




export default class Login extends Component {
    render() {
        return (
            <div className="wrap_login">
                <img src="./img/kuria-new.png" alt="" className="login_img" />

                <div className="contain_login">
                    <h2 className="log_head">Sign Up</h2>
                    <input className="login_input" type="text" name="orgname" id="orgname" placeholder="Organisation Name"/>
                    <input className="login_input" type="email" name="mail" id="mail" placeholder="Email"/>
                    <select className="selector_signup" name="ccode" id="ccode">
                            <option value="timezone"> +91</option>
                            <option value="india">+111</option>
                            <option value="europe"> +919</option>
                            
                    </select>   
                    <input className="login_input1" type="number" name="phone" id="phone" placeholder="Phone Number"/>
                    <input className="login_input" type="password" name="pwd" id="pwd" placeholder="Password"/>
                    <input className="login_input" type="password" name="pwd" id="pwd" placeholder="Confirm Password"/> 
                    <div className="newevnt-btn">

                        <a href="#" className="btn-animatelog">
                            <span className="span-toplog"></span>
                            <span className="span-rightlog"></span>
                            <span className="span-bottomlog"></span>
                            <span className="span-leftlog"></span>
                            <p className="btn-pra">SIGN UP</p>
                        </a>

                    </div>

                    <p className="login_para">Already Have An Account?<Link exact to='/Login'>Log In</Link></p>
                </div>
                <div className="box1_login"></div>
                <div className="box2_login"></div>
                <div className="box3_login"></div>
                <div className="box4_login"></div>
                <div className="box1_sign"></div>
            </div>
        )
    }
}

