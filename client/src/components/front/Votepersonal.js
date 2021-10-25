import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Votepersonal extends Component {
    render() {
        return (
            <div>
                <div className="wrapvote_browse">
                    <div className="leftv_browse">
                        <img src="./img/dashlogo.jpg" alt="" className="voteimg_resize" />
                        <Link className="link_reset" to='/votecheck'><i class="fa fa-home vot_icon"></i></Link>
                        <Link className="link_reset" to='/votebrowse'><i class="fa fa-th vot_icon"></i></Link>
                        <Link className="link_reset" to='/votepersonal'><i class="fa fa-user vot_icon"></i></Link>
                        <Link className="link_reset" to='/votepersonal'><span className="personalicon_span"><i class="fa fa-user vot_iconpersonal"></i>Personal</span></Link>
                        <Link className="link_reset" to='/voteprices'><i class="fa fa-database vot_icon"></i></Link>

                    </div>

                    <div className="rightv_browse">
                        <p className="fill_personal">Fill In Personal Information</p>
                        <input className="input_person" type="text" name="" id="" placeholder="Name" />
                        <input className="input_person" type="email" name="" id="" placeholder="Email" />
                        <select className="selector_per" name="ccode" id="ccode">
                            <option value="timezone"> +91</option>
                            <option value="india">+111</option>
                            <option value="europe"> +919</option>

                        </select>
                        <input className="per_input1" type="number" name="phone" id="phone" placeholder="Phone Number" />


                        <Link className="link_reset" to='/votebrowse'><button className="back_person">Back</button></Link>
                        <Link className="link_reset" to='/voteprice'><button className="proceed_person">Proceed</button></Link>

                    </div>
                </div>
            </div>
        )
    }
}
