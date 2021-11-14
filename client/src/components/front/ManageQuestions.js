import React, { Component } from "react";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Sidebar from "./Sidebar";
import Logout from "./Logout";
import { Link } from "react-router-dom";
class ManageQuestions extends Component {
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser(this.props.history);
      };
    render() {
        const { user } = this.props.auth;
        return (
            <div>
                <div className="wrap_vwendor">
                <Sidebar history={this.props.history}/>  

                    <div className="right_vendor">
                        <div className="right_subven"> 
                        <Logout history={this.props.history}/>

                            <h4 className="meve_headin">Manage Questions For Filling Of Nomination</h4>

                            <div className="manage_wrap">
                                <Link   to='/viewedit_question'> 
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
