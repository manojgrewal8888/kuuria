import React, { Component } from "react";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Sidebar from "./Sidebar";
import Logout from "./Logout";
import { Link } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
class Superadmin extends Component {

    render() {

        return (
            <div>
                <div className="wrap_vwendor">
                    <AdminSidebar history={this.props.history} />

                    <div className="right_vendor">
                        <div className="right_subven">
                            <Logout history={this.props.history} />


                            <div className="dropdown_maindeshb">
                                <i className="fa fa-bell bell_main" ></i>
                                <div className="dropcontan_maindeshb">
                                    <a className="linkforamindesh" href="#"><i className="fa fa-circle circlemain_sdesh" ></i>Link 1</a>
                                    <a className="linkforamindesh" href="#"><i className="fa fa-circle circlemain_sdesh" ></i>Link 2</a>
                                    <a className="linkforamindesh" href="#"><i className="fa fa-circle circlemain_sdesh" ></i>Link 3</a>
                                </div>
                            </div>


                            <div className="toptymmain">
                                <div className="numbertym_mainsup">
                                    <div className="onetymmain">
                                        <p className="numtym">12</p>
                                        <p className="fistoneword">Organisations</p>
                                    </div>
                                    <div className="onetymmain">
                                        <p className="numtym">78</p>
                                        <p className="fistoneword">Events</p>
                                    </div>
                                    <div className="onetymmain">
                                        <p className="numtym">100,000</p>
                                        <p className="fistoneword">Total Income(Cedis)</p>
                                    </div>

                                </div>


                                <div className="wordftym_main"> </div>


                                <div className="btnwrap_maindsup">
                                    <Link to="/org_superadmin">
                                        <button className="doublebtn_maindsup">Organisation</button>
                                    </Link>
                                </div>

                                <Link to='/viewedit_question'>
                                    <button className="manage_btnv"><i className="fa fa-plus-circle adicon_v"></i>Add To List</button>
                                </Link>


                                <div className="wrapitsear">
                                    <input type="search" name="" id="" placeholder="Search Organisation" className="searc_superaddesh" />
                                    <i className='far fa-question-circle seariorg'></i>
                                </div>


                                <div className="tablewrapformain">
                                    <table className="table_maindeshb">
                                        <tr className="table_1strowmainb">
                                            <th className="table_1stlinemain">Organisation Name</th>
                                            <th className="table_1stlinemain">Events</th>
                                            <th className="table_1stlinemain">Total Income</th>
                                            <th className="table_1stlinemain">Status</th>
                                        </tr>
                                        <tr className="table_1strowmainb2">
                                            <td className="table_1stlinemain2">Organisation 1</td>
                                            <td className="table_1stlinemain2">4</td>
                                            <td className="table_1stlinemain2">23000</td>
                                            <td className="table_1stlinemain2">
                                                <div className="togfree2">
                                                    <input className="check_tog" type="checkbox" name="" id="" />
                                                </div>
                                            </td>
                                        </tr>

                                        <tr className="table_1strowmainb2">
                                            <td className="table_1stlinemain2">Organisation 1</td>
                                            <td className="table_1stlinemain2">4</td>
                                            <td className="table_1stlinemain2">23000</td>
                                            <td className="table_1stlinemain2">
                                                <div className="togfree2">
                                                    <input className="check_tog" type="checkbox" name="" id="" />
                                                </div>
                                            </td>
                                        </tr>

                                        <tr className="table_1strowmainb2">
                                            <td className="table_1stlinemain2">Organisation 1</td>
                                            <td className="table_1stlinemain2">4</td>
                                            <td className="table_1stlinemain2">23000</td>
                                            <td className="table_1stlinemain2">
                                                <div className="togfree2">
                                                    <input className="check_tog" type="checkbox" name="" id="" />
                                                </div>
                                            </td>
                                        </tr>

                                        <tr className="table_1strowmainb2">
                                            <td className="table_1stlinemain2">Organisation 1</td>
                                            <td className="table_1stlinemain2">4</td>
                                            <td className="table_1stlinemain2">23000</td>
                                            <td className="table_1stlinemain2">
                                                <div className="togfree2">
                                                    <input className="check_tog" type="checkbox" name="" id="" />
                                                </div>
                                            </td>
                                        </tr>

                                        <tr className="table_1strowmainb2">
                                            <td className="table_1stlinemain2">Organisation 1</td>
                                            <td className="table_1stlinemain2">4</td>
                                            <td className="table_1stlinemain2">23000</td>
                                            <td className="table_1stlinemain2">
                                                <div className="togfree2">
                                                    <input className="check_tog" type="checkbox" name="" id="" />
                                                </div>
                                            </td>
                                        </tr>



                                    </table>

                                    <div className="aligndot_maind">
                                        <span className="dot dot_rezmaind" onclick="currentSlide(1)"></span>
                                        <span className="dot dot_rezmaind" onclick="currentSlide(2)"></span>
                                        <span className="dot dot_rezmaind" onclick="currentSlide(3)"></span>
                                    </div>
                                </div>
                            </div>

                        </div>


                    </div>

                </div>

                <p className="endtxt">  Made with<i className="fa fa-heart last_heart"></i>In Trasacco valley, Ghana</p>
            </div>
        )
    }
}

export default Superadmin