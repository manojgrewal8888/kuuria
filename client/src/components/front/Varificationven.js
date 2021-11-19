import React, { Component } from "react";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Sidebar from "./Sidebar";
import Logout from "./Logout";
import { Link } from "react-router-dom";
class Varificationven extends Component {

    render() {

        return (
            <div>
                <div className="wrap_vwendor">
                    <Sidebar history={this.props.history} />

                    <div className="right_vendor">
                        <div className="right_subven">
                            <Logout history={this.props.history} />

                           <div className="btnwrapvarv">
                               <button className="venverbtn">Approved Events</button>
                               <button className="venverbtn">Pending Events</button>
                           </div>

                           <div className="even1_var">
                               <p className="ev1_vendorvar">Event 1</p>
                               <p className="evvar_progress">Verification In Progress</p>

                               <div className="prog_var">
                                   <progress className="progres_varven1" value="7000" max="10000">70%</progress>
                               </div>
                           </div>

                           <div className="even1_var">
                               <p className="ev1_vendorvar">Event 2</p>
                               <p className="evvar_progress">Verification In Progress</p>

                               <div className="prog_var">
                                   <progress className="progres_varven1" value="3000" max="10000">30%</progress>
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

export default Varificationven