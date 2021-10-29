import React, { Component } from 'react'

export default class Vieweditticket extends Component {
    render() {
        return (
            <div>
                <div className="wrap_vwendor">
                    <div className="left_vendor">
                        <div className="left_subven">
                            <img src="./img/kuria-new.png" alt="" className="res_venlogo" />

                            <i className="fa fa-home cus_vicon"></i>


                           
                                <i className="fa fa-calendar-check-o cus_vicon"></i>
                              
                            <div className="home_vendori3">
                            <i className="fa fa-ticket cus_vicon3"></i>
                            <span className="home_vender3">Manage Tickets</span>
                            </div>

                            <i className="fa fa-money cus_vicon"></i>
                            <i className="fa fa-comment cus_vicon"></i>
                            <i className="fa fa-bar-chart cus_vicon"></i>
                            <i className="fa fa-file-text-o cus_vicon"></i>

                        </div>
                    </div>

                    <div className="right_vendor">
                        <div className="right_subven">
                            <button className="logout_ven">
                                <i class="fa fa-sign-out"></i>
                                Log Out
                            </button>

                            <div className="viewt_wrap">
                                <div className="left_viewt">
                                    <p className="left_vt1">Ticket Name</p>
                                    <p className="left_vt1">Date</p>
                                    <p className="left_vt1">Time</p>
                                    <p className="left_vt1">Type/Price</p>
                                    <p className="left_vt1">Venue</p>
                                    <p className="left_vt1">Number</p>
                                </div>

                                <div className="hori_viewt"></div>
                               
                                <div className="right_viewt">
                                <p className="right_vt1">AWARD EVENT 2021</p>
                                <p className="right_vt2">October 10 ,2021</p>
                                <p className="right_vt3">8:00 PM</p>
                                <select className="right_vt4" name="" id="" placeholder="Choose Price and Number of Votes">
                                    <option value="">Choose Price and Number of Votes</option>
                                    <option value="">99$ 4 votes</option>
                                    <option value="">99$ 4 votes</option>
                                    <option value="">99$ 4 votes</option>
                                </select>
                                <p className="right_vt5">Conference Center</p>
                                <p className="right_vt6"># 007</p>
                                </div>
                            </div>

                            <button className="save_vte">Save</button>
                        </div>
                    </div>
                </div>
                <p className="bottom_vendash">Made With <i className="fa fa-heart icon_venbottom" ></i> In Trasacco Valley ,Ghana</p>
            </div>
        )
    }
}
