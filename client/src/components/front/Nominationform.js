import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Sidebar from "./Sidebar";
import Logout from "./Logout";
import { useState } from 'react'

import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'


class Nominationform extends Component {
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
                        <div className="dropmenu_sidebar">
                            <div class="menusidebar">
                                <button class="dropbtnzsidebar"><i class='fas fa-list'></i></button>
                                <div class="dropdown-contentside">
                                    <Link className="link_resetmen" to='/dashboard'>Dashboard</Link>
                                    <Link className="link_resetmen" to='/manage_questions'>Manage Questions</Link>
                                    <Link className="link_resetmen" to='/manage_ticket'>Manage Tickets</Link>
                                    <Link className="link_resetmen" to='/massages'>Massages</Link>
                                    <Link className="link_resetmen" to='/process_var'>Varification</Link>
                                    <Link className="link_resetmen" to='/nomination_form'>Nomination Form</Link>
                                    <Link className="link_resetmen" to='/manage_events'>Manage Events</Link>
                                </div>
                            </div>

                        </div>
                        <div className="right_subven">
                            <Logout />
                            <button className="formn_btn">FORMS</button>
                            <div className="wrap_formnom">
                                <label className="title_formn">Enter Nomination Form Name</label>
                                <input className="formn_input" type="text" name="" id="" />

                                <div className="dropdown_formn">
                                    <button className="linkdrop"><i className="fa fa-plus-circle addi_formn"></i>Add Form Fields</button>
                                    <div className="dropmen">
                                        <div className="wrap_inrdrop">
                                            <div className="itemdrop_formn"><p className="textf_formn">Text Field</p></div>
                                            <div className="itemdrop_formn"><p className="textf_formn">Phone Number Field</p></div>
                                            <div className="itemdrop_formn"><p className="textf_formn">Comment Field</p></div>
                                            <div className="itemdrop_formn"><p className="textf_formn">Photo field</p></div>
                                        </div>

                                    </div>
                                </div>






                                <div className="cont_btnformn">
                                    <button className="save_formno">SAVE</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>






        )

    }
}

export default Nominationform;
