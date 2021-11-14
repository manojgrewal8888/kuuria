import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Sidebar from "./Sidebar"; 
import Logout from "./Logout"; 
class Manageevent extends Component {

    render() {
        return (
            <div>
                <div className="wrap_vwendor">
                    <Sidebar history={this.props.history} />

                    <div className="right_vendor">
                        <div className="right_subven">
                           <Logout />

                            <Link className="Link_reset" to='/eventopened'><button className="modnew_btn">
                                <i className="fa fa-plus icon_modp" ></i>
                                NEW EVENT
                            </button></Link>

                            <div className="modser_wrap">
                                <div className="sermod_box">
                                    <input type="search" name="" id="" className="modx_ser" />
                                    <i className="fa fa-search icon_serchmodp" ></i>
                                </div>
                                <select className="mod_sel" name="cars" id="cars">
                                    <option value="volvo">Filter By Status</option>
                                    <option value="saab">Saab</option>
                                    <option value="mercedes">Mercedes</option>
                                    <option value="audi">Audi</option>
                                </select>
                            </div>

                            <table className="mod table">
                                <tr className="mod_tr">
                                    <th className="mod_th">Title</th>
                                    <th className="mod_th">Start Date</th>
                                    <th className="mod_th">End Date</th>
                                    <th className="mod_th">status</th>
                                </tr>
                                <tr className="mod_tr2">
                                    <td className="mod_th">
                                        UMB Ghana Tertiary Awards 
                                    </td>
                                    <td className="mod_th">26/09/21, 10 AM</td>
                                    <td className="mod_th">27/10/21, 10 AM</td>
                                    <td className="mod_th2">Active</td>
                                   {/*  <span className="del_mode">Action <i className="fa fa-trash icon_datemodp" >
                                        </i>
                                        <i className="fa fa-eye icon_datemodp" ></i></span> */}
                                </tr>
                             
                            </table>

                        </div>
                    </div>
                </div>

            </div>
        )

    }
}

export default Manageevent;


