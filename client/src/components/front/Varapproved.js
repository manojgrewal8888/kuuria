import React, { Component } from "react";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Sidebar from "./Sidebar";
import Logout from "./Logout";
import { Link } from "react-router-dom";
class Varapproved extends Component {

    render() {

        return (
            <div>
                <div className="wrap_vwendor">
                    <Sidebar history={this.props.history} />

                    <div className="right_vendor">
                        <div className="right_subven">
                            <Logout history={this.props.history} />

                            <div className="btnwrapvarv">
                                <Link className="link_resetvar" to='/apprived_var'><button className="venverbtn">Approved Events</button></Link>
                                <Link className="link_resetvar" to='/process_var'><button className="venverbtn">Pending Events</button></Link>
                            </div>

                            <div className="even1_var">
                                <p className="ev1_vendorvar">Event 1</p>
                                <i class="fa fa-check-circle-o tikspan_var"></i>
                                <p className="evvar_progress">Event Approved</p>

                                <div className="prog_var">
                                    <progress className="progres_varven1" value="10000" max="10000">100%</progress>
                                </div>
                            </div>

                            <div className="even1_var">
                                <p className="ev1_vendorvar">Event 4</p>
                                <i class="fa fa-check-circle-o tikspan_var"></i>
                                <p className="evvar_progress">Event Approved</p>

                                <div className="prog_var">
                                    <progress className="progres_varven1" value="10000" max="10000">100%</progress>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <p className="foot-slogan">Made With <i className="fa fa-heart heartfoot"></i> In Trasacco Valley, Ghana </p>
            </div>
        )
    }
}

export default Varapproved