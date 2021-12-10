import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Sidebar from "./Sidebar";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions"; 
import PropTypes from "prop-types";
import { create_ticket,editTicket } from "../../actions/ManagerActions";
import classnames from "classnames";
import axios from "axios";
import Extramenu from "./Extramenu";
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
            if(this.props.location.state && this.props.location.state.ticket_id !=''){ 
                var ticket = {
                    user_id: user_id,
                    name: this.state.name,
                    date: this.state.date,
                    time: this.state.time,
                    price_votes: this.state.price_votes, 
                    venue: this.state.venue, 
                    number: this.state.number,  
                    ticket_id:this.props.location.state.ticket_id
                };  
                this.props.editTicket(ticket, this.props.history); 
            }else{
                const ticket = {
                    user_id: user_id,
                    name: this.state.name,
                    date: this.state.date,
                    time: this.state.time,
                    price_votes: this.state.price_votes, 
                    venue: this.state.venue, 
                    number: this.state.number,  
                }; 
                this.props.create_ticket(ticket, this.props.history); 
            }
            
        };
        componentDidMount() { 
        
            if(this.props.location.state && this.props.location.state.ticket_id != ''){  
                axios
                .post("/api/vendor/get_ticket", {
                    ticket_id: this.props.location.state.ticket_id
                })
                .then((response) => {
                    if (response.status = 200) { 
                        this.setState({  
                            name: response.data.name,
                            date: response.data.date,
                            time: response.data.time,
                            price_votes: response.data.price_votes, 
                            venue: response.data.venue, 
                            number: response.data.number, 
                        }); 
                    }
                });
            }    
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
                    <Extramenu history={this.props.history} />
                        <div className="right_subven">
                        <Link className="ven_under back_ic"  to='/manage_ticket'> 
                            <div  className="logout_ven1">
                                <i   className="fa fa-arrow-left "></i> Back
                            </div>
                        </Link>
                        <h4 className="meve_headin">Add Ticket</h4>

                        <form noValidate onSubmit={this.onSubmit}> 
                            <div className="viewt_wrap">
                                <div className="left_viewt">
                                    <p className="left_vt1">Ticket Name</p>
                                    <p className="left_vt1">Date</p>
                                    <p className="left_vt1">Time</p>
                                    <p className="left_vt1">Price</p>
                                    <p className="left_vt1">Venue</p>
                                    <p className="left_vt1">Number</p>
                                </div>

                                <div className="hori_viewt"></div>
 
                                <div className="right_viewt">
                                    <p className="right_vt1">
                                        <input placeholder="Enter Ticket Name"  onChange={this.onChange}  value={this.state.name}  id="name"  type="text"  className={'ticket_form '+classnames("", { invalid: errors.name })} name='name'/>
                                    <span className="red-text12">{errors.name} </span>
                                    </p>
                                    <p className="right_vt2">
                                        <input   placeholder="Event Start Date" onChange={this.onChange}  value={this.state.date}  id="date"  type="date"  className={'ticket_form '+classnames("", { invalid: errors.date })} name='date'/>
                                        <span className="red-text12">{errors.date} </span>
                                    </p>
                                    <p className="right_vt3">
                                        <input   placeholder="Event Start Time" onChange={this.onChange}  value={this.state.time}  name='time'  id="time"  type="time"  className={'ticket_form '+classnames("", { invalid: errors.time })}/>
                                        <span className="red-text12">{errors.time} </span>
                                    </p>
                                    <select   id="" onChange={this.onChange}  value={this.state.price_votes}  id="price_votes"   name='price_votes'   className={'right_vt4 '+classnames("", { invalid: errors.price_votes })} placeholder="Choose Price">
                                        <option value="">Choose Price</option>
                                        <option value="10">10$</option>
                                        <option value="20">20$</option>
                                        <option value="30">30$</option>
                                        <option value="40">40$</option>
                                        <option value="50">50$</option>
                                        <option value="60">60$</option>
                                        <option value="70">70$</option>
                                    </select>
                                    <p className="right_vt5"> 
                                        <input  placeholder="Event Venue"  onChange={this.onChange}  value={this.state.venue}  id="venue" name='venue'  type="text"  className={'ticket_form '+classnames("", { invalid: errors.venue })} />
                                        </p>
                                    <p className="right_vt6">
                                        <input   onChange={this.onChange}  value={this.state.number}  id="number"  name='number'  className={'ticket_form '+classnames("", { invalid: errors.number })} type="text" placeholder="Event Number" name="number"  />
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
    editTicket: PropTypes.func.isRequired, 
    auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth
});
export default connect(
    mapStateToProps,
    { editTicket,create_ticket }
)(Vieweditticket);