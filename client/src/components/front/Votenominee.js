import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Votenominee extends Component {
    render() {
        return (
            <div>
                <div className="wrapvote_browse">
                    <div className="leftv_browse">
                    <img src="./img/dash logo.jpg" alt="" className="voteimg_resize" />
                    <img src="./img/dash logo.jpg" alt="" className="voteimg_resize" />
                        <Link className="link_reset" to='/votecheck'><i class="fa fa-home vot_icon"></i></Link>
                        
                        <Link className="link_reset" to='/votecheck'><span className="homeicon_span"><i class="fa fa-home vot_iconhome"></i>Home</span></Link>
                        <Link className="link_reset" to='/votebrowse'><i class="fa fa-th vot_icon"></i></Link>
                        <Link className="link_reset" to='/votepersonal'><i class="fa fa-user vot_icon"></i></Link>
                        <Link className="link_reset" to='/voteprice'><i class="fa fa-database vot_icon"></i></Link>

                    </div>

                    <div className="rightv_browse">

                    </div>
                </div>
            </div>
        )
    }
}
