import React, { Component } from "react";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Sidebar from "./Sidebar";
import Logout from "./Logout";
import { Link } from "react-router-dom";
class Dashboardmain extends Component {
  constructor() {
    super();
    this.state = { 
    };
  }
componentWillReceiveProps(nextProps) { 
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }
componentDidMount() { 
if (this.props.auth.isAuthenticated == false) {
  this.props.history.push("/login");
}
}
  render() {

    return (
      <div>
        <div className="wrap_vwendor">
          <Sidebar history={this.props.history} />

          <div className="right_vendor">
            <div className="right_subven">
              <Logout history={this.props.history} />


              <div class="dropdown_maindeshb">
                <i className="fa fa-bell bell_main" ></i>
                <div class="dropcontan_maindeshb">
                  <a className="linkforamindesh" href="#"><i className="fa fa-circle circlemain_sdesh" ></i>Link 1</a>
                  <a className="linkforamindesh" href="#"><i className="fa fa-circle circlemain_sdesh" ></i>Link 2</a>
                  <a className="linkforamindesh" href="#"><i className="fa fa-circle circlemain_sdesh" ></i>Link 3</a>
                </div>
              </div>


              <div className="toptymmain">
                <div className="numbertym_main">
                  <div className="onetymmain">
                    <p className="numtym">0</p>
                    <p className="fistoneword">Award Events</p>
                  </div>
                  <div className="onetymmain">
                    <p className="numtym">0</p>
                    <p className="fistoneword">Approved Nominees</p>
                  </div>
                  <div className="onetymmain">
                    <p className="numtym">0</p>
                    <p className="fistoneword">Total Votes</p>
                  </div>
                  <div className="onetymmain">
                    <p className="numtym">0</p>
                    <p className="fistoneword">Tickets Sold</p>
                  </div>
                </div>


                <div className="wordftym_main"> </div>


                <div className="btnwrap_maind">
                  <button className="doublebtn_maind">Nomination Status</button>
                  <button className="doublebtn_maind">Leader Board</button>
                </div>

                <p className="leaderbo_mainhead">LEADER BOARD</p>

                <div className="tablewrapformain">
                  <table className="table_maindeshb">
                    <tr className="table_1strowmainb">
                      <th className="table_1stlinemain">Position</th>
                      <th className="table_1stlinemain">Nominee Name</th>
                      <th className="table_1stlinemain">Number Of Votes</th>
                    </tr>
                    <tr className="table_1strowmainb2">
                      <td className="table_1stlinemain2">1</td>
                      <td className="table_1stlinemain2">Maria Anders</td>
                      <td className="table_1stlinemain2">150</td>
                    </tr>

                    <tr className="table_1strowmainb2">
                      <td className="table_1stlinemain2">1</td>
                      <td className="table_1stlinemain2">Maria Anders</td>
                      <td className="table_1stlinemain2">150</td>
                    </tr>

                    <tr className="table_1strowmainb2">
                      <td className="table_1stlinemain2">1</td>
                      <td className="table_1stlinemain2">Maria Anders</td>
                      <td className="table_1stlinemain2">150</td>
                    </tr>

                    <tr className="table_1strowmainb2">
                      <td className="table_1stlinemain2">1</td>
                      <td className="table_1stlinemain2">Maria Anders</td>
                      <td className="table_1stlinemain2">150</td>
                    </tr>

                    <tr className="table_1strowmainb2">
                      <td className="table_1stlinemain2">1</td>
                      <td className="table_1stlinemain2">Maria Anders</td>
                      <td className="table_1stlinemain2">150</td>
                    </tr>



                  </table>

                  <div className="aligndot_maind">
                    <span className="dot dot_rezmaind" onclick="currentSlide(1)"></span>
                    <span className="dot dot_rezmaind" onclick="currentSlide(2)"></span>
                    <span className="dot dot_rezmaind" onclick="currentSlide(3)"></span>
                  </div>
                </div>
              </div>

            </div>

            
          </div>
         
        </div>

        <p className="foot-slogan">Made With <i className="fa fa-heart heartfoot"></i> In Trasacco Valley, Ghana </p>
      </div>
    )
  }
}
 
Dashboardmain.propTypes = { 
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
  };
  const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
  });
  export default connect(
    mapStateToProps,
    {  }
  )(Dashboardmain);