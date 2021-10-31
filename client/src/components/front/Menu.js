import React, { Component } from 'react';
import { NavLink } from "react-router-dom";


export default class Menu extends Component {
    render() {
        return (
            <div>
                <div className="wrapmenu">
                    <div className="headlogo">
                        <NavLink exact={true} activeClassName="active-class"  to="/index">
                            <img src="./img/kuria-new.png" alt="" className="img-headlogo" />
                        </NavLink>
                    </div>
                    <div className="menu">
                        <ul className="navlist">
                            <li >
                                <NavLink exact={true} activeClassName="active-class" className="navitem" to="/ticket">Ticketing</NavLink>
                            </li>
                            <li>
                                <NavLink exact={true} activeClassName="active-class"  className="navitem" to="/dashnominee">File Nomination</NavLink>
                            </li>
                            <li >
                                <NavLink exact={true} activeClassName="active-class" className="navitem"  to="/signup">Sign Up</NavLink>
                            </li>
                            <li >
                                <NavLink exact={true} activeClassName="active-class" className="navitem"  to="/login">Log In</NavLink>
                            </li>
                            <li >
                                <NavLink exact={true} activeClassName="active-class" className="navitem" to="/license">Buy License</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                
            </div>
        )
    }
}
