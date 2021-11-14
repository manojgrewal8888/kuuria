import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Sidebar from "./Sidebar";
import { logoutUser } from "../../actions/authActions";
class Modifyevent extends Component {

    render() {
        return (
            <div>
                <div className="wrap_vwendor">
                    <Sidebar history={this.props.history} />

                    <div className="right_vendor">
                        <div className="right_subven">
                            <button className="modlog_btn">
                                <i className="fa fa-sign-out icon_modx" ></i>

                                Log Out
                            </button>

                            <button className="modnew_btn">
                                <i className="fa fa-plus icon_modp" ></i>
                                NEW EVENT
                            </button>

                            <div className="modser_wrap">
                                <div className="sermod_box">
                                    <input type="search" name="" id="" className="modx_ser" />
                                    <i className="fa fa-search icon_serchmodp" ></i>
                                </div>
                                <select className="mod_sel" name="cars" id="cars">
                                    <option value="volvo">Filter By Status</option>
                                    <option value="saab">Saab</option>
                                    <option value="mercedes">Mercedes</option>
                                    <option value="audi">Audi</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )

    }
}

export default Modifyevent;


