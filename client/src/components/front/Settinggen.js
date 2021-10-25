import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Menu from './Menu';

export default class Settinggen extends Component {
    render() {
        return (
            <div>
               
                <div className="setgen_main">
                    <div className="wrapgen_set">
                        <h1 className="acc_set">Account Setting</h1>
                        <div className="left_gen">

                            <img src="./img/kuria-new.png" alt="" className="genset_img" />
                            <Link className="set_linx" exact to='/settinggen'>General</Link>
                            <Link className="set_linx" exact to='/settingorg'>Organisation</Link>
                            <Link className="set_linx" exact to='/settingapp'>Appearance</Link>
                            <Link className="set_linx" exact to='/empty'>Mobile App</Link>
                            <Link className="set_linx" exact to='/empty'>Billing</Link>
                            <Link className="set_linx" exact to='/empty'>Security</Link>
                            <Link className="set_linxg" exact to='/settinggen'>General</Link>


                        </div>

                        <div className="lineh_gen"></div>

                        <div className="right_gen">
                            <i class="fa fa-user-o"></i><p className="fa_user">Profile Settings</p>
                            <div className="fauser_vl"></div>
                            <p className="genset_name">Name</p>
                            <p className="gen_spara">Your Name Or The Name Of The Primary Contact Of The Account, Visit The <Link className="genset_link">Organisation Setting</Link> To Change Name Of The Organisation</p>
                            <input type="text" name="suser" id="" className="input_genset1" />
                            <label className="label_genset" htmlFor="Email Address">Email Address</label>
                            <input type="email" id="" name="" className="input_genset2" />
                            <button className="genset_btn">Save</button>
                        </div>
                    </div>
                    <div className="setgen_box1"></div>
                    <div className="setgen_box2"></div>
                    <div className="setgen_box3"></div>
                    <div className="setgen_box4"></div>
                    <div className="setgen_box5"></div>
                </div>
            </div>
        )
    }
}
