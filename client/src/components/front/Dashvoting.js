import React, { useState } from 'react';
import Modal from 'react-modal';
import { Link } from "react-router-dom";



import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

function Dashvoting() {
    const [value, setValue] = useState()
    const [modalIsOpen, setModalIsOpen] = useState(false)
    return (
        <div>

            <div className="nav_umb">
                <img src="./img/dashlogo.jpg" alt="" className="umb_logo" />
                <h1 className="umb_heading">UMB GHANA TERTIARY AWARDS</h1>
            </div>
            <div className="umb_contain">
                <div className="umb_title">
                    <p className="progress_umb">Nomination In Progress</p>
                    <p className="date_umb">24 September-20 October</p>
                </div>
            </div>

            <div className="wrapnom_umb">

                <div className="wrapinner_nom">
                    <div className="main_dvwr">
                        <div className="wrsearchdv">
                            <input className='search-inputumb' type="text" placeholder="Search  Nominee" name="search" />
                            <i className="fa fa-search umb-search"></i>
                        </div>

                        <div className="wrsearchdv">
                            <Link className='link_reset' to='/votecheck'>
                                <button className="umb_check">Check Vote</button>
                            </Link>
                        </div>
                    </div>

                    <p className="select_umbp">Select Category To View Nominee And Vote</p>

                    <div className="flex_umb">
                        <div className="item_umb">
                            <button className="nom_subumb" onClick={() => setModalIsOpen(true)} >
                                nominee 1
                            </button>
                            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
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



                                <div className="rightv_browse">
                                    <p className="fill_personal">Fill In Personal Information</p>
                                    <input className="input_person" type="text" name="" id="" placeholder="Name" />
                                    <input className="input_person" type="email" name="" id="" placeholder="E_mail" />
                                    <div className="resetx">
                                        <PhoneInput
                                            defaultCountry="ind"
                                            value={value}
                                            onChange={setValue}
                                            inputClass="inputmod"
                                            buttonClass="btnxmod"
                                            containerClass="lcontainxmod"
                                            dropdownClass="dropxmod"
                                            searchClass="searchxmod"
                                        />
                                    </div>
                                    <div className="wrapx_btnp">
                                        <Link className="link_reset" to='/votebrowse'><button className="back_person">Back</button></Link>
                                        <Link className="link_reset" to='/voteprice'><button className="proceed_person">Proceed</button></Link>
                                    </div>



                                    <div id="pricenvote">
                                        <div className="midpopp_browse">
                                            <p className="pricevote_head">Prices and Votes</p>
                                            <select className="price_select" name="" id="" placeholder="Choose Price and Number of Votes">
                                                <option value="">Choose Price and Number of Votes</option>
                                                <option value="">99$ 4 votes</option>
                                                <option value="">99$ 4 votes</option>
                                                <option value="">99$ 4 votes</option>
                                            </select>

                                            <div className="wrap2btnx">
                                                <Link className="link_reset" to='/votebrowse'><button className="back_personxx">Back</button></Link>
                                                <Link className="link_reset" to='/votesubmit'><button className="proceed_personxx">Proceed</button></Link>

                                            </div>

                                        </div>
                                    </div>
                                </div>


                                <div id="submited_pop">
                                    <div className="subcon_wrap">
                                        <img src="./img/conf.png" alt="" className="subcon_im1" />
                                        <img src="./img/highfive.png" alt="" className="subcon_im2" />
                                        <p className="vote_submitconf">Vote Submitted</p>
                                    </div>
                                </div>



                                <div id="addnewcat">
                                    <div className="wrapaddne">
                                        <p className="headingaddon">Create New Category</p>

                                        <input type="text" name="" id="" className="addon_inp1" placeholder="Title" />

                                        <label className="dis_labeladdon" for="Description">Description</label>

                                        <textarea id="w3review" name="w3review" rows="4" cols="50"></textarea>
                                        <div className="wrapbtnaddon_bt">
                                            <button className="creteaddon_bt">CREATE</button>
                                        </div>
                                    </div>
                                </div>


                                <div id="dleteevn">
                                    <div className="wrap_ddeleteeven">
                                        <p className="delhead_pop">Delete Event</p>

                                        <p className="warningdel">Are you sure you want to delete this Event “Event name” ? This action is irreversible.</p>

                                        <button className="delwarteen"><i className="fa fa-trash del_colo"></i>Delete</button>
                                    </div>
                                </div>

                                <div className="demspace"></div>
                            </Modal>
                        </div>
                        <div className="item_umb"><p className="nom_subumb"> Nominee 2</p></div>
                        <div className="item_umb"><p className="nom_subumb"> Nominee 3</p></div>
                        <div className="item_umb"><p className="nom_subumb"> Nominee 1</p></div>
                        <div className="item_umb"><p className="nom_subumb"> Nominee 2</p></div>
                        <div className="item_umb"><p className="nom_subumb"> Nominee 3</p></div>
                    </div>
                    <Link className="link_reset" to='/dashnominee'><button className="umb_back"> Back To Category</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Dashvoting
