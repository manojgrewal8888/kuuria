import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
class Vendordash extends Component {
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser(this.props.history);
      };
    render() {
        const { user } = this.props.auth;
        return (
            <div>
                <div className="wrap_vwendor">
                    <div className="left_vendor">
                        <div className="left_subven">
                            <img src="./img/kuria-new.png" alt="" className="res_venlogo" />
                               <div className="home_vendori">
                                <i className="fa fa-home cus_vicon1"></i>
                                <span className="home_vender">Dashboard</span>
                                </div>
                                
                                <i className="fa fa-calendar-check-o cus_vicon"></i>
                                <i className="fa fa-ticket cus_vicon"></i>
                                <i className="fa fa-money cus_vicon"></i>
                                <i className="fa fa-comment cus_vicon"></i>
                                <i className="fa fa-bar-chart cus_vicon"></i>
                                <i className="fa fa-file-text-o cus_vicon"></i>
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

                    <div className="right_vendor">
                        <div className="right_subven">
                            <h2 className="head_vendor">ALL NOTIFICATIONS</h2>
                            <div className="not_vendor">
                                <div className="msg_box">
                                    <i className="fa fa-check-square-o icon_vendor" ></i>
                                    <details>
                                        <summary className="res_summary" >1 MSG From Kuuria</summary>
                                        <div className="details-content">
                                            Hello ,Organiosation 1 this is to inform you that your events are deleted due to frauds
                                        </div>
                                    </details>
                                </div>

                                <div className="msg_box">
                                    <i className="fa fa-check-square-o icon_vendor" ></i>
                                    <details>
                                        <summary className="res_summary" >1 MSG From Kuuria</summary>
                                        <div className="details-content">
                                            Hello ,Organiosation 1 this is to inform you that your events are deleted due to frauds
                                        </div>
                                    </details>
                                </div>

                                <div className="msg_box">
                                    <i className="fa fa-check-square-o icon_vendor" ></i>
                                    <details>
                                        <summary className="res_summary" >1 MSG From Kuuria</summary>
                                        <div className="details-content">
                                            Hello ,Organiosation 1 this is to inform you that your events are deleted due to frauds
                                        </div>
                                    </details>
                                </div>


                            </div>
                        </div>

                    </div>
                </div>
                <p className="bottom_vendash">Made With <i className="fa fa-heart icon_venbottom" ></i> In Trasacco Valley ,Ghana</p>
            </div>
        )
    }
}

Vendordash.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };
  const mapStateToProps = state => ({
    auth: state.auth
  });
  export default connect(
    mapStateToProps,
    { logoutUser }
  )(Vendordash);
