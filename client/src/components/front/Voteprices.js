import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Voteprices extends Component {
    render() {
        return (
            <div>
                <div className="wrapvote_browse">
                    <div className="leftv_browse">
                        <img src="./img/dash logo.jpg" alt="" className="voteimg_resize" />

                        <Link className="link_reset" to='/votecheck'><i class="fa fa-home vot_icon"></i></Link>


                        <Link className="link_reset" to='/votebrowse'><i class="fa fa-th vot_icon"></i></Link>
                        <Link className="link_reset" to='/votepersonal'><i class="fa fa-user vot_icon"></i></Link>

                        <Link className="link_reset" to='/voteprices'><i class="fa fa-database vot_icon"></i></Link>
                        <Link className="link_reset" to='/voteprices'><span className="priceicon_span"><i class="fa fa-database vot_iconprice"></i>Price and Votes</span></Link>

                    </div>

                    <div className="rightv_browse">
                        <p className="pricevote_head">Prices and Votes</p>
                        <select className="price_select" name="" id="" placeholder="Choose Price and Number of Votes">
                            <option value="">Choose Price and Number of Votes</option>
                            <option value="">99$ 4 votes</option>
                            <option value="">99$ 4 votes</option>
                            <option value="">99$ 4 votes</option>
                        </select>
                        <Link className="link_reset" to='/votebrowse'><button className="back_person">Back</button></Link>
                    <Link className="link_reset" to='/votesubmit'><button className="proceed_person">Proceed</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}