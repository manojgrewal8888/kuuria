import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Menu from './Menu';

import PropTypes from "prop-types";
import { connect } from "react-redux";
import axios from "axios";

class TiketEve extends Component {

    
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
                <div className="wrap-tickets">

                    <p className="ticket-heading">TICKETS</p>  
                    <div class='d-flex mb-6'>
                        <input className='search-input'  type="text" placeholder="Search  Tickets" name="search" />
                        <i className="fa fa-search ticket-search"></i>  
                    </div>  
                        <div className="browse-btn">
                            <Link className="link_reset browse-a"  to="/ticket" >
                                Browse
                            </Link>
                        </div> 
                    <div className="wrap-ticketbox">
                     
                    <div className="cat-box">
                    {Object.entries(this.state.events).map((val, key) => {
                         return (
                            <>
                        <div className="item ticket_ detail"><p className="award"> <Link className="link_reset browse-a"  to="/ticketevent" >Ticket Name</Link></p></div>
                        </>
                         )
                    })} 

                        {/* <div className="item"><p className="award">AWARD EVENT 2</p></div>
                        <div className="item"><p className="award">AWARD EVENT 3</p></div>
                        <div className="item"><p className="award">AWARD EVENT 1</p></div>
                        <div className="item"><p className="award">AWARD EVENT 2</p></div>
                        <div className="item"><p className="award">AWARD EVENT 3</p></div> */}
                    </div>

                    <div className="dot-resize">
                    {this.state.showloader &&  
                        <div className='text-center'><p className="loading">Loading Events</p></div>
                    }
                        {/* <span className="dot" onClick="currentSlide(1)"></span>
                        <span className="dot" onClick="currentSlide(2)"></span>
                        <span className="dot" onClick="currentSlide(3)"></span>
 */}
                    </div>

                </div>
                </div>
            </div>
        )
    }
}


TiketEve.propTypes = { 
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
  )(TiketEve);