import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Sidebar from "./Sidebar";
import Logout from "./Logout";
import Hamburgerone from './ham1';
import Hamburgertwo from './hemtwo';

class Massagingven extends Component {
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
                            <Logout />
                            <Hamburgerone />
                            <Hamburgertwo />

                            <h2 className="msg_heading">Messages <span className="circle_msg">4</span></h2>
                            <div className="wrtap_msgdummy">
                                <div className="left_submsg">
                                    <p className="all_msgz">All Conversation</p>

                                    <div className="wrapmsg_ser">
                                        <input className="msg_sear" type="search" name="" id="" />
                                        <i className="fa fa-search cus_msgi"></i>
                                    </div>

                                    <div className="ku_msg">
                                        <i className="fa fa-user-circle-o cus_msgiu"></i>
                                        <img src="./img/kuria-new.png" className="user_logim" alt="" srcset="" />
                                    </div>

                                    <div className="subku_msg">
                                        <i className="fa fa-user cus_msgiu2"></i>
                                        <p className="subkuria_msg">Nominee 3, Nominee 4+3 others</p>
                                    </div>
                                </div>
                                <div className="right_submsg">
                                    {/* <Scrollbars className="cus_slider">
                                        
                                    </Scrollbars> */}

                                    <div className="section_scr">
                                        <div className="leftmsg_txt">
                                            <p className="lefttxtmsg">Whats the point in using Lorem Ipsum</p>

                                        </div>





                                        <div className="rightmsg_txt">
                                            <p className="righttxtmsg">Same here ,bro</p>
                                        </div>
                                    </div>
                                    <div className="wrap_sendmsg">
                                        <input type="text" placeholder="Enter Your Massage" className="send_msgtx" name="" id="" />



                                        <i className="fa fa-send cus_send_ic"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>






        )

    }
}

Massagingven.propTypes = {
    auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth
});
export default connect(
    mapStateToProps,
    {}
)(Massagingven);


















