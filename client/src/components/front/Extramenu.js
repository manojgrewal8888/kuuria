import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Sidebar from "./Sidebar";
import Logout from "./Logout";
import axios from "axios";
const moment = require('moment');
class Extramenu extends Component {
    constructor() {
        super();
        this.state = {
            route: ""
        };
    }
    componentDidMount() {
        if (this.props.history.location.pathname) {
            this.setState({
                route: this.props.history.location.pathname
            });
        }
         
    }
    render() {


        return (
            <div>

                <div className="wrapemen">
                    <ul className="emenul">
                        <li className="emenli"> <Link to="/settinggen" className={this.state.route == '/settinggen' ? 'custom_b0 setemlink' : 'custom_b1 setemlink'} >General</Link></li>
                        <li className="emenli"><Link to="/categories" className={this.state.route == '/categories' ? 'custom_b0 setemlink' : 'custom_b1 setemlink'}  >Categories</Link></li>
                        <li className="emenli"><Link to="/smsven" className={this.state.route == '/smsven' ? 'custom_b0 setemlink' : 'custom_b1 setemlink'}  >Sms</Link></li>
                        <li className="emenli"><Link to="/settingorg" className={this.state.route == '/settingorg' ? 'custom_b0 setemlink' : 'custom_b1 setemlink'}  >Organisation</Link></li>
                        <li className="emenli"><Link to="/settingapp" className={this.state.route == '/settingapp' ? 'custom_b0 setemlink' : 'custom_b1 setemlink'}  >Appearance</Link></li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default Extramenu;
