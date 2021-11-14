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
      password2: this.state.password2,
      phone: this.state.phone
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
      <div>
        <div className="wrap_login">
          <div className="wrapleft_sign">
            <div className="left_alisi">
              <div className="onestar"><img className="star_rese" src="./img/stars.png" alt="" />
                <div className="para_swrap"><p className="para_str">All the tools you need.No metter the size of your events.</p></div>
              </div>

              <div className="space_sig2">

                <div className="onestar2"><img className="star_rese" src="./img/stars.png" alt="" />
                  <div className="para_swrap"><p className="para_str">Generate Revenue from hosting and selling your event tickets.</p></div>
                </div>
              </div>
              <div className="space_sig">
                <div className="onestar3"><img className="star_rese" src="./img/stars.png" alt="" />
                  <div className="para_swrap"><p className="para_str">Personalize nomination pages with custom fields</p></div>
                </div>
              </div>
            </div>
          </div>

          <div className="wrapright_sign">
            <Link to="/"><img src="./img/kuria-new.png" alt="" className="login_img" /></Link>
            <p className="wecreate">We Create ,You Celebrate.</p>

            <div className="contain_login">
            <form noValidate onSubmit={this.onSubmit}> 
                            <h2 className="log_head">Sign Up</h2>
                          {/*   <input className="login_input" type="text" name="orgname" id="orgname" placeholder="Organisation Name"/> */}
                            <input   
                            placeholder="Organisation Name"
                                onChange={this.onChange}
                                value={this.state.name} 
                                id="name"
                                type="text"
                                className={'login_input '+classnames("", {
                                    invalid: errors.name
                                })}
                            />
                            <span className="red-text1">{errors.name}</span>

                          {/*   <input className="login_input" type="email" name="mail" id="mail" placeholder="Email"/> */}
                          <input  
                          placeholder="Email"
                                onChange={this.onChange}
                                value={this.state.email} 
                                id="email"
                                type="email"
                                className={'login_input '+classnames("", {
                                    invalid: errors.email
                                })}
                                />
                            <span className="red-text1">{errors.email}</span>

                            <div className="resetsignup">
                            <PhoneInput
                                country={'gh'}
                                value={this.state.phone}
                                onChange={phone => this.setState({ phone })}
                                inputClass="inputxlasic"
                                buttonClass="btnxlasic"
                                containerClass="lcontainxlasic"
                                dropdownClass="dropxlassic"
                                searchClass="searchxlasic"
                                />
                                </div>
                            <span className="red-text1">{errors.phone}</span>
                            
                           {/*  <input className="login_input" type="password" name="pwd" id="pwd" placeholder="Password"/> */}
                           <input
                            onChange={this.onChange}
                            value={this.state.password} 
                            id="password"
                            type="password"
                            placeholder="Password"
                            className={'login_input '+classnames("", {
                              invalid: errors.password
                            })} 
                          />
                           <span className="red-text1">{errors.password}</span>
                         {/*    <input className="login_input" type="password" name="pwd" id="pawd" placeholder="Confirm Password"/>  */}
                         <input
                         placeholder="Confirm Password"
                          onChange={this.onChange}
                          value={this.state.password2} 
                          id="password2"
                          type="password"
                          className={'login_input '+classnames("", {
                            invalid: errors.password
                          })} 
                        />
                         <span className="red-text1">{errors.password2}</span>
                            <div className="">

                               {/*  <button type="submit"   className="newevnt-btn btn-animatelog"> 
                                    <p className="btn-pra">SIGN UP</p>
                                </button> */}
                                <button type="submit" className="btn-animatelog">
                                    SIGN UP 
                                </button>

                            </div>

                            <p className="login_para">Already Have An Account?<Link className='login_B' to='/Login'>Log In</Link></p> 
                    </form>
            </div>

            <div className="box1_login"></div>
            <div className="box2_login"></div>
            <div className="box3_login"></div>
            <div className="box4_login"></div>
            <div className="box1_sign"></div>
          </div>
        </div>


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



