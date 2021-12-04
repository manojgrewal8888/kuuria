import React, { Component } from "react";

import PropTypes from "prop-types";
import { connect } from "react-redux"; 
import Sidebar from "./Sidebar";
import Logout from "./Logout";
import { Link } from "react-router-dom";
import axios from "axios";
class Dashboardmain extends Component {
  constructor() {
    super();
    this.state = { 
      countevents: 0,
      showloader: true,
      showtab: 'leaders'
    };
  }
componentWillReceiveProps(nextProps) { 
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }
  async componentDidMount() { 
    if (this.props.auth.isAuthenticated == false) {
        this.props.history.push("/login");
    }
    var user_id = {
        id: localStorage.getItem('_id')
    }
    if (user_id) {
        await axios
            .post("/api/users/getevents", user_id)
            .then(res => {
                if (res) {
                    this.setState({
                        countevents: res.data.length,
                        showloader: false
                    })
                }

            })
            .catch(err =>
                this.setState({
                    showloader: false
                })
            );
    }
}
openTab = e => {
  if(this.state.showtab == 'leaders'){
    this.setState({
      showtab: 'nominee'
    });
  }else{
    this.setState({
      showtab: 'leaders'
    });
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


              <div className="dropdown_maindeshb">
                <i className="fa fa-bell bell_main" ></i>
                <div className="dropcontan_maindeshb">
                  <a className="linkforamindesh" href="#"><i className="fa fa-circle circlemain_sdesh" ></i>Link 1</a>
                  <a className="linkforamindesh" href="#"><i className="fa fa-circle circlemain_sdesh" ></i>Link 2</a>
                  <a className="linkforamindesh" href="#"><i className="fa fa-circle circlemain_sdesh" ></i>Link 3</a>
                </div>
              </div>


              <div className="toptymmain">
                <div className="numbertym_main">
                  <div className="onetymmain">
                    <p className="numtym">{this.state.countevents}</p>
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
                  <button className={this.state.showtab == 'nominee' ? 'active doublebtn_maind':'doublebtn_maind'}  onClick={this.openTab}>Nomination Status</button>
                  <button className={this.state.showtab == 'leaders' ? 'active doublebtn_maind':'doublebtn_maind'} onClick={this.openTab}>Leader Board</button>
                </div>

                {(this.state.showtab == 'leaders') && <>
                  <p className="leaderbo_mainhead ">LEADER BOARD</p>
                  <div className="tablewrapformain">
                    <table className="table_maindeshb table">
                      <tr className="table_1strowmainb">
                        <th className="table_1stlinemain">Position</th>
                        <th className="table_1stlinemain">Nominee Name</th>
                        <th className="table_1stlinemain">Number Of Votes</th>
                      </tr>
                      <tr >
                        <td colspan='3' className='text-center'>No data yet !!!</td>
                      </tr>  
                    </table> 
                    <div className="aligndot_maind">
                      <span className="dot dot_rezmaind" onclick="currentSlide(1)"></span>
                      <span className="dot dot_rezmaind" onclick="currentSlide(2)"></span>
                      <span className="dot dot_rezmaind" onclick="currentSlide(3)"></span>
                    </div>
                  </div> </>
                  }
                {(this.state.showtab == 'nominee') && <>
                  <p className="leaderbo_mainhead ">Nominee's</p>
                  <div className="tablewrapformain">
                    <table className="table_maindeshb table">
                      <tr className="table_1strowmainb"> 
                        <th className="table_1stlinemain">Nominee Name</th>
                        <th className="table_1stlinemain">Category</th>
                        <th className="table_1stlinemain">Action</th>
                        <th className="table_1stlinemain">Code</th>
                        <th className="table_1stlinemain">Status</th>
                      </tr>
                      <tr >
                        <td colspan='5' className='text-center'>No data yet !!!</td>
                      </tr>  
                    </table> 
                    <div className="aligndot_maind">
                      <span className="dot dot_rezmaind" onclick="currentSlide(1)"></span>
                      <span className="dot dot_rezmaind" onclick="currentSlide(2)"></span>
                      <span className="dot dot_rezmaind" onclick="currentSlide(3)"></span>
                    </div>
                  </div> </>
                  }

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