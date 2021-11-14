import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Sidebar from "./Sidebar";
import Logout from "./Logout";

import { Scrollbars } from 'react-custom-scrollbars-2';
class Massagingven extends Component {

    render() {
        return (
            <div>
                <Scrollbars
                    onScroll={this.handleScroll}
                    onScrollFrame={this.handleScrollFrame}
                    onScrollStart={this.handleScrollStart}
                    onScrollStop={this.handleScrollStop}
                    onUpdate={this.handleUpdate}
                    renderView={this.renderView}
                    renderTrackHorizontal={this.renderTrackHorizontal}
                    renderTrackVertical={this.renderTrackVertical}
                    renderThumbHorizontal={this.renderThumbHorizontal}
                    renderThumbVertical={this.renderThumbVertical}
                    autoHide
                    autoHideTimeout={1000}
                    autoHideDuration={200}
                    autoHeight
                    autoHeightMin={0}
                    autoHeightMax={50}
                    thumbMinSize={30}
                    universal={true}
                    {...this.props} />
                <div className="wrap_vwendor">
                    <Sidebar history={this.props.history} />
                    <div className="right_vendor">
                        <div className="right_subven">
                            <Logout />

                            <h2 className="msg_heading">Messages <span className="circle_msg">4</span></h2>
                            <div className="wrtap_msgdummy">
                                <div className="left_submsg">
                                    <p className="all_msgz">All Conversation</p>

                                    <div className="wrapmsg_ser">
                                        <input className="msg_sear" type="search" name="" id="" />
                                        <i className="fa fa-search cus_msgi"></i>
                                    </div>

                                    <div className="ku_msg">
                                        <i className="fa fa-user-circle-o cus_msgiu"></i>
                                        <img src="./img/kuria-new.png" className="user_logim" alt="" srcset="" />
                                    </div>

                                    <div className="subku_msg">
                                        <i className="fa fa-user cus_msgiu2"></i>
                                        <p className="subkuria_msg">Nominee 3, Nominee 4+3 others</p>
                                    </div>
                                </div>
                                <div className="right_submsg">
                                    <Scrollbars className="cus_slider">
                                        <div className="leftmsg_txt">
                                            <p className="lefttxtmsg">Whats the point in using Lorem Ipsum</p>

                                        </div>

                                       
                                        

                                        <div className="rightmsg_txt">
                                            <p className="righttxtmsg">Same here ,bro</p>
                                        </div>
                                    </Scrollbars>
                                    <div className="wrap_sendmsg">
                                        <input type="text" className="send_msgtx" name="" id="" />
                                       


                                        <i className="fa fa-send cus_send_ic"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>






        )

    }
}

export default Massagingven;

















