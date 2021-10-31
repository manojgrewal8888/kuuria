import React, { Component } from 'react'
import { Link } from "react-router-dom";



export default class Tiket extends Component {
    render() {
        return (
            <div>
               
                <div className="wrap-tickets">

                    <p className="ticket-heading">TICKETS</p>

                    

                        <input className='search-input' type="text" placeholder="Search  Tickets" name="search" />
                        <i className="fa fa-search ticket-search"></i>

                    

                    <div className="browse-btn">
                        <Link className="link_reset browse-a"  to="/ticketevent" >
                            Browse
                        </Link>
                    </div>

                    <div className="wrap-ticketbox">
                        <div className="item"><p className="award">AWARD EVENT 1</p></div>
                        <div className="item"><p className="award">AWARD EVENT 2</p></div>
                        <div className="item"><p className="award">AWARD EVENT 3</p></div>
                        <div className="item"><p className="award">AWARD EVENT 1</p></div>
                        <div className="item"><p className="award">AWARD EVENT 2</p></div>
                        <div className="item"><p className="award">AWARD EVENT 3</p></div>
                    </div>

                    <div className="dot-resize">
                        <span className="dot" onClick="currentSlide(1)"></span>
                        <span className="dot" onClick="currentSlide(2)"></span>
                        <span className="dot" onClick="currentSlide(3)"></span>

                    </div>

                </div>
            </div>
        )
    }
}
