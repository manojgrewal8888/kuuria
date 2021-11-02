import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
class Manageevents extends Component {
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

                            <i className="fa fa-home cus_vicon"></i>


                            <div className="home_vendori2">
                                <i className="fa fa-calendar-check-o cus_vicon2"></i>
                                <span className="home_vender2">Dashboard</span>
                            </div>

                            <i className="fa fa-ticket cus_vicon"></i>
                            <i className="fa fa-money cus_vicon"></i>
                            <i className="fa fa-comment cus_vicon"></i>
                            <i className="fa fa-bar-chart cus_vicon"></i>
                            <i className="fa fa-file-text-o cus_vicon"></i>

                        </div>
                    </div>

                    <div className="right_vendor">
                        <div className="right_subven"> 
                            <button 
                                onClick={this.onLogoutClick}
                                className="logout_ven"
                                >Log out &nbsp;
                                <i className="fa fa-sign-out"></i> 
                            </button> 

                            <h4 className="meve_headin">Manage Questions For Filling Of Nomination</h4>

                            <div className="manage_wrap">
                                <button className="manage_btnv"><i class="fa fa-plus-circle adicon_v"></i>ADD QUESTIONS</button>


                                <div className="wrap_txtman">
                                    <div className="contain_txtmana">
                                        <i class="fa fa-circle circ_vicon"></i>
                                        <p className="txtp_mana">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                    </div>

                                    <div className="contain_txtmana">
                                        <i class="fa fa-circle circ_vicon"></i>
                                        <p className="txtp_mana">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                    </div>

                                    <div className="contain_txtmana">
                                        <i class="fa fa-circle circ_vicon"></i>
                                        <p className="txtp_mana">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                    </div>

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

Manageevents.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };
  const mapStateToProps = state => ({
    auth: state.auth
  });
  export default connect(
    mapStateToProps,
    { logoutUser }
  )(Manageevents);
