import React, { Component } from 'react';
import { NavLink } from "react-router-dom";


export default class Menu extends Component {
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


                        <div class="dropdown_mainz">
                            <button class="dropbtn_downmainz">Dropdown</button>
                            <div class="dropdown-contentmainz">
                                <a href="#">Link 1</a>
                                <a href="#">Link 2</a>
                                <a href="#">Link 3</a>
                            </div>
                        </div>


                        <ul className="navlist">
                            <li className="navli" >
                                <NavLink exact={true} activeClassName="active-class" className="navitem" to="/ticket">Ticketing</NavLink>
                            </li>
                            <li className="navli">
                                <NavLink exact={true} activeClassName="active-class" className="navitem" to="/dashvote">File Nomination</NavLink>
                            </li>
                            <li className="navli" >
                                <NavLink exact={true} activeClassName="active-class" className="navitem" to="/signup">Sign Up</NavLink>
                            </li>
                            <li className="navli" >
                                <NavLink exact={true} activeClassName="active-class" className="navitem" to="/login">Log In</NavLink>
                            </li>
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
