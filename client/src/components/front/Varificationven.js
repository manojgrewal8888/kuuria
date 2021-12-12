import React, { Component } from "react";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Sidebar from "./Sidebar";
import Logout from "./Logout";
import { Link } from "react-router-dom";
import Hamburgerone from "./ham1";
import Hamburgertwo from "./hemtwo";
import Extramenu from "./Extramenu";
class Varificationven extends Component {
    constructor() {
        super();
        this.state = {
            approved:false
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
    showEvent = e => { 
            this.setState({
                approved: false
            }); 
    }
    showEvent2 = e => { 
            this.setState({
                approved: true
            }); 
    }
    render() {

        return (
            <div>
                <div className="wrap_vwendor">
                    <Sidebar history={this.props.history} />


                    <div className="right_vendor">
                    <Extramenu history={this.props.history} />
                      {/*   <div className="dropmenu_sidebar">
                            <div className="menusidebar">
                                <button className="dropbtnzsidebar">MENU</button>
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

                        </div> */}
                        <div className="right_subven">
                         {/*    <Logout history={this.props.history} /> */}
                         <div className='d-flex'>
                            <Hamburgerone />
                            <Hamburgertwo />
                        </div>

                            <div className="btnwrapvarv">
                                <div className='link_resetvar'  onClick={this.showEvent2}><button  className={this.state.approved ? 'venverbtn active' :'venverbtn'} >Approved Events</button></div>
                                <div className='link_resetvar' onClick={this.showEvent}><button className={!this.state.approved ? 'venverbtn active' :'venverbtn'}>Pending Events</button></div>

                            </div>
                        {this.state.approved && <>
                            <div className="even1_var">
                                <p className="ev1_vendorvar">Event 1</p>
                                <p className="evvar_progress">Approved Events</p>

                                <div className="prog_var">
                                    <progress className="progres_varven1" value="7000" max="10000">70%</progress>
                                </div>
                            </div>

                            <div className="even1_var">
                                <p className="ev1_vendorvar">Event 2</p>
                                <p className="evvar_progress">Approved Events</p>

                                <div className="prog_var">
                                    <progress className="progres_varven1" value="3000" max="10000">30%</progress>
                                </div>
                            </div></>
                            }
                        {!this.state.approved && <>
                            <div className="even1_var">
                                <p className="ev1_vendorvar">Event 3</p>
                                <p className="evvar_progress">Verification In Progress</p>

                                <div className="prog_var">
                                    <progress className="progres_varven1" value="7000" max="10000">70%</progress>
                                </div>
                            </div>

                            <div className="even1_var">
                                <p className="ev1_vendorvar">Event </p>
                                <p className="evvar_progress">Verification In Progress</p>

                                <div className="prog_var">
                                    <progress className="progres_varven1" value="3000" max="10000">30%</progress>
                                </div>
                            </div></>
                            }
                        </div>
                    </div>

                </div>
                <p className="foot-slogan">Made With <i className="fa fa-heart heartfoot"></i> In Trasacco Valley, Ghana </p>
            </div>
        )
    }
}

Varificationven.propTypes = {
    auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth
});
export default connect(
    mapStateToProps,
    {}
)(Varificationven);