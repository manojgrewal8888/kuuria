import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Sidebar from "./Sidebar";
export default class Manageticket extends Component {
    render() {
        return (
            <div>
                <div className="wrap_vwendor">
                <Sidebar history={this.props.history}/>  

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
                                    <Link className="mantik_pra2" to='/viewedit_ticket'>Select to View and Edit</Link>
                                </div>

                                <div className="wrapman_tik">
                                    <p className="mantik_pra">Award Event 2021</p>
                                    <Link className="mantik_pra2" to='/viewedit_ticket'>Select to View and Edit</Link>
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
