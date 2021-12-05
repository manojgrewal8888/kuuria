import React, { Component } from "react";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Sidebar from "./Sidebar";
import Logout from "./Logout";
import { Link } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";


class Googleana extends Component {

    render() {

        return (
            <div>
                <div className="wrap_vwendor">
                    <AdminSidebar history={this.props.history} />

                    <div className="right_vendor">
                        <div className="right_subven">

                            <p className="anal_h">Google Analytics (UA ID)</p>
                            <input type="text" className="uianaly" />
                            <div className="wrapana_btn">
                                <button className="anabtnsub">SUBMIT</button>
                            </div>
                        </div>


                    </div>

                </div>

                <p className="endtxt">  Made with<i className="fa fa-heart last_heart"></i>In Trasacco valley, Ghana</p>
            </div>
        )
    }
}

export default Googleana