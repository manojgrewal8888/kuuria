import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Sidebar from "./Sidebar";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions"; 
import PropTypes from "prop-types";
class Manageticket extends Component {
    constructor() {
        super(); 
        this.state = {
            route: ""
        };
    }
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser(this.props.history);
    };
    render() {
        return (
            <div>
                <div className="wrap_vwendor">
                <Sidebar history={this.props.history}/>  

                    <div className="right_vendor">
                        <div className="right_subven">
                            <div  className="logout_ven1">
                                <i  onClick={this.onLogoutClick} class="fa fa-sign-out "></i>
                                Log Out
                            </div>

                            <input className="man_tickets" type="search" placeholder="Search Ticket" name="" id="" />
                            <Link   to='/viewedit_ticket'> 
                            <button className="mantik_btnv"><i class="fa fa-plus-circle adicon_tik"></i>Add Ticket</button>
                            </Link>
                            <div className="tick_wraping">
                                <div className="wrapman_tik">
                                    <p className="mantik_pra_0">No event found , Go to  <Link className="mantik_pra2" to='/viewedit_ticket'>Manage events</Link> and create one.</p> 
                                </div>
                               {/*  <div className="wrapman_tik">
                                    <p className="mantik_pra">Award Event 2021</p>
                                    <Link className="mantik_pra2" to='/viewedit_ticket'>Select to View and Edit</Link>
                                </div>

                                <div className="wrapman_tik">
                                    <p className="mantik_pra">Award Event 2021</p>
                                    <Link className="mantik_pra2" to='/viewedit_ticket'>Select to View and Edit</Link>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
                <p className="bottom_vendash">Made With <i className="fa fa-heart icon_venbottom" ></i> In Trasacco Valley ,Ghana</p>
            </div>
        )
    }
}
Manageticket.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth
});
export default connect(
    mapStateToProps,
    { logoutUser }
)(Manageticket);