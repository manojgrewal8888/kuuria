import React, { Component } from 'react'
import { Link } from "react-router-dom";
export default class Dashvoting extends Component {
    render() {
        return (
            <>
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
                        <div className="main_dvwr">
                            <div className="wrsearchdv">
                                <input className='search-inputumb' type="text" placeholder="Search  Nominee" name="search" />
                                <i className="fa fa-search umb-search"></i>
                            </div>

                            <div className="wrsearchdv">
                                <Link className='link_reset' to='/votecheck'>
                                    <button className="umb_check">Check Vote</button>
                                </Link>
                            </div>
                        </div>

                        <p className="select_umbp">Select Category To View Nominee And Vote</p>

                        <div className="flex_umb">
                            <div className="item_umb"> <div class="interior">
                                <a class="btn" href="#open-modal">👋 Basic CSS-Only Modal</a>
                            </div>
                            </div>
                            <div id="open-modal" class="modal-window">
                                <div>
                                    <a href="#" title="Close" class="modal-close">Close</a>
                                    <h1>Voilà!</h1>
                                    <div>A CSS-only modal based on the :target pseudo-class. Hope you find it helpful.</div>
                                    <div><small>Check out</small></div>
                                    <Link to="/" >👉 Amino: Live CSS Editor for Chrome</Link></div>
                            </div>
                        <div className="item_umb"><p className="nom_subumb"> Nominee 2</p></div>
                        <div className="item_umb"><p className="nom_subumb"> Nominee 3</p></div>
                        <div className="item_umb"><p className="nom_subumb"> Nominee 1</p></div>
                        <div className="item_umb"><p className="nom_subumb"> Nominee 2</p></div>
                        <div className="item_umb"><p className="nom_subumb"> Nominee 3</p></div>
                    </div>
                    <Link className="link_reset" to='/dashnominee'><button className="umb_back"> Back To Category</button></Link>
                </div>
            </div>

            </>
        )
    }
}
