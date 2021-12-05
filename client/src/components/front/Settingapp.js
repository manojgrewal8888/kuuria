import React, { PureComponent } from 'react';
import { ResponsiveContainer, PieChart, Cell, Pie, Legend } from 'recharts';
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import axios from "axios";
import Extramenu from './Extramenu';


class Settingapp extends PureComponent {
    render() {
        return (
            <div>

                <div className="wrap_vwendor">
                    <Sidebar history={this.props.history} />



                    <div className="right_home1">

                        <Extramenu history={this.props.history} />

                        <div className="right_gen">

                            <img src="./img/blend.png" alt="" className="seticon_resize" />
                            <p className="fa_user">Appearance Settings</p>

                            <div className="fauser_vl"></div>

                            <p className="genset_name">Logo</p>

                            <p className="gen_spara">Add Logo Or Image That Voters Will See When Voting...</p>

                            <input className="input_app1" type="file" id="fileUpload" />

                            <span className="appset_span1">Max File Size: 2 MB .png, .jpg, .gif only</span>

                            <p className="genapp_ban">Banner</p>
                            <p className="setban_sub">Add An Image That Will Show On The Banner</p>

                            <span className="appset_span1">Max File Size: 2 MB .png, .jpg, .gif only</span>
                            <input className="input_app1" type="file" id="fileUpload" />

                            <label htmlFor="" className="color_lab">Color</label>
                            <input className="color_pix" type="color" id="favcolor" name="favcolor" value="#008cff"></input>

                            <button className="setapp_btn">Save</button>



                        </div>
                    </div>

                    <div className="setapp_box1"></div>
                    <div className="setapp_box2"></div>
                    <div className="setapp_box3"></div>
                    <div className="setapp_box4"></div>
                    <div className="setapp_box5"></div>
                </div>

            </div>
        )
    }
}
export default Settingapp;