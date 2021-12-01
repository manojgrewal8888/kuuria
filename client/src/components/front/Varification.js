import React, { Component } from 'react';
import Emailhead from './Emailhead';
import PropTypes from "prop-types";
import { connect } from "react-redux";
class Varification extends Component {
    render() {
        return (
            <div>
                <Emailhead/>
                <div className="secound_forget">
                    <p className="welcome_forget">Welcome To Kuuria Varification</p>

                    <div className="white_forget">
                        <p className="whitep_forget">Hello ,Oragnisation Name</p>
                        <p className="white2nd_p">Thank you for submitting your registration for Kuuria! You are about to create your first event with us. To finish the process, please click on the verify button below .
                            
                            Happy journey!</p>
                        
                        <button className="vari_forget">VERIFY</button>
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

Varification.propTypes = {
    auth: PropTypes.object.isRequired
  };
  const mapStateToProps = state => ({
    auth: state.auth
  });
  export default connect(
    mapStateToProps,
    {  }
  )(Varification);
