import React, { useState,Component } from 'react';
import Modal from 'react-modal';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import axios from "axios";
const percentage = 1200;
const percentage1 = 1800;
 
class Dashvoting extends Component {
/*     const [value, setValue] = useState()
    const [modalIsOpen, setModalIsOpen] = useState(false); */
    constructor() {
        super();
        this.state = {
            event:'',
            showPopup: false,
            showloader: true,
            openvote:true,
            nominee:[]
        };
    }
    componentWillReceiveProps(nextProps) {

    }
    setValue = e => {
        this.setState({
            value: e.target.value, 
        });
    }
    setpersonal = e => {
        this.setState({
            personal: true, 
            openvote: false, 
            pricenvote: false, 
            votesubmit: false
        });
    }
    gotoVote = e => {
        this.setState({
            personal: false, 
            openvote: true, 
            pricenvote: false, 
            votesubmit: false
        });
    }
    proceedVote = e => {
        this.setState({
            pricenvote: true, 
            personal: false, 
            openvote: false, 
            votesubmit: false
        });
    }
    gotoPersonal = e => {
        this.setState({
            pricenvote: false, 
            personal: true, 
            openvote: false, 
            votesubmit: false
        });
    }
    vote_sub = e => {
        this.setState({
            votesubmit: true, 
            pricenvote: false, 
            personal: false, 
            openvote: false, 
        });
    }
    setModalIsOpen = e => {
        if(this.state.showPopup == true){
            this.setState({
                showPopup: false,
                openvote:true ,
                personal: false, 
                pricenvote: false, 
                votesubmit: false, 
            });
        }else{
            this.setState({
                showPopup: true,  
            });
        }
    }
    async componentDidMount() { 
        if(this.props.location.state && this.props.location.state.cat_id !=''){  
            var cat_id = this.props.location.state.cat_id; 
            var event_id = this.props.location.state.event_id; 
            await axios
                .post("/api/nominee/category_nominee", {cat_id:cat_id})
                .then(response => {
                    if (response) {
                        this.setState({
                            nominee: response.data,
                            showloader: false
                        })
                    } 
                })
                .catch(err =>
                    this.setState({
                        showloader: false
                    })
                );
                await axios
                .post("/api/event/viewevent", {event_id:event_id})
                .then(res => {
                    if (res) {
                        console.log(res.data)
                        this.setState({
                            event: res.data,
                            showloader: false
                        })
                    } 
                })
                .catch(err =>
                    this.setState({
                        showloader: false
                    })
                );
        }
    }
    render() {



        return (
        <div>

            <div className="nav_umb">
            <Link to='/'><img src="./img/kuria-new.png" alt="" className="nomin" /></Link>
                <h1 className="umb_heading"> 
                 
                        {this.state.event.eventname ?? ''}</h1>
                        {this.state.showloader &&  
                            <div className='text-center'><h4 className="loading">Loading Event</h4></div>
                        }
            </div>
            <div className="umb_contain">
                <div className="umb_title">
                    <p className="progress_umb"> 
                        {this.state.event.eventname == 2 ? 'Nomination' : 'Voting'} In Progress</p>
                    <p className="date_umb"> 
                        {this.state.event.start_date ?? ''} - {this.state.event.end_date ?? ''}</p>
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
                            <div className='link_reset' >
                                <button className="umb_check">Check Vote</button>
                            </div>
                        </div>
                    </div>

                    <p className="select_umbp">Select Category To View Nominee And Vote</p>

                    <div className="flex_umb">
                        <div className="item_umb">
                            <button className="nom_subumb" onClick={this.setModalIsOpen} >
                                nominee 1
                            </button>
                            <Modal isOpen={this.state.showPopup} onRequestClose={this.setModalIsOpen}>
                            {this.state.openvote &&
                                <div id="voteper">
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
                                            <button  onClick={this.setpersonal} className="vote_check">VOTE</button>
                                            <button onClick={this.setModalIsOpen} className="back_check">Back To Nominee</button>
                                        </div>
                                    </div>

                                </div>}

                                <div id="votepr">
                                {this.state.personal &&
                                    <div className="rightv_browse">
                                        <p className="fill_personal">Fill In Personal Information</p>
                                        <input className="input_person" type="text" name="" id="" placeholder="Name" />
                                        <input className="input_person" type="email" name="" id="" placeholder="E_mail" />
                                        <div className="resetx">
                                            <PhoneInput
                                                defaultCountry="ind"
                                                value={this.state.value}
                                                onChange={this.setValue}
                                                inputClass="inputmod"
                                                buttonClass="btnxmod"
                                                containerClass="lcontainxmod"
                                                dropdownClass="dropxmod"
                                                searchClass="searchxmod"
                                            />
                                        </div>
                                        <div className="wrapx_btnp">
                                            <button onClick={this.gotoVote} className="back_person">Back</button>
                                            <button onClick={this.proceedVote} className="proceed_person">Proceed</button>
                                        </div>

                                    </div>}


                                    {this.state.pricenvote &&
                                    <div id="pricenvote">
                                        <div className="midpopp_browse">
                                            <p className="pricevote_head">Prices & Votes</p>
                                            <select className="price_select" name="" id="" placeholder="Choose Price and Number of Votes">
                                                <option value="">Choose Price and Number of Votes</option>
                                                <option value="">99$ 4 votes</option>
                                                <option value="">99$ 4 votes</option>
                                                <option value="">99$ 4 votes</option>
                                            </select>

                                            <div className="wrap2btnx">
                                                <button onClick={this.gotoPersonal}  className="back_personxx">Back</button>
                                                <button onClick={this.vote_sub}  className="proceed_personxx">Proceed</button>

                                            </div>

                                        </div>
                                    </div>}
                                </div>

                                {this.state.votesubmit &&
                                <div id="submited_pop">
                                    <div className="subcon_wrap">
                                        <img src="./img/conf.png" alt="" className="subcon_im1" />
                                        <img src="./img/highfive.png" alt="" className="subcon_im2" />
                                        <p className="vote_submitconf">Vote Submitted</p>
                                    </div>
                                </div>}


                                {this.state.createcat &&
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
                                </div>}

                                {this.state.deleteevent &&
                                <div id="dleteevn">
                                    <div className="wrap_ddeleteeven">
                                        <p className="delhead_pop">Delete Event</p>

                                        <p className="warningdel">Are you sure you want to delete this Event “Event name” ? This action is irreversible.</p>

                                        <button className="delwarteen"><i className="fa fa-trash del_colo"></i>Delete</button>
                                    </div>
                                </div>}


                                {this.state.eventdetail &&
                                <div className="double_prog">

                                    <div className="evenbtn_doublep">
                                        <button className="btn_doublep">EVENTS</button>
                                    </div>


                                    <div className="double_prog1">
                                        <div className="item_doublep">
                                            <CircularProgressbar
                                                className="mod_doublep1"
                                                value={4000}
                                                text={`${percentage}votes`}
                                                styles={buildStyles({


                                                    textSize: '10px',
                                                    pathTransitionDuration: 0.5,
                                                    textColor: '#ffd600',
                                                    trailColor: '#ffd600',
                                                    backgroundColor: '#ffd600',
                                                    pathColor: '#ffd600',
                                                })}
                                            />
                                            <span className="lil_doubp">GHS 12000</span>
                                        </div>



                                        <div className="item_doublep">
                                            <CircularProgressbar
                                                className="mod_doublep1"
                                                value={700}
                                                text={`${percentage}Ticket`}
                                                styles={buildStyles({


                                                    textSize: '10px',
                                                    pathTransitionDuration: 0.5,
                                                    textColor: '#008CFF',
                                                    trailColor: '#008cff',
                                                    backgroundColor: '#008cff',
                                                    pathColor: '#008cff',
                                                    strokeLinecap: "butt",
                                                })}
                                            />

                                            <span className="lil_doubp2">GHS 12000</span>
                                        </div>

                                    </div>

                                    <table className="table_doup">

                                        <tr className="tabledouprow">
                                            <td className="tabledouprow1">Category 1</td>
                                            <td className="tabledouprow2">GHS 1000</td>

                                        </tr>

                                        <tr className="tabledouprow">
                                            <td className="tabledouprow1">Category 1</td>
                                            <td className="tabledouprow2">GHS 1000</td>

                                        </tr>

                                        <tr className="tabledouprow">
                                            <td className="tabledouprow1">Category 1</td>
                                            <td className="tabledouprow2">GHS 1000</td>

                                        </tr>

                                        <tr className="tabledouprow">
                                            <td className="tabledouprow1">Category 1</td>
                                            <td className="tabledouprow2">GHS 1000</td>

                                        </tr>

                                        <tr className="tabledouprow">
                                            <td className="tabledouprow1">Category 1</td>
                                            <td className="tabledouprow2">GHS 1000</td>

                                        </tr>
                                        <div className="dot-resizedpro">
                                            <span className="dot" onClick="currentSlide(1)"></span>
                                            <span className="dot" onClick="currentSlide(2)"></span>
                                            <span className="dot" onClick="currentSlide(3)"></span>

                                        </div>
                                    </table>

                                </div>
                                }



                                {/* <div className="demspace"></div>  */}
                            </Modal>
                        </div>
                       {/*  <div className="item_umb"><p className="nom_subumb"> Nominee 2</p></div>
                        <div className="item_umb"><p className="nom_subumb"> Nominee 3</p></div>
                        <div className="item_umb"><p className="nom_subumb"> Nominee 1</p></div>
                        <div className="item_umb"><p className="nom_subumb"> Nominee 2</p></div>
                        <div className="item_umb"><p className="nom_subumb"> Nominee 3</p></div> */}
                    </div>
                    <Link className="link_reset" to='/dashnominee'><button className="umb_back"> Back To Category</button></Link>
                </div>
            </div>
        </div>
    )
}
}
Dashvoting.propTypes = {
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});
export default connect(
    mapStateToProps,
    {}
)(Dashvoting); 
