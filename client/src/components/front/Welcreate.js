import React, { Component } from 'react'
import { Link,withRouter } from "react-router-dom"; 
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addevent } from "../../actions/eventActions";
import classnames from "classnames";
class Create extends Component {
    constructor() {
        super();
        this.state = { 
            eventname:'',
            start_date:'',
            end_date:'',
            timezone:'',
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
        // If logged in and user navigates to Register page, should redirect them to dashboard
     
        if (!this.props.auth.isAuthenticated) {
            this.props.history.push("/login");
        }
        
        /*   axios
        .post("/api/users/getevents", userData)
        .then(res => history.push("/manage_events")) // re-direct to login on successful register
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        ); */
    }


render() {
    const { errors } = this.state;
        return (
            <div>
                <div className="wrap_wcreate">
                    <img src="./img/kuria-new.png" alt="" className="wcreate_img" />

                    <div className="cae_details">
                        <Link className="ven_under back_ic"  to='/manage_events'> 
                            <div  className="logout_ven1">
                                <i   className="fa fa-arrow-left "></i> Back
                            </div>
                        </Link>
                        <p className="cae_head">Create Award Event</p>
                        <form noValidate onSubmit={this.onSubmit}> 
                            <input   onChange={this.onChange}  value={this.state.eventname}  id="eventname"  type="text"  className={'wtitle_input '+classnames("", { invalid: errors.eventname })} placeholder="Title"/> 
                            <span className="red-text12">{errors.eventname}</span>
                            <div className="wrap_span">
                                <span className="cal1"> 
                                    <input className="date_inpx"  onChange={this.onChange}  value={this.state.start_date}  id="start_date"  type="date"  className={'wtitle_input1 '+classnames("", { invalid: errors.start_date })} />
                                </span> 
                                <span className="cal2"> 
                                    <input className="date_inpx" onChange={this.onChange}  value={this.state.end_date}  id="end_date"  type="date"  className={'wtitle_input1 '+classnames("", { invalid: errors.end_date })} /> 
                                </span>
                            </div>  
                                 <span className="red-text12">{errors.start_date} </span>
                                <span className="red-text13">{errors.end_date}</span>
                            <select name="cars" id="cars"  onChange={this.onChange}  value={this.state.timezone}  id="timezone"  type="text"  className={'selector_create '+classnames("", { invalid: errors.timezone })}>
                                <option value="timezone">Timezone</option>
                                <option value="india">Indian</option>
                                <option value="europe">European</option>
                                <option value="aus">Australia</option>
                            </select> 
                            <span className="red-text12">{errors.timezone}</span>
                          <button  type="submit"  className="create_cae link_reset">CREATE</button>
                        </form>
                    </div>

                    
                </div>
            </div>
        )
    }
}

Create.propTypes = {
    addevent: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
  };
  const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
  });
  export default connect(
    mapStateToProps,
    { addevent }
  )(withRouter(Create));