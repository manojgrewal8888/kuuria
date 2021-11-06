import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Voteprices extends Component {
    render() {
        return (
            <div>
                <div className="wrapvote_browsexx">
                    <div className="leftv_browse">
                        <img src="./img/dashlogo.jpg" alt="" className="voteimg_resize" />

                        <Link className="link_reset" to='/votecheck'><i className="fa fa-home vot_icon"></i></Link>


                        <Link className="link_reset" to='/votebrowse'><i className="fa fa-th vot_icon"></i></Link>
                        <Link className="link_reset" to='/votepersonal'><i className="fa fa-user vot_icon"></i></Link>


                        <Link className="link_reset" to='/voteprices'><span className="priceicon_span"><i className="fa fa-database vot_iconprice"></i>Price and Votes</span></Link>

                    </div>

                    <div className="rightv_browse">
                        <p className="pricevote_head">Prices and Votes</p>
                        <select className="price_select" name="" id="" placeholder="Choose Price and Number of Votes">
                            <option value="">Choose Price and Number of Votes</option>
                            <option value="">99$ 4 votes</option>
                            <option value="">99$ 4 votes</option>
                            <option value="">99$ 4 votes</option>
                        </select>

                        <div className="wrap2btnx">
                            <Link className="link_reset" to='/votebrowse'><button className="back_personxx">Back</button></Link>
                            <Link className="link_reset" to='/votesubmit'><button className="proceed_personxx">Proceed</button></Link>

                        </div>

                    </div>
                </div>
            </div>
        )
    }
}