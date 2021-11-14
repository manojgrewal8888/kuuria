import React, { Component } from "react";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
class ManageQuestions extends Component {
    constructor() {
        super(); 
        this.state = {
            route: ""
        };
    } 
    render() {
        return (
            <div>
                <div className="wrap_vwendor">
                    <Sidebar history={this.props.history}/>   
                    <div className="right_vendor">
                        <div className="right_subven">
                        <Link className="ven_under back_ic"  to='/manage_questions'> 
                            <div  className="logout_ven1">
                                <i   class="fa fa-arrow-left "></i> Back
                            </div>
                        </Link>
                        <h4 className="meve_headin">Add Question</h4>


                            <div className="viewt_wrap">
                                <div className="left_viewt"> 
                                    <p className="left_vt1">Question</p>
                                    <p className="left_vt1">Status</p> 
                                </div>

                                <div className="hori_viewt"></div>

                                <div className="right_viewt">
                                    <p className="right_vt1">
                                        <textarea className="ticket_form" type="text" placeholder="Enter Event Name" name="eventname" id="" ></textarea>
                                    </p>
                                    <p className="right_vt2">
                                        <input className="ticket_form" type="date" placeholder="Event Start Date" name="" id="" />
                                    </p>
                                    <p className="right_vt3">
                                        <input className="ticket_form" type="time" placeholder="Event Start Time" name="" id="" />
                                    </p> 
                                </div>
                            </div>

                            <button className="save_vte">Save</button>
                        </div>
                    </div>
                </div>
                <p className="bottom_vendash">Made With <i className="fa fa-heart icon_venbottom" ></i> In Trasacco Valley ,Ghana</p>
            </div>
        )
    }
}
ManageQuestions.propTypes = { 
    auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth
});
export default connect(
    mapStateToProps, 
)(ManageQuestions);