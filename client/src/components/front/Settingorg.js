import React, { PureComponent } from 'react';
import { ResponsiveContainer, PieChart, Cell, Pie, Legend } from 'recharts';
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import axios from "axios";
import Extramenu from './Extramenu';


class Settingorg extends PureComponent {
    render() {
        return (
            <div>

                <div className="wrap_vwendor">
                    <Sidebar history={this.props.history} />



                    <div className="right_home1">

                        <Extramenu history={this.props.history} />
                        <div className="right_gen">

                            <img src="./img/bicon.png" alt="" className="seticon_resize" />
                            <p className="fa_user">Organisation Settings</p>

                            <div className="fauser_vl"></div>

                            <p className="genset_name">Organisation Name</p>

                            <p className="gen_spara">The Organisation Name Will Be Displayed To Voter When Logging In And Voting In Your Elections.</p>
                            <input type="text" name="suser" id="" className="input_genset1" />

                            <p className="subdomain_p">Subdomain</p>
                            <p className="subdomain_p2">The Organisation Subdomain Acts As A Landing Page That List All The Active Elections Example: HTTPS://Orgname.kuuria.com</p>
                            <input type="text" name="suser" id="" className="input_genset3" />

                            <button className="genorg_btn">Save</button>

                        </div>
                    </div>
                    <div className="setgen_box1"></div>
                    <div className="setorg_box"></div>
                    <div className="setgen_box3"></div>
                    <div className="setgen_box4"></div>
                    <div className="setgen_box5"></div>
                </div>
            </div>
        )
    }
}

export default Settingorg;
