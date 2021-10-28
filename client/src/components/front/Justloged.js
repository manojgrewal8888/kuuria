import React, { Component } from 'react';
import Emailhead from './Emailhead';

export default class Justloged extends Component {
    render() {
        return (
            <div>
                <Emailhead />

                <div className="secound_forget">
                    <p className="welcome_forget">Just Logged In</p>

                    <div className="white_forget">
                        <p className="whitep_forget">Hello ,Oragnisation Name</p>
                        <p className="white2nd_p">
                            It looks like someone logged into your account  from a device “ device name “  on “ date”
                            at “ time” UTC. The login took place somewhere near “Location” ( IP= “ IP address “)
                            If this was you, please disregard this email. No further action is needed.
                            If not you, please visit the profile section to change the password.</p>

                  
                    </div>
                </div>

                <div className="third_forget">
                    <img src="./img/playstore.png" alt="" className="imgplay_forget" />
                    <img src="./img/appstore.png" alt="" className="imgapp_forget" />

                    <div className="social_forget">
                        <i className="fa fa-facebook iconforget" ></i>
                        <i className="fa fa-instagram iconforget2" ></i>
                        <i className="fa fa-twitter iconforget3" ></i>
                    </div>
                </div>

                <div className="fourt_forget">
                    <p className="lastp_forget">Copyright (C) 2021 Kuuria</p>
                </div>
            </div>
        )
    }
}
