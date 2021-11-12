import React, { Component } from 'react'
import { Link } from "react-router-dom";

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';



const percentage = 66;

export default class Dashnom extends Component {
    render() {
        return (
            <div>

                <div className="nav_umb">
                    <img src="./img/dashlogo.jpg" alt="" className="umb_logo" />
                    <h1 className="umb_heading">UMB GHANA TERTIARY AWARDS</h1>
                </div>
                <div className="umb_contain">
                    <div className="umb_title">
                        <p className="progress_umb">Nomination In Progress</p>
                        <p className="date_umb">24 September-20 October</p>
                    </div>
                </div>

                <div className="wrapnom_umb">
                    <div className="wrapinner_nom">
                        <input className='search-inputdash_nom' type="text" placeholder="Search  Nominee" name="search" />
                        <i className="fa fa-search umb2-search"></i>


                        <p className="select_umbp">Select Category To File For Nomination</p>

                        <div className="flex_umb">
                            <div className="item_umb"><Link className="link_reset" to='/dashvote' ><p className="nom_subumb"> Category 1 </p></Link></div>
                            <div className="item_umb"><Link className="link_reset" to='/dashvote' ><p className="nom_subumb"> Category 2</p></Link></div>
                            <div className="item_umb"><Link className="link_reset" to='/dashvote' ><p className="nom_subumb"> Category 3</p></Link></div>
                            <div className="item_umb"><Link className="link_reset" to='/dashvote' ><p className="nom_subumb"> Category 4</p></Link></div>
                            <div className="item_umb"><Link className="link_reset" to='/dashvote' ><p className="nom_subumb"> Category 5</p></Link></div>
                            <div className="item_umb"><Link className="link_reset" to='/dashvote' ><p className="nom_subumb"> Category 6</p></Link></div>
                        </div>

                    </div>
                </div>


                <div className="umb_3rdsec">
                <CircularProgressbar value={percentage} text={`${percentage}%`} />;
                   
                    <p className="umbchart_2">Accepted Nomination</p>
                </div>
            </div>
        )
    }
}