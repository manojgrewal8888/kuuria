import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Sidebar from "./Sidebar";
import Hamburgerone from "./ham1";
import Hamburgertwo from "./hemtwo";
import axios from "axios";
const moment = require('moment');
class Manageevent extends Component {
    constructor() {
        super();
        this.state = {
            events: [],
            showloader: true
        };
    }
    componentWillReceiveProps(nextProps) {

    }
    async componentDidMount() {
        if (this.props.auth.isAuthenticated == false) {
            this.props.history.push("/login");
        }
        var user_id = {
            id: localStorage.getItem('_id')
        }
        if (user_id) {
            await axios
                .post("/api/users/getevents", user_id)
                .then(res => {
                    if (res) {
                        this.setState({
                            events: res.data,
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

                            {/*  <Logout /> */}
                            <Hamburgerone />
                            <Hamburgertwo />
                            <Link className="Link_reset" to='/create'><button className="modnew_btn">
                                <i className="fa fa-plus icon_modp" ></i>
                                New Event
                            </button></Link>

                            <div className="modser_wrap">
                                <div className="sermod_box">
                                    <input type="search" name="" id="" placeholder='Enter event name' className="modx_ser" />
                                    <i className="fa fa-search icon_serchmodp" ></i>
                                </div>
                                <select className="mod_sel" name="cars" id="cars">
                                    <option value="volvo">Filter By Status</option>
                                    <option value="saab">Active</option>
                                    <option value="mercedes">In-Active</option>
                                </select>
                            </div>
                            <table className="mod table">
                                <tr className="mod_tr">
                                    <th className="mod_th">#</th>
                                    <th className="mod_th">Title</th>
                                    <th className="mod_th">Start Date</th>
                                    <th className="mod_th">End Date</th>
                                    <th className="mod_th">Status</th>
                                    <th className="mod_th">Actions</th>
                                </tr>


                                {this.state.showloader && <tr>
                                    <td colspan='6' className='text-center'><p className="loading">Loading Events</p></td>
                                </tr>}
                                {
                                    Object.entries(this.state.events).map((val, key) => {
                                        var start_date = val[1].start_date != '' ? moment(new Date(val[1].start_date)).format('MMMM Do YYYY') : '';
                                        var end_date = val[1].end_date != '' ? moment(new Date(val[1].end_date)).format('MMMM Do YYYY') : '';
                                        return (
                                            <>
                                                <tr>
                                                    <td className='mod_th2'>{key + 1}</td>
                                                    <td className='mod_th2'>{val[1].eventname ? val[1].eventname : ''}</td>
                                                    <td className='mod_th2'>{start_date ? start_date : ''}</td>
                                                    <td className='mod_th2'>{end_date ? end_date : ''}</td>
                                                    <td className='mod_th2'>
                                                        <input className='check_tog ' type="checkbox" checked={val[1].status && val[1].status == 1 ? 'checked' : ''} id="status" />
                                                    </td>
                                                    <td className='mod_th2 d-flex'>
                                                        <Link className="Link_reset" to='/eventopened'>
                                                            <i className="fa fa-eye icon_datemodp" ></i>
                                                        </Link> &nbsp;&nbsp;
                                                        <Link className="Link_reset" to={{ pathname: `/editevent`, state: { event_id: val[1]._id } }} >
                                                            <i className="fa fa-edit icon_datemodp" ></i>
                                                        </Link>
                                                        <i className="fa fa-trash icon_datemodp" ></i>
                                                    </td>
                                                </tr>
                                            </>
                                        )
                                    }
                                    )
                                }

                            </table>

                        </div>
                    </div>
                </div>

            </div >
        )

    }
}
Manageevent.propTypes = {
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});
export default connect(
    mapStateToProps,
    {}
)(Manageevent);


