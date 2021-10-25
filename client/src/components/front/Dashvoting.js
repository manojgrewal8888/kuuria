import React, { Component } from 'react'
import { Link } from "react-router-dom";
export default class Dashvoting extends Component {
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
                        <input className='search-inputumb' type="text" placeholder="Search  Nominee" name="search" />
                        <i className="fa fa-search umb-search"></i>
                        <Link className='link_reset' to='/votecheck'> 
                            <button className="umb_check">Check Vote</button>
                        </Link>

                        <p className="select_umbp">Select Category To View Nominee And Vote</p>

                        <div className="flex_umb">
                            <div className="item_umb"><p className="nom_subumb"> Nominee 1</p></div>
                            <div className="item_umb"><p className="nom_subumb"> Nominee 2</p></div>
                            <div className="item_umb"><p className="nom_subumb"> Nominee 3</p></div>
                            <div className="item_umb"><p className="nom_subumb"> Nominee 1</p></div>
                            <div className="item_umb"><p className="nom_subumb"> Nominee 2</p></div>
                            <div className="item_umb"><p className="nom_subumb"> Nominee 3</p></div>
                        </div>
                        <button className="umb_back"><Link className="link_reset" to ='/dashnominee'> Back To Category</Link></button>
                    </div>
                </div>

            </div>
        )
    }
}
