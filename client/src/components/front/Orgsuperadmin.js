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

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Organisationsa