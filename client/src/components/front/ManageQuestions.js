import React, { Component } from "react";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import Sidebar from "./Sidebar";
import Logout from "./Logout";
import { Link } from "react-router-dom";
import axios from "axios";
import Hamburgerone from "./ham1";
import Hamburgertwo from "./hemtwo";
import Extramenu from "./Extramenu";
class ManageQuestions extends Component {
    constructor() {
        super();
        this.state = {
            questions: [],
            showloader: true

        };

    }
    componentWillReceiveProps(nextProps) {

        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }
    async componentDidMount() {
        if (this.props.auth.isAuthenticated == false) {
            this.props.history.push("/login");
        }
        var user_id = {
            user_id: localStorage.getItem('_id')
        }
        if (user_id) {
            await axios
                .post("/api/vendor/get_all_question", user_id)
                .then(res => {
                    if (res) {
                        this.setState({
                            questions: res.data,
                            showloader: false
                        })
                    }

                })
                .catch(err =>
                    this.setState({
                        showloader: false
                    })
                );
        }
    }

    render() {
        const { user } = this.props.auth;
        return (
            <div>
                <div className="wrap_vwendor">
                    <Sidebar history={this.props.history} />

                    <div className="right_vendor">
                    <Extramenu history={this.props.history} />
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
                            <Hamburgerone />
                            <Hamburgertwo />

                            <h4 className="meve_headin">Manage Questions For Filling Of Nomination</h4>

                            <div className="manage_wrap">
                                <Link to='/viewedit_question'>
                                    <button className="manage_btnv"><i className="fa fa-plus-circle adicon_v"></i>Add Question</button>
                                </Link>



                                {this.state.showloader && <>
                                    <div className='ml-3 text-center'><p className="loading">Loading Questions</p></div>
                                </>}
                                {
                                    Object.entries(this.state.questions).map((val, key) => {
                                        return (
                                            <>
                                                <div className="contain_txtmana">
                                                    <i className="fa fa-circle circ_vicon"></i>
                                                    <p className="txtp_mana">{val[1].question ? val[1].question : ''}</p>
                                                    <div className="togfree">
                                                        <input className='check_tog ' type="checkbox" checked={val[1].status && val[1].status == 1 ? 'checked' : ''} value={val[1].status ? val[1].status : 0} id="status" />&nbsp;&nbsp;
                                                        <Link className="Link_reset" to={{ pathname: `/editquestion`, state: { question_id: val[1]._id } }} >
                                                            <i className="fa fa-edit icon_datemodp" ></i>
                                                        </Link>
                                                    </div>
                                                </div>
                                                {/*  <tr> 
                                                    <td>{val[1].question ? val[1].question : ''}</td> 
                                                    <td className='mod_th2'>
                                                        {val[1].status && val[1].status == 1 ? 'Active' :'In-active'}
                                                    </td>
                                                    <td className='mod_th2'>
                                                        <Link className="Link_reset" to='/eventopened'>
                                                            <i className="fa fa-eye icon_datemodp" ></i>
                                                        </Link> &nbsp;&nbsp;
                                                        <Link className="Link_reset" to={{ pathname: `/editevent`, state: { event_id: val[1]._id } }} >
                                                            <i className="fa fa-edit icon_datemodp" ></i>
                                                        </Link>
                                                        <i className="fa fa-trash icon_datemodp" ></i>
                                                    </td>
                                                </tr> */}
                                            </>
                                        )
                                    }
                                    )
                                }

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
    auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth
});
export default connect(
    mapStateToProps,
    {}
)(ManageQuestions);
