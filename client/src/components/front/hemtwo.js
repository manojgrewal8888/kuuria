

import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { Link } from "react-router-dom";
class Hamburgertwo extends Component {
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
                <div className="hammen2">
                    <button className="btnham2" onClick={this.showmenu}><i className="fa fa-gears custopm"></i></button>
                    {this.state.menu && 
                    <ul className="emenul2">
                        <Link to="/settinggen" className="" ><li className="emenli2"> General</li></Link>
                        <Link to="/eventnominee" className=""  ><li className="emenli2">Categories</li></Link>
                        <Link to="/smsven" className="" ><li className="emenli2">Sms</li></Link>
                        <Link to="/settingorg" className="" ><li className="emenli2">Organisation</li></Link>
                        <Link to="/settingapp" className="" ><li className="emenli2">Appearance</li></Link> 
                    </ul>}


                </div>
            </>
        )
    }
}

export default Hamburgertwo;