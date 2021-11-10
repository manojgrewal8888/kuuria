import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

export default class Signup extends Component {
  render() {
    return (
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
              <h2 className="log_head">Sign Up</h2>
              <input className="login_input" type="text" name="orgname" id="orgname" placeholder="Organisation Name" />



              <input className="login_input" type="email" name="mail" id="mail" placeholder="Email" />



              <div className="resetsignup">
                <PhoneInput
                  country={'gh'}

                  inputClass="inputxlasic"
                  buttonClass="btnxlasic"
                  containerClass="lcontainxlasic"
                  dropdownClass="dropxlassic"
                  searchClass="searchxlasic"
                />
              </div>


              <input className="login_input" type="password" name="pwd" id="pwd" placeholder="Password" />


              <input className="login_input" type="password" name="pwd" id="pawd" placeholder="Confirm Password" />


              <div className="">

                <button type="submit" className="btn-animatelog">
                  <Link className='login_B' to='/Login'>  SIGN UP</Link>
                </button>

              </div>

              <p className="login_para">Already Have An Account?<Link className='login_B' to='/Login'>Log In</Link></p>
            </div>

            <div className="box1_login"></div>
            <div className="box2_login"></div>
            <div className="box3_login"></div>
            <div className="box4_login"></div>
            <div className="box1_sign"></div>
          </div>
        </div>


      </div>
    )
  }
}




