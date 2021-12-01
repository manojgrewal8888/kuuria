import React, { Component } from "react";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Sidebar from "./Sidebar";
import Logout from "./Logout";
import { Link } from "react-router-dom";
class ManageQuestions extends Component {
<<<<<<< HEAD
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser(this.props.history);
    };
=======
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
>>>>>>> a6f3d43c918ebf68e9aac981faecf822bd1b76d4
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
                            <Logout history={this.props.history} />

                            <h4 className="meve_headin">Manage Questions For Filling Of Nomination</h4>

                            <div className="manage_wrap">
                                <Link to='/viewedit_question'>
                                    <button className="manage_btnv"><i class="fa fa-plus-circle adicon_v"></i>Add Question</button>
                                </Link>


                                <div className="wrap_txtman">

                                    <div className="contain_txtmana">
                                        <i class="fa fa-circle circ_vicon"></i>
                                        <p className="txtp_mana">No question's yet !!!</p>
                                    </div>

                                    {/*  <div className="contain_txtmana">
                                        <i class="fa fa-circle circ_vicon"></i>
                                        <p className="txtp_mana">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                          <div className="togfree">
                                           <input className="check_tog" type="checkbox" name="" id="" />
                                       </div>
                                    </div>

                                    <div className="contain_txtmana">
                                        <i class="fa fa-circle circ_vicon"></i>
                                        <p className="txtp_mana">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                          <div className="togfree">
                                           <input className="check_tog" type="checkbox" name="" id="" />
                                       </div>
                                    </div> */}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="bottom_vendash">Made With <i className="fa fa-heart icon_venbottom" ></i> In Trasacco Valley ,Ghana</p>
            </div>

        )
    }
}

<<<<<<< HEAD
ManageQuestions.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth
});
export default connect(
    mapStateToProps,
    { logoutUser }
)(ManageQuestions);
=======
    ManageQuestions.propTypes = { 
        auth: PropTypes.object.isRequired
    };
    const mapStateToProps = state => ({
        auth: state.auth
    });
    export default connect(
        mapStateToProps,
        {   }
    )(ManageQuestions);
>>>>>>> a6f3d43c918ebf68e9aac981faecf822bd1b76d4
