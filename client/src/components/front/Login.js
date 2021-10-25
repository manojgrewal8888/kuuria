import React, { Component } from 'react'
import { Link } from "react-router-dom";
export default class Login extends Component {
    render() {
        return (
            <div className="wrap_login">
                <img src="./img/kuria-new.png" alt="" className="login_img" />

                <div className="contain_login">
                    <h2 className="log_head">Login</h2>
                    <input className="login_input" type="email" name="mail" id="mail" placeholder="Email"/>
                    <input className="login_input" type="password" name="pwd" id="pwd" placeholder="Password"/> 
                    <div className="newevnt-btn">

                        <Link exact to="/welcome" className="btn-animatelog">
                            <span className="span-toplog"></span>
                            <span className="span-rightlog"></span>
                            <span className="span-bottomlog"></span>
                            <span className="span-leftlog"></span>
                            <p className="btn-pra">Log In</p>
                        </Link>

                    </div>

                    <p className="login_para">Forget Password?</p>
                </div>
                <div className="box1_login"></div>
                <div className="box2_login"></div>
                <div className="box3_login"></div>
                <div className="box4_login"></div>
            </div>
        )
    }
}
