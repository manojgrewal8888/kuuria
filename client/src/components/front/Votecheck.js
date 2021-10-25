import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Votecheck extends Component {
    render() {
        return (
            <div>
                <div className="wrapvote_browse">
                    <div className="leftv_browse">
                        <img src="./img/dash logo.jpg" alt="" className="voteimg_resize" />
                        <Link className="link_reset" to='/votecheck'><i class="fa fa-home vot_icon"></i></Link>
                        
                        <Link className="link_reset" to='/votecheck'><span className="homeicon_span"><i class="fa fa-home vot_iconhome"></i>Home</span></Link>
                        <Link className="link_reset" to='/votebrowse'><i class="fa fa-th vot_icon"></i></Link>
                        <Link className="link_reset" to='/votepersonal'><i class="fa fa-user vot_icon"></i></Link>
                        <Link className="link_reset" to='/voteprices'><i class="fa fa-database vot_icon"></i></Link>

                    </div>

                    <div className="rightv_browse">
                    <img src="./img/user.png" alt="" className="resize_uservote" />
                    <p className="Nom1_check">Nominee 1 Name</p>
                    <p className="check_votep">Category Name</p>
                    <p className="about_check">About</p>
                    <p className="dummy_txtvote">Kuuria is the best voting platfortm which proviodes u a huge range of functionality so you can manage your events easly and professionally</p>

                    <div className="check_vertical"></div>

                    <Link to="/votesubmit"><button className="vote_check">VOTE</button></Link>
                    <Link to='/dashnpminee'><button className="back_check">Back To Nominee</button> </Link>
                    </div>
                </div>
            </div>
        )
    }
}
