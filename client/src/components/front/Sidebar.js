import React, { Component } from "react";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions"; 
import { Link } from "react-router-dom"; 
class Sidebar extends Component {
    constructor() {
        super(); 
        this.state = {
            route: ""
        };
    }
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser(this.props.history);
    };

    componentDidMount(){
        if(this.props.history.location.pathname){
            this.setState({
                route: this.props.history.location.pathname
            });
        }
    }
    
    render() {  
        const { user } = this.props.auth;
        
        return (
            <>
                <div className="left_vendor">
                    <div className="left_subven">
                    <Link className="linx_ven" to="/"><img src="./img/kuria-new.png" alt="" className="res_venlogo" /></Link> 
                        <Link  to='/dashboard'>
                            <div className={this.state.route == '/dashboard' ? 'custom_btn1' : 'custom_btn0' }>
                                <i className="fa fa-home cus_vicon"></i>
                                <span className='menu_it_em1'>Dashboard</span>
                            </div>
                        </Link> 
                        <Link   to='/manage_events'> 
                            <div className={this.state.route == '/manage_events' ? 'custom_btn1' : 'custom_btn0' }>
                                <i className="fa fa-calendar-check-o cus_vicon"></i>
                                <span className='menu_it_em1'>Manage Events</span>
                            </div>
                        </Link> 
                        <Link   to='/manage_ticket'> 
                            <div className={this.state.route == '/manage_ticket' ? 'custom_btn1' : 'custom_btn0' }>
                                <i className="fa fa-ticket cus_vicon"></i>
                                <span className='menu_it_em1' > MANAGE TICKET</span>
                            </div>
                        </Link>  
                        <Link   to='/revenue'> 
                            <div className={this.state.route == '/revenue' ? 'custom_btn1' : 'custom_btn0' }>
                                <i className="fa fa-money cus_vicon"></i>
                                <span className='menu_it_em1' > Payments</span>
                            </div>
                        </Link>  
                        <Link   to='/comments'> 
                            <div className={this.state.route == '/comments' ? 'custom_btn1' : 'custom_btn0' }>
                                <i className="fa fa-comment cus_vicon"></i>
                                <span className='menu_it_em1' > Comments</span>
                            </div>
                        </Link>  
                        <Link  to='/verification'> 
                            <div className={this.state.route == '/verification' ? 'custom_btn1' : 'custom_btn0' }>
                                <i className="fa fa-bar-chart cus_vicon"></i>
                                <span className='menu_it_em1' > Verification</span>
                            </div>
                        </Link>  
                        <Link   to='/forms'> 
                            <div className={this.state.route == '/forms' ? 'custom_btn1' : 'custom_btn0' }>
                                <i className="fa fa-file-text-o cus_vicon"></i>
                                <span className='menu_it_em1' >Nomination Form</span>
                            </div>
                        </Link>  
   
                        <button
                            style={{
                                width: "150px",
                                borderRadius: "3px",
                                letterSpacing: "1.5px",
                                marginTop: "1rem"
                            }}
                            onClick={this.onLogoutClick}
                            className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                        >Logout &nbsp;
                            <i className="fa fa-sign-out"></i>
                        </button>
                    </div>
                </div>
            </>
        )
    }
}
Sidebar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth
});
export default connect(
    mapStateToProps,
    { logoutUser }
)(Sidebar);