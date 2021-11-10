import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Login extends Component {
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
              <h2 className="log_head">Log In</h2>
            


              <input className="login_input" type="email" name="mail" id="mail" placeholder="Email" />



              


              <input className="login_input" type="password" name="pwd" id="pwd" placeholder="Password" />


            


              <div className="">

                <button type="submit" className="newevnt-btn ">
                  <Link className='login_B' to='/Login'>  Log In</Link>
                </button>

              </div>

             
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
