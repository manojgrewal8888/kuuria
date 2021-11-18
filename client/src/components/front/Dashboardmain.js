import React, { Component } from "react";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Sidebar from "./Sidebar";
import Logout from "./Logout";
import { Link } from "react-router-dom";
class Dashboardmain extends Component {

  render() {
  
    return (
      <div>
                <div className="wrap_vwendor">
                <Sidebar history={this.props.history}/>  

                    <div className="right_vendor">
                        <div className="right_subven"> 
                        <Logout history={this.props.history}/>

                        <i className="fa fa-bell bell_main" ></i>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboardmain