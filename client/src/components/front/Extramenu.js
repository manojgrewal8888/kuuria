import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Sidebar from "./Sidebar";
import Logout from "./Logout";
import axios from "axios";
const moment = require('moment');
class Extramenu extends Component {
    render() {



        return (
            <div>

                <div className="wrapemen">
                    <ul className="emenul">
                        <li className="emenli"> <Link to="/settinggen" className="setemlink" >General</Link></li>
                        <li className="emenli"><Link to="/eventnominee" className="setemlink" >Categories</Link></li>
                        <li className="emenli"><Link to="/smsven" className="setemlink" >Sms</Link></li>
                        <li className="emenli"><Link to="/settingorg" className="setemlink" >Organisation</Link></li>
                        <li className="emenli"><Link to="/settingapp" className="setemlink" >Appearance</Link></li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default Extramenu;
