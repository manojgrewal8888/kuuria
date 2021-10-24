import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Welcome extends Component {
    render() {
        return (
            <div>
                <div className="wrap-newevent">

                    <div className="new-logo">
                        <img src="./img/kuria-new.png" alt="" className="logo-new"/>
                    </div>

                    <div className="newevent-txt">
                        <h1 className="heding-newevent"> WeLCOME TO KuuRia! </h1>

                        <p className="newevent-para"> Get Started by Creating Your First Award and Event Scheme </p>
                    </div>

                    <div className="box-new"></div>
                    <div className="box-new1"></div>

                    <input type="text" name="event" id="event">
                           
                    </input>

                    <div className="newevnt-btn">

                        <Link exact to='/Welcreate' className="btn-animate">
                            <span className="span-top"></span>
                            <span className="span-right"></span>
                            <span className="span-bottom"></span>
                            <span className="span-left"></span>
                            <p className="btn-pra">NEXT</p>
                        </Link>

                    </div>



                </div>
            </div>
        )
    }
}