import React, { Component } from "react";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Sidebar from "./Sidebar";
import Logout from "./Logout";
import { Link } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
class Revanuesup extends Component {

    render() {

        return (
            <div>
                <div className="wrap_vwendor">
                    <AdminSidebar history={this.props.history} />

                    <div className="right_vendor">
                        <div className="right_subven">
                            <Logout history={this.props.history} />
                            <div className="fbtn_rs">
                                <button className="toprevs">Revenue</button>
                            </div>

                            <p className="org_rs">Organisation</p>

                            <div className="ser_newrev">
                                <input type="search" name="" id="" className="sear_nerev" placeholder="Search Organisation" />
                                <i className="fa fa-search last_serrev"></i>

                            </div>

                            <button id="revsup"> <i className="fa fa-plus-circle last_saddrev"></i>ADD TO WISHLIST</button>

                            <table className="tb_rvsup">
                                <tr className="tr_und2">
                                    <th>Organisation Name</th>
                                    <th className="tr2_rvsup">Events</th>
                                    <th className="tr_rvsup">Income</th>
                                </tr>
                                <tr className="tr_und">
                                    <td>Organisation 1</td>
                                    <td className="tr2_rvsup">4</td>
                                    <td className="tr_rvsup">23000</td>
                                </tr>

                                <tr className="tr_und">
                                    <td>Organisation 1</td>
                                    <td className="tr2_rvsup">4</td>
                                    <td className="tr_rvsup">23000</td>
                                </tr>

                                <tr className="tr_und">
                                    <td>Organisation 1</td>
                                    <td className="tr2_rvsup">4</td>
                                    <td className="tr_rvsup">23000</td>
                                </tr>

                                <tr className="tr_und">
                                    <td>Organisation 1</td>
                                    <td className="tr2_rvsup">4</td>
                                    <td className="tr_rvsup">23000</td>
                                </tr>




                            </table>
                        </div>
                    </div>

                </div>
                <p className="endtxt">  Made with<i className="fa fa-heart last_heart"></i>In Trasacco valley, Ghana</p>
            </div>
        )
    }
}

export default Revanuesup;