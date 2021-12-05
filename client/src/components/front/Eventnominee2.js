import React, { PureComponent } from 'react';
import { ResponsiveContainer, PieChart, Cell, Pie, Legend } from 'recharts';
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import axios from "axios";
import Extramenu from './Extramenu';


class Eventnominee2 extends PureComponent {
    render() {
        return (
            <div>

                <div className="wrap_vwendor">
                    <Sidebar history={this.props.history} />



                    <div className="right_home1">

                        <Extramenu history={this.props.history} />

                        <div className="right_gen">

                            <button className="ecat_txtnw"><i className="fa fa-plus-circle ecat_iconnw"></i>New Category</button>




                            <div className="ecat_box">
                                <div className="ecat_item2"><p className="nom_cat">Nominee 1</p></div>
                                <div className="ecat_item2"><p className="nom_cat">Nominee 2</p></div>
                                <div className="ecat_item2"><p className="nom_cat">Nominee 3</p></div>
                                <div className="ecat_item2"><p className="nom_cat">Nominee 4</p></div>
                                <div className="ecat_item2"><p className="nom_cat">Nominee 5</p></div>
                                <div className="ecat_item2"><p className="nom_cat">Nominee 6</p></div>
                                <div className="ecat_item2"><p className="nom_cat">Nominee 7</p></div>
                                <div className="ecat_item2"><p className="nom_cat">Nominee 8</p></div>
                                <div className="ecat_item2"><p className="nom_cat">Nominee 9</p></div>
                                <div className="ecat_item2"><p className="nom_cat">Nominee 10</p></div>
                                <div className="ecat_item2"><p className="nom_cat">Nominee 11</p></div>
                                <div className="ecat_item2"><p className="nom_cat">Nominee 12</p></div>
                            </div>
                            <div className="slider_ecat">
                                <span className="dot ecat_dot" onclick="currentSlide(1)"></span>
                                <span className="dot ecat_dot" onclick="currentSlide(2)"></span>
                                <span className="dot ecat_dot" onclick="currentSlide(3)"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Eventnominee2;
