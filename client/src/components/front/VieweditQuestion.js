import React, { Component } from "react";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import classnames from "classnames"
class ManageQuestions extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            errors:{},
            event_id:'', 
        };
    } 
    render() {
        const { errors } = this.state;
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

                        <form noValidate onSubmit={this.onSubmit}> 
                            <div className="viewt_wrap">
                                <div className="left_viewt"> 
                                    <p className="left_vt_in">Question</p> 
                                    <p className="left_vt_in">Status</p> 
                                </div>

                                <div className="hori_viewt"></div>

                                <div className="right_viewt">
                                    <p className="left_vt_in">
                                        <textarea className={'ticket_form' +classnames("", { invalid: errors.question })} onChange={this.onChange} type="text" placeholder="Enter Question" name="question" id="" ></textarea>
                                    </p>
                                    <p className="left_vt_in">
                                        <div className="togfree">
                                           <input className={'check_tog '+classnames("", { invalid: errors.status })} onChange={this.onChange} type="checkbox" name="status" id="" />
                                        </div>
                                    </p> 
                                </div>
                            </div>
                            </form>

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