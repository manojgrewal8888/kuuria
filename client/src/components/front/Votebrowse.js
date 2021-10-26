import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Votebrowse extends Component {
    render() {
        return (
            <div>
                <div className="wrapvote_browse">
                    <div className="leftv_browse">
                        <img src="./img/dashlogo.jpg" alt="" className="voteimg_resize" />
                        <Link className="link_reset" to='/votecheck'><i className="fa fa-home vot_icon"></i></Link>
                        <Link className="link_reset" to='/votecheck'><i className="fa fa-th vot_icon"></i></Link>
                        <Link className="link_reset" to='/votebrowse'><span className="thicon_span"><i className="fa fa-th vot_iconth2"></i>Event List</span></Link>

                        <Link className="link_reset" to='/votepersonal'><i className="fa fa-user vot_icon"></i></Link>
                        <Link className="link_reset" to='/voteprices'><i className="fa fa-database vot_icon"></i></Link>

                    </div>

                    <div className="rightv_browse">
                        <div className="wrap_vbrowse">
                            <input type="search" name="" id="" className="vbrowse_search" />
                            <i className="fa fa-search sbrowse_vicon"></i>
                            <div className="flex_vbrowse">
                                <div className="item_vbrowse"><span className="vbrowse_item">Event 1</span> </div>
                                <div className="item_vbrowse"><span className="vbrowse_item">Event 1</span> </div>
                                <div className="item_vbrowse"><span className="vbrowse_item">Event 1</span> </div>
                                <div className="item_vbrowse"><span className="vbrowse_item">Event 1</span> </div>
                                <div className="item_vbrowse"><span className="vbrowse_item">Event 1</span> </div>
                                <div className="item_vbrowse"><span className="vbrowse_item">Event 1</span> </div>
                                <div className="item_vbrowse"><span className="vbrowse_item">Event 1</span> </div>
                                <div className="item_vbrowse"><span className="vbrowse_item">Event 1</span> </div>
                                <div className="item_vbrowse"><span className="vbrowse_item">Event 1</span> </div>
                                <div className="item_vbrowse"><span className="vbrowse_item">Event 1</span> </div>
                                <div className="item_vbrowse"><span className="vbrowse_item">Event 1</span> </div>
                                <div className="item_vbrowse"><span className="vbrowse_item">Event 1</span> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
