import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Welcome extends Component {
    render() {
        return (
            <div>
                <div>
                    <div className="wrap-newevent">

                        <div className="new-logo">
                            <Link to="/"><img src="./img/kuria-new.png" alt="" className="logo-new" /></Link>
                        </div>

                        <div className="newevent-txt">
                            <h1 className="heding-newevent"> WeLCOME TO KuuRia! </h1>

                            <p className="newevent-para"> Get Started by Creating Your First Award and Event Scheme </p>
                        </div>

                        <div className="box-new"></div>
                        <div className="box-new1"></div>
                        
                        <Link to="/create" className="link_welxom">
                        <div className="wrapx_wex"><button className="btn-pra">NEXT</button></div>
                        </Link>
                        








                    </div>
                </div>
            </div>
        )
    }
}
