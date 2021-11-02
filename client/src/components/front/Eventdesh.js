import React, { Component } from 'react' 
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
class Eventdesh extends Component {
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser(this.props.history);
      };
    render() {
        return (
            <div>
            <div className="wrap_vwendor">
                <div className="left_vendor">
                    <div className="left_subven">
                        <img src="./img/kuria-new.png" alt="" className="res_venlogo" />
                        <Link to='/dashboard' className='plus_icon'><div className="home_vendori">
                            <i className="fa fa-home cus_vicon1"></i>
                           <span className="home_vender">Dashboard</span>
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

                <div className="right_vendor">
                    <div className="right_subven">
                         <Link to='/welcome' className='plus_icon'> <i className="fa fa-plus"></i> New Award Event </Link> 
                        <h2 className="head_vendor">Events</h2>
                        <div className="not_vendor">
                            <table className='table table-stipped'>
                                <tr>
                                <th>
                                    Title
                                </th>
                                <th>
                                    Start Date
                                </th>
                                <th>
                                    End Date
                                </th>
                                <th>
                                    Status
                                </th>
                                </tr>
                                <tr>
                                <td>
                                    test Title
                                </td>
                                <td>
                                    23-3-2020
                                </td>
                                <td>
                                    23-3-2020
                                </td>
                                <td>
                                    Active
                                </td>
                                </tr>
                            </table>

                        </div>
                    </div>

                </div>
            </div>
            <p className="bottom_vendash">Made With <i className="fa fa-heart icon_venbottom" ></i> In Trasacco Valley ,Ghana</p>
        </div>
        )
    }
}

Eventdesh.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };
  const mapStateToProps = state => ({
    auth: state.auth
  });
  export default connect(
    mapStateToProps,
    { logoutUser }
  )(Eventdesh);

