import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Welcreate extends Component {
    render() {
        return (
            <div>
                <div className="wrap_wcreate">
                    <img src="./img/kuria-new.png" alt="" className="wcreate_img" />

                    <div className="cae_details">
                        <p className="cae_head">Create Award Event</p>

                        <input className="wtitle_input" type="text" id="wtitle" name="wtitle" placeholder="Title"/>

                        <div className="wrap_span">
                            <span className="cal1">
                                <i class="fa fa-calendar-o cal_1"></i>
                                <p className="cal_p1">September 27,2021 10:00am</p>

                            </span>

                            <span className="cal2">
                                <i class="fa fa-calendar-o cal_1"></i>
                                <p className="cal_p1">October 27,2021 10:00am</p>
                            </span>
                        </div>
                        
                        

                        <select className="selector_create" name="cars" id="cars">
                            <option value="timezone">Timezone</option>
                            <option value="india">Indian</option>
                            <option value="europe">European</option>
                            <option value="aus">Australia</option>
                        </select>

                        <Link exact to='/Eventcategory'><button className="create_cae">CREATE</button></Link>
                    </div>

                    
                </div>
            </div>
        )
    }
}
