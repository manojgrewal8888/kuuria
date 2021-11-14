import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Forgetpassword(props) {
    return (
        <div>
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
                            <form  className=''>
                                <h2 className="log_head">Forget Password</h2>



                                <input
                                    placeholder="Email"
                                   
                                    id="email"
                                    type="email"
                                   className="login_input" />
                               




                            
                               
                              




                                <div className="">

                                    <button type="submit" className="newevnt-btn btn-animatelog btn btn-large wa ves-effect waves-light hoverable blue accent-3">
                                        SUBMIT
                                    </button>
                                    <Link to="/signup"><p className="login_para">Or Sign up</p></Link>

                                </div>
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
        </div>
    )
}

Forgetpassword.propTypes = {

}

export default Forgetpassword

