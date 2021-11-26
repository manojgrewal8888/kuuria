import React, { Component } from "react";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Sidebar from "./Sidebar";
import Logout from "./Logout";
import { Link } from "react-router-dom";
class Organisationsa extends Component {

    render() {

        return (
            <div>
                <div className="wrap_vwendor">
                    <Sidebar history={this.props.history} />

                    <div className="right_vendor">
                        <div className="right_subven">
                            <Logout history={this.props.history} />
                            <div className="btn_orgsup">
                                <button className="org1nt_sa">
                                    Organisation 1
                                </button>
                            </div>

                            <input type="search" id="" name="" className="orgsa_searxh" />

                            <div className="addorgsa">
                                <button className="addbtn_orgsa">
                                    <i className="fa fa-plus-circle orgsa_pllus"></i>
                                    ADD TO LIST
                                </button>
                            </div>

                            <table className="table_maindeshb">
                                <tr className="table_1stroworgsat">
                                    <th className="table_orgsupsa">Event Name</th>

                                    <th className="table_orgsupsa1">Status</th>
                                </tr>
                                <tr className="table_1stroworgsat2">
                                    <td className="table_orgsupsa2">Event 1</td>
                                    <td className="table_orgsupsa3">
                                        <div className="togfreeorg1">
                                            <input className="check_tog" type="checkbox" name="" id="" />
                                        </div>
                                    </td>
                                </tr>

                                <tr className="table_1stroworgsat2">
                                    <td className="table_orgsupsa2">Event 1</td>
                                    <td className="table_orgsupsa3">
                                        <div className="togfreeorg1">
                                            <input className="check_tog" type="checkbox" name="" id="" />
                                        </div>
                                    </td>
                                </tr>

                                <tr className="table_1stroworgsat2">
                                    <td className="table_orgsupsa2">Event 1</td>
                                    <td className="table_orgsupsa3">
                                        <div className="togfreeorg1">
                                            <input className="check_tog" type="checkbox" name="" id="" />
                                        </div>
                                    </td>
                                </tr>


                            </table>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Organisationsa