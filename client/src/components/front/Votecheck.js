import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Votecheck extends Component {
    render() {
        return (
            <div>
                <div className="wrapvote_browse">
                    <div className="leftv_browse">
                        <img src="./img/dashlogo.jpg" alt="" className="voteimg_resize" />


                        <Link className="link_reset" to='/votecheck'><span className="homeicon_span"><i className="fa fa-home vot_iconhome"></i>Home</span></Link>
                        <Link className="link_reset" to='/votebrowse'><i className="fa fa-th vot_icon"></i></Link>
                        <Link className="link_reset" to='/votepersonal'><i className="fa fa-user vot_icon"></i></Link>
                        <Link className="link_reset" to='/voteprices'><i className="fa fa-database vot_icon"></i></Link>

                    </div>

                    <div className="rightv_browse">
                        <div className="one_wraappp">
                            <div className="one_rightxvc">

                                <img src="./img/user.png" alt="" className="resize_uservote" />
                                <p className="Nom1_check">Nominee 1 Name</p>
                                <p className="check_votep">Category Name</p>
                                <p className="about_check">About</p>
                                <p className="dummy_txtvote">Kuuria is the best voting platfortm which proviodes u a huge range of functionality so you can manage your events easly and professionally</p>
                            </div>
                            <div className="check_vertical"></div>

                            <div className="one_rightxvc2">
                                <Link to="/votesubmit"><button className="vote_check">VOTE</button></Link>
                                <Link to='/dashnpminee'><button className="back_check">Back To Nominee</button> </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
