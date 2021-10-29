import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Manageticket extends Component {
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

                            <input className="man_tickets" type="search" name="" id="" />

                            <button className="mantik_btnv"><i class="fa fa-plus-circle adicon_tik"></i>ADD QUESTIONS</button>
                            <div className="tick_wraping">
                                <div className="wrapman_tik">
                                    <p className="mantik_pra">Award Event 2021</p>
                                    <Link className="mantik_pra2" to='/'>Select to View and Edit</Link>
                                </div>

                                <div className="wrapman_tik">
                                    <p className="mantik_pra">Award Event 2021</p>
                                    <Link className="mantik_pra2" to='/'>Select to View and Edit</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="bottom_vendash">Made With <i className="fa fa-heart icon_venbottom" ></i> In Trasacco Valley ,Ghana</p>
            </div>
        )
    }
}
