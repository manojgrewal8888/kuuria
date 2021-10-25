import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Voteprices extends Component {
    render() {
        return (
            <div>
                <div className="wrapvote_browse">
                    <div className="leftv_browse">
                    <img src="./img/dashlogo.jpg" alt="" className="voteimg_resize" />
                   
                        <Link className="link_reset" to='/votecheck'><i className="fa fa-home vot_icon"></i></Link>
                        
                        
                        <Link className="link_reset" to='/votebrowse'><i className="fa fa-th vot_icon"></i></Link>
                        <Link className="link_reset" to='/votepersonal'><i className="fa fa-user vot_icon"></i></Link>

                        <Link className="link_reset" to='/voteprices'><i className="fa fa-database vot_icon"></i></Link>
                        <Link className="link_reset" to='/voteprices'><span className="priceicon_span"><i className="fa fa-database vot_iconprice"></i>Price and Votes</span></Link>

                    </div>

                    <div className="rightv_browse">

                    </div>
                </div>
            </div>
        )
    }
}
