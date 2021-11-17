import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Sidebar from "./Sidebar";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions"; 
import PropTypes from "prop-types";
import { addevent } from "../../actions/eventActions";
import classnames from "classnames";
class Vieweditticket extends Component {
    constructor() {
        super(); 
        this.state = {
            route: "",
            name: '',
            date: '',
            time: '',
            price_votes:'',
            venue:'',
            number:''
        };
    }
        componentWillReceiveProps(nextProps) {
            if (nextProps.errors) {
                this.setState({
                    errors: nextProps.errors
                });
            }
        }
        onChange = e => {
            this.setState({ [e.target.id]: e.target.value });
        };
        onSubmit = e => {
            var user_id = localStorage.getItem('_id'); 
            e.preventDefault();
            const event = {
                eventname: this.state.eventname,
                start_date: this.state.start_date,
                end_date: this.state.end_date,
                timezone: this.state.timezone, 
                user_id: user_id, 
            };
            this.props.addevent(event, this.props.history); 
        };
        componentDidMount() { 
        
           /*  if(this.props.location.state.event_id){  
                axios
                .post("/api/user/getevent", {
                    id: this.props.location.state.event_id
                })
                .then((response) => {
                    if (response.status = 200) {
                        this.setState({ editdata: response.data}); 
                    }
                });
            }  */   
            if (!this.props.auth.isAuthenticated) {
                this.props.history.push("/login");
            }
            
        }
     
    render() {
        return (
            <div>
                <div className="wrap_vwendor">
                    <Sidebar history={this.props.history}/>   
                    <div className="right_vendor">
                        <div className="right_subven">
                        <Link className="ven_under back_ic"  to='/manage_ticket'> 
                            <div  className="logout_ven1">
                                <i   class="fa fa-arrow-left "></i> Back
                            </div>
                        </Link>
                        <h4 className="meve_headin">Add Ticket</h4>


                            <div className="viewt_wrap">
                                <div className="left_viewt">
                                    <p className="left_vt1">Ticket Name</p>
                                    <p className="left_vt1">Date</p>
                                    <p className="left_vt1">Time</p>
                                    <p className="left_vt1">Price & Votes</p>
                                    <p className="left_vt1">Venue</p>
                                    <p className="left_vt1">Number</p>
                                </div>

                                <div className="hori_viewt"></div>

                                <div className="right_viewt">
                                    <p className="right_vt1">
                                        <input className="ticket_form" type="text" placeholder="Enter Event Name" name="eventname" id="" />
                                    </p>
                                    <p className="right_vt2">
                                        <input className="ticket_form" type="date" placeholder="Event Start Date" name="" id="" />
                                    </p>
                                    <p className="right_vt3">
                                        <input className="ticket_form" type="time" placeholder="Event Start Time" name="" id="" />
                                    </p>
                                    <select className="right_vt4" name="" id="" placeholder="Choose Price and Votes">
                                        <option value="">Choose Price and Number of Votes</option>
                                        <option value="">99$ 4 votes</option>
                                        <option value="">99$ 4 votes</option>
                                        <option value="">99$ 4 votes</option>
                                    </select>
                                    <p className="right_vt5"> 
                                        <input className="ticket_form" type="date" placeholder="Event Venue" name="" id="" />
                                        </p>
                                    <p className="right_vt6">
                                        <input className="ticket_form" type="text" placeholder="Event Number" name="" id="" />
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
Vieweditticket.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth
});
export default connect(
    mapStateToProps,
    { logoutUser }
)(Vieweditticket);