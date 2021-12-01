import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Sidebar from "./Sidebar";
import { logoutUser } from "../../actions/authActions";
class Vendordash extends Component {
    /*   onLogoutClick = e => {
          e.preventDefault();
          this.props.logoutUser(this.props.history);
        }; */
    render() {
        const { user } = this.props.auth;
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
                            <h2 className="head_vendor">ALL NOTIFICATIONS</h2>
                            <div className="not_vendor">
                                <div className="msg_box">
                                    <i className="fa fa-check-square-o icon_vendor" ></i>
                                    <details>
                                        <summary className="res_summary" >No notification's yet !!!</summary>
                                        <div className="details-content">
                                            -
                                        </div>
                                    </details>
                                </div>

                                {/* <div className="msg_box">
                                    <i className="fa fa-check-square-o icon_vendor" ></i>
                                    <details>
                                        <summary className="res_summary" >1 MSG From Kuuria</summary>
                                        <div className="details-content">
                                            Hello ,Organiosation 1 this is to inform you that your events are deleted due to frauds
                                        </div>
                                    </details>
                                </div>

                                <div className="msg_box">
                                    <i className="fa fa-check-square-o icon_vendor" ></i>
                                    <details>
                                        <summary className="res_summary" >1 MSG From Kuuria</summary>
                                        <div className="details-content">
                                            Hello ,Organiosation 1 this is to inform you that your events are deleted due to frauds
                                        </div>
                                    </details>
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

Vendordash.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth
});
export default connect(
    mapStateToProps,
    { logoutUser }
)(Vendordash);
