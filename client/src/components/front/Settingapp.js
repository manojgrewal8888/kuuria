import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Menu from './Menu';


export default class Settingapp extends Component {
    render() {
        return (
            <div>
                   <Menu/>
                <div className="setgen_main">
                    <div className="wrapgen_setapp">
                        <h1 className="acc_set">Account Setting</h1>
                        <div className="left_gen">

                            <img src="./img/kuria-new.png" alt="" className="genset_img" />
                            <Link className="set_linx"  to='/settinggen'>General</Link>
                            <Link className="set_linx"  to='/settingorg'>Organisation</Link>
                            <Link className="set_linx"  to='/settingapp'>Appearance</Link>
                            <Link className="set_linx"  to='/empty'>Mobile App</Link>
                            <Link className="set_linx"  to='/empty'>Billing</Link>
                            <Link className="set_linx"  to='/empty'>Security</Link>

                            <Link className="set_linxapp"  to='/settingapp'>Appearance</Link>


                        </div>

                        <div className="lineh_gen"></div>

                        <div className="right_gen">

                        <img src="./img/blend.png" alt="" className="seticon_resize" />
                            <p className="fa_user">Appearance Settings</p>

                            <div className="fauser_vl"></div>

                            <p className="genset_name">Logo</p>

                            <p className="gen_spara">Add Logo Or Image That Voters Will See When Voting...</p>                          
                           
                            <input className="input_app1" type="file" id="fileUpload"/>
                                                        
                            <span className="appset_span1">Max File Size: 2 MB .png, .jpg, .gif only</span>

                            <p className="genapp_ban">Banner</p>
                            <p className="setban_sub">Add An Image That Will Show On The Banner</p>

                            <span className="appset_span1">Max File Size: 2 MB .png, .jpg, .gif only</span>
                            <input className="input_app1" type="file" id="fileUpload"/>

                            <label htmlFor="" className="color_lab">Color</label>
                            <input className="color_pix" type="color" id="favcolor" name="favcolor" value="#008cff"></input>

                            <button className="setapp_btn">Save</button>


                           
                        </div>
                    </div>
                    
                    <div className="setapp_box1"></div>
                            <div className="setapp_box2"></div>
                            <div className="setapp_box3"></div>
                            <div className="setapp_box4"></div>
                            <div className="setapp_box5"></div>
                </div>
                
            </div>
        )
    }
}
