import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Sidebar from "./Sidebar";
import Logout from "./Logout";
import { useState } from 'react'

import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'


class Createform extends Component {
    constructor() {
        super();
        this.state = {
            phone: "", 
        };
         
      } 
    render() {
        return (
            <div>

                <div className="wrap_vwendor">
                    <Sidebar history={this.props.history} />
                    <div className="right_vendor">
                        <div className="right_subven">
                            <Logout />
                            <button className="formn_btn">FORMS</button>
                            
                            <div className="noform_head">
                                <h1 className="noform_heading">NO FORM CREATED</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>






        )

    }
}

export default Createform;
