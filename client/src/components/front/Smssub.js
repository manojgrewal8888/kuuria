import React, { PureComponent } from 'react';
import { ResponsiveContainer, PieChart, Cell, Pie, Legend } from 'recharts';
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import axios from "axios";
import Extramenu from './Extramenu';


class Smssub extends PureComponent {
    render() {
        return (
            <div>

                <div className="wrap_vwendor">
                    <Sidebar history={this.props.history} />



                    <div className="right_home1">

                        <Extramenu history={this.props.history} />

                        <div className="right_gen">
                            <div className="mtsmssub">
                                <p className="comtxt">COMPOSE MASSAGE</p>

                                <p className="subcomtxt">Recepient Number (Multiple numbers seperated with a comma)</p>

                                <textarea id="" className="text_comt1" name="" rows="4" cols="50">
                                </textarea>

                                <button className="loadcon"><i className="fa fa-plus-circle ecat_iconnw"></i>LOAD CONTACTS</button>

                                <p className="sen_comtxt">Sender (Created sendere IDs only show on approval)</p>

                                <select className="slect_comtxt" name="" id="">
                                    <option className="opt_newsm" value="">Admin 1</option>
                                    <option className="opt_newsm" value="">Admin 2</option>
                                    <option className="opt_newsm" value="">Admin 3</option>
                                    <option className="opt_newsm" value="">Admin 4</option>
                                </select>

                                <button className="loadcon"><i className="fa fa-plus-circle ecat_iconnw"></i>ADD SENDER</button>

                                <p className="fortxx">Message</p>

                                <textarea id="" className="text_comt2" name="" rows="4" cols="50">
                                </textarea>

                                <button className="loadconxx"><i className="fa fa-send send_smssub"></i></button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        )
    }
}
export default Smssub;