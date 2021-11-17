import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Sidebar from "./Sidebar";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions"; 
import PropTypes from "prop-types";
import { create_ticket } from "../../actions/eventActions";
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
            number:'',
            errors:{}
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
            const ticket = {
                name: this.state.name,
                date: this.state.date,
                time: this.state.time,
                price_votes: this.state.price_votes, 
                venue: this.state.venue, 
                number: this.state.number, 
                
            };
            this.props.create_ticket(ticket, this.props.history); 
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
        const { errors } = this.state;
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

                        <form noValidate onSubmit={this.onSubmit}> 
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
                                        <input placeholder="Enter Ticket Name"  onChange={this.onChange}  value={this.state.name}  id="name"  type="text"  className={'ticket_form '+classnames("", { invalid: errors.name })}/>
                                    </p>
                                    <span className="red-text12">{errors.name} </span>
                                    <p className="right_vt2">
                                        <input   placeholder="Event Start Date" onChange={this.onChange}  value={this.state.date}  id="date"  type="text"  className={'ticket_form '+classnames("", { invalid: errors.date })} />
                                    </p>
                                    <p className="right_vt3">
                                        <input   placeholder="Event Start Time" onChange={this.onChange}  value={this.state.time}  id="time"  type="text"  className={'ticket_form '+classnames("", { invalid: errors.time })}/>
                                    </p>
                                    <select   id="" onChange={this.onChange}  value={this.state.price_votes}  id="price_votes"     className={'right_vt4 '+classnames("", { invalid: errors.price_votes })} placeholder="Choose Price and Votes">
                                        <option value="">Choose Price and Number of Votes</option>
                                        <option value="">99$ 4 votes</option>
                                        <option value="">99$ 4 votes</option>
                                        <option value="">99$ 4 votes</option>
                                    </select>
                                    <p className="right_vt5"> 
                                        <input  placeholder="Event Venue"  onChange={this.onChange}  value={this.state.venue}  id="venue"  type="text"  className={'ticket_form '+classnames("", { invalid: errors.venue })} />
                                        </p>
                                    <p className="right_vt6">
                                        <input   onChange={this.onChange}  value={this.state.number}  id="number"   className={'ticket_form '+classnames("", { invalid: errors.number })} type="text" placeholder="Event Number" name="number"  />
                                    </p>
                                </div>
                            </div>

                            <button type='submit' className="save_vte">Save</button>
                            </form>
                        </div>
                    </div>
                </div>
                <p className="bottom_vendash">Made With <i className="fa fa-heart icon_venbottom" ></i> In Trasacco Valley ,Ghana</p>
            </div>
        )
    }
}
Vieweditticket.propTypes = {
    create_ticket: PropTypes.func.isRequired,
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth
});
export default connect(
    mapStateToProps,
    { logoutUser,create_ticket }
)(Vieweditticket);