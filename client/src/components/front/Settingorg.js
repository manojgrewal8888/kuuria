import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Menu from './Menu';

export default class Settingorg extends Component {
    render() {
        return (
            <div>
                   <Menu/>
                <div className="setgen_main">
                    <div className="wrapgen_set2">
                        <h1 className="acc_set">Account Setting</h1>
                        <div className="left_gen">

                            <img src="./img/kuria-new.png" alt="" className="genset_img" />
                            <Link className="set_linx"  to='/settinggen'>General</Link>
                            <Link className="set_linx"  to='/settingorg'>Organisation</Link>
                            <Link className="set_linx"  to='/settingapp'>Appearance</Link>
                            <Link className="set_linx"  to='/empty'>Mobile App</Link>
                            <Link className="set_linx"  to='/empty'>Billing</Link>
                            <Link className="set_linx"  to='/empty'>Security</Link>
                            <Link className="set_linxo"  to='/settingorg'>Organisation</Link>


                        </div>

                        <div className="lineh_gen"></div>

                        <div className="right_gen">

                            <img src="./img/bicon.png" alt="" className="seticon_resize" />
                            <p className="fa_user">Organisation Settings</p>

                            <div className="fauser_vl"></div>

                            <p className="genset_name">Organisation Name</p>

                            <p className="gen_spara">The Organisation Name Will Be Displayed To Voter When Logging In And Voting In Your Elections.</p>
                            <input type="text" name="suser" id="" className="input_genset1" />

                            <p className="subdomain_p">Subdomain</p>
                            <p className="subdomain_p2">The Organisation Subdomain Acts As A Landing Page That List All The Active Elections Example: HTTPS://Orgname.kuuria.com</p>
                            <input type="text" name="suser" id="" className="input_genset3" />

                            <button className="genorg_btn">Save</button>
                           
                        </div>
                    </div>
                    <div className="setgen_box1"></div>
                    <div className="setorg_box"></div>
                    <div className="setgen_box3"></div>
                    <div className="setgen_box4"></div>
                    <div className="setgen_box5"></div>
                </div>
            </div>
        )
    }
}
