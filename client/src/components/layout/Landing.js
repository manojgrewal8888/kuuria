import React, { Component } from "react";
import { Link } from "react-router-dom";
class Landing extends Component {
  render() {
    return (
      <div>
            


                <div className="firstsection">
                    <input className="first_search" type="text" placeholder="Search.." name="search" />
                    <i className="fa fa-search first_icon"></i>
                    <div className="spansearch">
                        <span className="searchspan"><i className="fa fa-trophy first_icon1"></i>AWARD EVENT NAME</span>
                        <span className="searchspan"><i className="fa fa-ticket first_icon2"></i>EVENT TICKET NAME</span>
                        <span className="searchspan"><i className="fa fa-user-circle-o first_icon3"></i>NOMINATION FORM NAME</span>
                        
                    </div>
                </div>


                <div className="section_two">
                    <button className="brs_btn">Browse</button>

                    <div className="cat-box">
                        <div className="cat-item"><h1 className="award_items">AWARD EVENT 1</h1> </div>
                        <div className="cat-item"><h1 className="award_items">AWARD EVENT 2</h1> </div>
                        <div className="cat-item"><h1 className="award_items">AWARD EVENT 3</h1> </div>
                        <div className="cat-item"><h1 className="award_items">AWARD EVENT 1</h1> </div>
                        <div className="cat-item"><h1 className="award_items">AWARD EVENT 2</h1> </div>
                        <div className="cat-item"><h1 className="award_items">AWARD EVENT 3</h1> </div>
                    </div>
                </div>

                <div className="third_section">

                    <img src="./img/associate.png" alt="" sizes="" className="associate_res" />
                    <img src="./img/digital-ocean-logo.png" alt="" className="ocean_res" />
                    <img src="./img/googlelog.png" alt="" className="google_res" />
                    <img src="./img/mtnlog.jpg" alt="" className="mtn_res" />
                    <img src="./img/paystacklog.png" alt="" className="pay_res" />
                </div>

                <div className="forth_secton">
                    <img src="./img/Group2.png" alt="" className="group_1" />
                    <img src="./img/Group2.png" alt="" className="group_1" />
                </div>


                <div className="fifth_section">
                    <div className="left_fifth">
                        <h3 className="subs_head">Subscribe To Our News Letter</h3>
                        <input className="fifth_input" type="text" placeholder="Email Address" name="Email Address" />
                        <button className="fifth_btntype" type="submit">Subscribe</button>

                    </div>
                    <div className="right_fifth">
                        <img src="./img/contact.png" alt="" className="contact_res" />
                    </div>
                </div>


                <div className="footer">
                    <div className="foot-flex">
                        <img src="./img/kuria-new.png" alt="" className="foot-logo" />

                        <ul className="foot-left">
                            <li className="leftf-list"><Link exact to="/empty" className="left-afoot">File For Nomination</Link></li>
                            <li className="leftf-list"><Link exact to="/Tiket" className="left-afoot">Ticketing</Link></li>
                            <li className="leftf-list"><Link exact to="/empty" className="left-afoot">Reality Shows</Link></li>
                            <li className="leftf-list"><Link exact to="/empty" className="left-afoot">Support</Link></li>
                            <li className="leftf-list"><Link exact to="/Login" className="left-afoot">Log In</Link></li>
                        </ul>

                        <ul className="foot-right">
                            <li className="rightf-list"><Link exact to="/empty" className="right-afoot">Terms Of Services</Link></li>
                            <li className="rightf-list"><Link exact to="/empty" className="right-afoot">Privacy Policy</Link></li>
                            <li className="rightf-list"><Link exact to="/empty" className="right-afoot">Reviews</Link></li>
                            <li className="rightf-list"><Link exact to="/empty" className="right-afoot">FAQ's</Link></li>
                        </ul>

                        <img src="./img/playstore.png" alt="" className="footplay" />
                        <img src="./img/appstore.svg" alt="" className="footplay2" />
                        <div className="socialfoot">
                            <Link to ='./empty' ><i className="fa fa-instagram iconfoot" ></i></Link>
                            <Link to ='./empty' ><i className="fa fa-facebook iconfoot" ></i></Link>
                            <Link to ='./empty' ><i className="fa fa-twitter iconfoot" ></i></Link>
                        </div>
                    </div>

                    <p className="foot-slogan">Made With <i className="fa fa-heart heartfoot"></i> In Trasacco Valley, Ghana </p>
                </div>

            </div>
    );
  }
}
export default Landing;