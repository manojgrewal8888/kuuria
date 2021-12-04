import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Sidebar from "./Sidebar";
import Logout from "./Logout";
import { useState } from 'react'

import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'


class Seeforms extends Component {
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
                            
                            <div className="wrap_seeform">
                           <div className="seeformdiv">
                               <p className="see_formno1">Form Name 1</p>
                               <i className="	fa fa-pencil-square-o see_pencil"></i>
                               <i className="fa fa-eye see_eye"></i>
                           </div>
                           <div className="seeformdiv">
                               <p className="see_formno1">Form Name 1</p>
                               <i className="	fa fa-pencil-square-o see_pencil"></i>
                               <i className="fa fa-eye see_eye"></i>
                           </div>
                           </div>
                        </div>
                    </div>
                </div>
            </div>






        )

    }
}

export default Seeforms;
