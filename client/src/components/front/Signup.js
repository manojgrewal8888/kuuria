import React, { Component } from 'react'
import { useState } from 'react'
import { Link, withRouter } from "react-router-dom";
import 'react-phone-number-input/style.css'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import classnames from "classnames";
class Register extends Component {
    constructor() {
        super();
        this.state = {
          name: "",
          email: "",
          password: "",
          password2: "",
          errors: {},
          phone:''
        };
         
      } 
  
  
    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
          this.setState({
            errors: nextProps.errors
          });
        }
      }
    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
      };
    onSubmit = e => {
        e.preventDefault();
    const newUser = {
          name: this.state.name,
          email: this.state.email,
          password: this.state.password,
          password2: this.state.password2
        };
    this.props.registerUser(newUser, this.props.history); 
      };
    
      componentDidMount() {
        // If logged in and user navigates to Register page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
          this.props.history.push("/dashboard");
        }
      }

     
    render() {
        const { errors } = this.state;
    return (
        <>
            <div className="wrap_login">
                <Link to="/"><img src="./img/kuria-new.png" alt="" className="login_img" /></Link>
                    <form noValidate onSubmit={this.onSubmit}>
                        <div className="contain_login">
                            <h2 className="log_head">Sign Up</h2>
                          {/*   <input className="login_input" type="text" name="orgname" id="orgname" placeholder="Organisation Name"/> */}
                            <input   
                                onChange={this.onChange}
                                value={this.state.username}
                                error={errors.username}
                                id="username"
                                type="text"
                                className={'login_input '+classnames("", {
                                    invalid: errors.username
                                })}
                            />
                            <span className="red-text">{errors.username}</span>

                          {/*   <input className="login_input" type="email" name="mail" id="mail" placeholder="Email"/> */}
                          <input  
                                onChange={this.onChange}
                                value={this.state.email}
                                error={errors.email}
                                id="email"
                                type="email"
                                className={'login_input '+classnames("", {
                                    invalid: errors.email
                                })}
                                />
                            <span className="red-text">{errors.email}</span>

                            <div className="resetsignup">
                            <PhoneInput
                                country={'gh'}
                                value={this.state.phone}
                                onChange={phone => this.setState({ phone })}
                                />
                                </div>

                            
                            <input className="login_input" type="password" name="pwd" id="pwd" placeholder="Password"/>
                            <input className="login_input" type="password" name="pwd" id="pawd" placeholder="Confirm Password"/> 
                            <div className="newevnt-btn">

                                <a href="javascript(void)" className="btn-animatelog">
                                    <span className="span-toplog"></span>
                                    <span className="span-rightlog"></span>
                                    <span className="span-bottomlog"></span>
                                    <span className="span-leftlog"></span>
                                    <p className="btn-pra">SIGN UP</p>
                                </a>

                            </div>

                            <p className="login_para">Already Have An Account?<Link  to='/Login'>Log In</Link></p>
                        </div>
                    </form>
                <div className="box1_login"></div>
                <div className="box2_login"></div>
                <div className="box3_login"></div>
                <div className="box4_login"></div>
                <div className="box1_sign"></div>
            </div>
        </>
        )
    }
}

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
  };
  const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
  });
  export default connect(
    mapStateToProps,
    { registerUser }
  )(withRouter(Register));