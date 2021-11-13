import React, { Component } from "react";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions"; 
import { Link } from "react-router-dom";
class Sidebar extends Component {
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser(this.props.history);
      };
    render() {
        const { user } = this.props.auth;
        return (
                <>
                <div className="left_vendor">
                    <div className="left_subven">
                    <Link className="linx_ven" exact to="/"><img src="./img/kuria-new.png" alt="" className="res_venlogo" /></Link>
                    {/* <div className="home_vendor_">
                        <span className="home_vender2"><Link className="linx_ven" to="/vendor_dash"> <i className="fa fa-home"></i>  Dashboard </Link> </span> 
                        </div>  */}
                        <Link className="" exact to='/vendor_dashboard'>
                            <div class='custom_btn1'>
                                <i className="fa fa-home cus_vicon"></i>
                                <span className='menu_it_em'>Dashboard</span>
                            </div>
                        </Link> 
                        <Link className="linx_ven" exact to='/manage_events'> 
                            <div class='custom_btn1'>
                                <i className="fa fa-calendar-check-o cus_vicon"></i>
                                <span className='menu_it_em'>Manage Events</span>
                            </div>
                        </Link> 

                    {/* <div className="home_vendori3">
                        <button className="">
                        <i className="fa fa-ticket cus_vicon3"></i>
                       MANAGE TICKET
                        </button> 
                    </div> */}

                    <Link className="linx_ven" exact to="/"><i className="fa fa-money cus_vicon"></i></Link>
                    <Link className="linx_ven" exact to="/"><i className="fa fa-comment cus_vicon"></i></Link>
                    <Link className="linx_ven" exact to="/"><i className="fa fa-bar-chart cus_vicon"></i></Link>
                    <Link className="linx_ven" exact to="/"><i className="fa fa-file-text-o cus_vicon"></i></Link>
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