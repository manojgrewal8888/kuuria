import React, { Component } from 'react'
import Menu from './Menu';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
class Index extends Component {

    constructor() {
        super();
        this.state = { 
            events:'',
            showloader:true,
        };
      }
    componentWillReceiveProps(nextProps) { 
        if (nextProps.errors) {
          this.setState({
            errors: nextProps.errors
          });
        }
      }
  async componentDidMount() {
        await axios
            .post("/api/event/all_approve_events")
            .then(res => {
                if (res) {
                    this.setState({
                        events: res.data,
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




    render() {
        return (
            <div>
            
                <Menu/>

                <div className="firstsection">
                    <input className="first_search" type="text" placeholder="Search.." name="search" id="togler1" />
                    <i className="fa fa-search first_icon"></i>
                    <div className="spansearch" id="togler2" style={{'display':'none'}}>
                        <span className="searchspan"><i className="fa fa-trophy first_icon1"></i>AWARD EVENT NAME</span>
                        <span className="searchspan"><i className="fa fa-ticket first_icon2"></i>EVENT TICKET NAME</span>
                        <span className="searchspan"><i className="fa fa-user-circle-o first_icon3"></i>NOMINATION FORM NAME</span>
                        
                    </div>
                </div>

                <script>
                    
                </script>


                <div className="section_two">

                    <div className="btn_indexbrs">
                    <button className="brs_btn"><Link className="link_reset"   to='/'>Browse</Link></button>

                    </div>

                    {this.state.showloader &&  
                        <div className='text-center'><p className="loading">Loading Events</p></div>
                    }
                    <div className="cat-box">
                    {Object.entries(this.state.events).map((val, key) => {
                         return (
                            <>
                                <div className="cat-item"><h1 className="award_items"><Link className="link_reset"  to={{ pathname: `/dashnominee`, state: { event_id: val[1]._id } }}  >AWARD EVENT 1</Link></h1> </div>
                            </>
                         )
                    })}
                        
                       {/*  <div className="cat-item"><h1 className="award_items"><Link className="link_reset"  to='/awardevent'>AWARD EVENT 2</Link></h1> </div>  */}
                    </div>
                </div>

                <div className="third_section">

                    <img src="./img/associate.png" alt="" sizes="" className="associate_res" />
                    <img src="./img/digital-ocean-logo.png" alt="" className="ocean_res" />
                    <img src="./img/googlelog.png" alt="" className="google_res" />
                    <img src="./img/mtnlog.jpg" alt="" className="mtn_res" />
                    <img src="./img/paystacklog.png" alt="" className="pay_res" />
                </div>

                <div className="forth_secton">
                    <img src="./img/Group2.png" alt="" className="group_1" />
                    <img src="./img/Group2.png" alt="" className="group_1" />
                </div>


                <div className="fifth_section">
                    <div className="left_fifth">
                        <h3 className="subs_head">Subscribe To Our News Letter</h3>
                        <input className="fifth_input" type="text" placeholder="Email Address" name="Email Address" />
                        <button className="fifth_btntype" type="submit">Subscribe</button>

                    </div>
                    <div className="right_fifth">
                        <img src="./img/contact.png" alt="" className="contact_res" />
                    </div>
                </div>


                <div className="footer">
                    <div className="foot-flex">
                        <Link to='/'><img src="./img/kuria-new.png" alt="" className="foot-logo" /></Link>

                        <p className="foot_agend">Kuuria is the most powerful online Event setup and E-voting software in Africa.You don't believe us? Checkout for yourself.</p>

                        <ul className="foot-left">
                            <li className="leftf-list"><Link to="/" className="left-afoot">File For Nomination</Link></li>
                            <li className="leftf-list"><Link to="/ticket" className="left-afoot">Ticketing</Link></li>
                            <li className="leftf-list"><Link to="/" className="left-afoot">Reality Shows</Link></li>
                            <li className="leftf-list"><Link to="/" className="left-afoot">Support</Link></li>
                            <li className="leftf-list"><Link to="/login" className="left-afoot">Log In</Link></li>
                        </ul>

                        <ul className="foot-right">
                            <li className="rightf-list"><Link to="/" className="right-afoot">Terms Of Services</Link></li>
                            <li className="rightf-list"><Link to="/" className="right-afoot">Privacy Policy</Link></li>
                            <li className="rightf-list"><Link to="/" className="right-afoot">About</Link></li>
                            <li className="rightf-list"><Link to="/" className="right-afoot">Contact Us</Link></li>
                        </ul>

                        <Link to ='./' >
                            <img src="./img/playstore.png" alt="" className="footplay" />
                        </Link>

                        <Link to ='./empty' >
                            <img src="./img/appstore.svg" alt="" className="footplay2" />
                        </Link>

                        <div className="socialfoot">
                        <img className="mcseq" src="./img/mcseq.png" alt="" />
             
                        </div>
                    </div>

                    <p className="foot-slogan">Made With <i className="fa fa-heart heartfoot"></i> In Trasacco Valley, Ghana </p>
                </div>

            </div>
        )
    }
}


Index.propTypes = { 
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
  };
  const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
  });
  export default connect(
    mapStateToProps,
    {  }
  )(Index);