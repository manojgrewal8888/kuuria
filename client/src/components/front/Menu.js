import React, { Component } from 'react';
import { NavLink } from "react-router-dom";


export default class Menu extends Component {
    render() {
        return (
            <div>
                <div className="wrapmenu">
                    <div className="headlogo">
                        <NavLink exact activeClassName="active-class"  to="/Home">
                            <img src="./img/kuria-new.png" alt="" className="img-headlogo" />
                        </NavLink>
                    </div>
                    <div className="menu">
                        <ul className="navlist">
                            <li >
                                <NavLink exact activeClassName="active-class" className="navitem" to="/Tiket">Ticketing</NavLink>
                            </li>
                            <li>
                                <NavLink exact activeClassName="active-class"  className="navitem" to="/dashnominee">File Nomination</NavLink>
                            </li>
                            <li >
                                <NavLink exact activeClassName="active-class" className="navitem"  to="/Signup">Sign Up</NavLink>
                            </li>
                            <li >
                                <NavLink exact activeClassName="active-class" className="navitem"  to="/Login">Log In</NavLink>
                            </li>
                            <li >
                                <NavLink exact activeClassName="active-class" className="navitem" to="/License">Buy License</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                
            </div>
        )
    }
}
