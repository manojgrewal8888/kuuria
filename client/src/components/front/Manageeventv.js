import React, { Component } from 'react'

export default class Manageeventv extends Component {
    render() {
        return (
            <div>
                <div className="wrap_vwendor">
                    <div className="left_vendor">
                        <div className="left_subven">
                            <img src="./img/kuria-new.png" alt="" className="res_venlogo" />
                            <div className="home_vendori">
                                <i className="fa fa-home cus_vicon1"></i>
                                <span className="home_vender">Dashboard</span>
                            </div>

                            <i className="fa fa-calendar-check-o cus_vicon"></i>
                            <i className="fa fa-ticket cus_vicon"></i>
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

                            <h4 className="meve_headin">Manage Questions For Filling Of Nomination</h4>

                            <div className="manage_wrap">
                                <button className="manage_btnv"><i class="fa fa-plus-circle adicon_v"></i>ADD QUESTIONS</button>

                                
                                <div className="wrap_txtman">
                                <i class="fa fa-circle circ_vicon"></i>
                                <p className="txtp_mana">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
