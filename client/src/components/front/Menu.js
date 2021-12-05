import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { Link } from 'react-router-dom';

import PropTypes from "prop-types";
import { connect } from "react-redux";  
import axios from "axios";
export default class Menu extends Component {
    constructor() {
        super();
        this.state = { 
            showDashboard: false
        };
    }
    componentWillReceiveProps(nextProps) {

    }
    componentDidMount() {   
        var user_id = localStorage.getItem('_id'); 
        if(user_id){
            this.setState({
                showDashboard: true
            });
        }
        
    }



    render() {
        return (
            <div>
                <div className="wrapmenu">
                    <div className="headlogo">
                        <NavLink exact={true} activeClassName="active-class" to="/">
                            <img src="./img/kuria-new.png" alt="" className="img-headlogo" />
                        </NavLink>
                    </div>
                    <div className="menu">

                        <div className="dropmenu_mai">
                        <div className="dropdownzx">
                            <button className="dropbtnzx">MENU</button>
                            <div className="dropdown-contentzx">
                            <Link className="link_resetmen"  to='/ticket'>Ticketing</Link>
                            <Link className="link_resetmen"  to='/dashvote'>File Nomination</Link>
                            {!this.state.showDashboard && <>
                            <Link className="link_resetmen"  to='/signup'>Sign Up</Link>
                            <Link className="link_resetmen"  to='/login'>Log In</Link>
                            </> }
                            {this.state.showDashboard && this.state.showDashboard==true && <>
                            <Link className="link_resetmen"  to='/dashboard'>Dashboard</Link> 
                            </> }
                            <Link className="link_resetmen"  to='/license'>Buy Licence</Link>
                            </div>
                        </div>

                        </div>


                        <ul className="navlist">
                            <li className="navli" >
                                <NavLink exact={true} activeClassName="active-class" className="navitem" to="/ticket">Ticketing</NavLink>
                            </li>
                            <li className="navli">
                                <NavLink exact={true} activeClassName="active-class" className="navitem" to="/dashvote">File Nomination</NavLink>
                            </li>
                            {!this.state.showDashboard && <>
                            <li className="navli" >
                                <NavLink exact={true} activeClassName="active-class" className="navitem" to="/signup">Sign Up</NavLink>
                            </li>
                            <li className="navli" >
                                <NavLink exact={true} activeClassName="active-class" className="navitem" to="/login">Log In</NavLink>
                            </li>
                            </>}
                            {this.state.showDashboard && this.state.showDashboard==true && <>
                            <li className="navli" >
                                <NavLink exact={true} activeClassName="active-class" className="navitem" to="/dashboard">Dashboard</NavLink>
                            </li>
                            </>}
                            <li className="navli" >
                                <NavLink exact={true} activeClassName="active-class" className="navitem" to="/license">Buy License</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        )
    }
}
