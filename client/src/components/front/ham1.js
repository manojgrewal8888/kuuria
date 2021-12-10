

import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { Link } from "react-router-dom";
class Hamburgerone extends Component {
    constructor() {
        super();
        this.state = {
            menu: false, 
        };
    }
    showmenu = e => {
        if(this.state.menu == false){
            this.setState({ 
                menu: true
            })
        }else{
            this.setState({ 
                menu: false
            })
        }
    }
    render() {


        return (
            <>
                <div className="hammen1">
                    <button className="btnham1" onClick={this.showmenu}><i className="fa fa-align-justify custopm"></i></button>
                    {this.state.menu && 
                    <ul className="ham1list">
                        <Link className="ven_under" to='/dashboard'><li className="ham1li">Dashboard</li></Link>
                        <Link className="ven_under" to='/manage_questions'><li className="ham1li">Manage Questions</li></Link>
                        <Link className="ven_under" to='/manage_ticket'><li className="ham1li">Manage Ticket</li></Link>
                        <Link className="ven_under" to='/revenue'><li className="ham1li">Payments</li> </Link>
                        <Link className="ven_under" to='/massages'><li className="ham1li">Messages</li></Link>
                        <Link className="ven_under" to='/process_var'><li className="ham1li">Verification</li></Link>
                        <Link className="ven_under" to='/nomination_form'><li className="ham1li">Nomination Form</li></Link>
                        <Link className="ven_under" to='/manage_events'><li className="ham1li">Manage Events</li></Link>
                    </ul>}

                </div>
            </>
        )
    }
}

export default Hamburgerone;