import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Awardevent extends Component {
    render() {
        return (
            <div>
                 <div className="wrap-tickets">

                    <p className="ticket-heading">TICKETS</p>

                    <div className="event_btn">
                        <Link to="/ticket" className="browse-a">
                            Award Event 1
                        </Link>
                    </div>

                    <div className="wrap_eventlog">
                        <h1 className="event_heading">EVENT LOGO</h1>

                        <p className="hostp">HOSTS</p>
                        <div className="wrap_host">
                            <p className="lefthost">DOE NATHANIEL</p>
                            <div className="vlx"></div>
                            <p className="righthost">SEDUDZI CYRIL</p>
                        </div>

                        <div className="vanueflex">
                            <p className="vanue">VENUE:</p>
                            <p className="sub_vanue">ACCRA SPORTS STADIUM</p>
                        </div>

                        <p className="vanuetym">20:00 GMT</p>

                        <p className="abs_date">7TH OCT</p>
                        <p className="abs_year">2021</p>

                        <div className="dotted_line"></div>

                        <select className="selector_eventz" name="ccode" id="ccode">
                            <option className="option_event" value="cides">VIP [90 CEDIS]</option>
                            <option className="option_event" value="cides">VIP [90 CEDIS]</option>
                            <option className="option_event" value="cides">VIP [90 CEDIS]</option>
                            <option className="option_event" value="cides">VIP [90 CEDIS]</option>
                            <option className="option_event" value="cides">VIP [90 CEDIS]</option>
                            
                        </select>   
                        <div className="radio_eventrez">
                            <input className="radio_evevnt" type="radio" id="mm" name="money" value="mobile"/>
                                <label className="label_evevnts" for="mobile">MOBILE MONEY</label>
                            <input className="radio_evevnt1" type="radio" id="visa" name="money" value="visa"/>
                                <label className="label_evevnts" for="visa">VISA</label>

                        </div>

                       <button className="buybtn"> <Link className="link_reset"  to="/ticket"> BUY TICKET </Link></button>

                    </div>

                 </div>
            </div>
        )
    }
}
