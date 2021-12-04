import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Sidebar from "./Sidebar";
import Logout from "./Logout";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import PropTypes from "prop-types";
class Manageticket extends Component {
    constructor() {
        super();
        this.state = { 
        };
      }
    componentWillReceiveProps(nextProps) { 
        if (nextProps.errors) {
          this.setState({
            errors: nextProps.errors
          });
        }
      }
    componentDidMount() { 
        if (this.props.auth.isAuthenticated == false) {
        this.props.history.push("/login");
        }
    }
    render() {
        return (
            <div>
                <div className="wrap_vwendor">
                    <Sidebar history={this.props.history} />

                    <div className="right_vendor">
                        <div className="dropmenu_sidebar">
                            <div className="menusidebar">
                                <button className="dropbtnzsidebar"><i className='fas fa-list'></i></button>
                                <div className="dropdown-contentside">
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
                            <Logout history={this.props.history} />

                            <input className="man_tickets" type="search" placeholder="Search Ticket" name="" id="" />
                            <Link to='/viewedit_ticket'>
                                <button className="mantik_btnv"><i className="fa fa-plus-circle adicon_tik"></i>Add Ticket</button>
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