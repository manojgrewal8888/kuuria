import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'


import PhoneInput from 'react-phone-number-input'

export default function Country() {
    const [value, setValue] = useState()
    return (
        <>
            <div className="wrapvote_browse">
                <div className="leftv_browse">
                    <img src="./img/dashlogo.jpg" alt="" className="voteimg_resize" />
                    <Link className="link_reset" to='/votecheck'><i className="fa fa-home vot_icon"></i></Link>
                    <Link className="link_reset" to='/votebrowse'><i className="fa fa-th vot_icon"></i></Link>
                    
                    <Link className="link_reset" to='/votepersonal'><span className="personalicon_span"><i className="fa fa-user vot_iconpersonal"></i>Personal</span></Link>
                    <Link className="link_reset" to='/voteprices'><i className="fa fa-database vot_icon"></i></Link>

                </div>

                <div className="rightv_browse">
                    <p className="fill_personal">Fill In Personal Information</p>
                    <input className="input_person" type="text" name="" id="" placeholder="Name" />
                    <input className="input_person" type="email" name="" id="" placeholder="E_mail" />
                    <div className="resetx">
                        <PhoneInput
                            defaultCountry="GH"
                            value={value}
                            onChange={setValue} />
                    </div>



                    <div className="wrapx_btnp">
                        <Link className="link_reset" to='/votebrowse'><button className="back_person">Back</button></Link>
                        <Link className="link_reset" to='/voteprice'><button className="proceed_person">Proceed</button></Link>
                    </div>
                </div>
            </div>
        </>

    )
}

