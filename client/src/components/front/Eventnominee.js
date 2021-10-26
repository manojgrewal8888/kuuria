import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Eventnominee extends Component {
    render() {
        return (
            <div>
                  <div className="contain_home">
                    <div className="left_home">
                        <img src="./img/kuria-new.png" alt="" className="event_img" />
                        <i className="fa fa-home home_icon"></i>
                        <i className="fa fa-gear home_icon"></i>
                        <i className="fa fa-th home_icon"></i>
                        <i className="fa fa-trash home_icon"></i>
                    </div>
                    <div className="cat_box1"></div>
                    <div className="cat_box2"></div>
                    <div className="cat_box3"></div>
                    
                    <div className="right_home">
                        <i className="fa fa-trash ecat_icon"></i>
                        <p className="ecat_txt">Delete Category</p>

                        <input className="evevntcat_search" type="text" placeholder="Search Categories.." name="search" />
                        <i className="fa fa-search catsearch_icon"></i>

                        <div className="ecat_box">
                            <div className="ecat_item2"><p className="nom_cat">Nominee 1</p></div>
                            <div className="ecat_item2"><p className="nom_cat">Nominee 2</p></div>
                            <div className="ecat_item2"><p className="nom_cat">Nominee 3</p></div>
                            <div className="ecat_item2"><p className="nom_cat">Nominee 4</p></div>
                            <div className="ecat_item2"><p className="nom_cat">Nominee 5</p></div>
                            <div className="ecat_item2"><p className="nom_cat">Nominee 6</p></div>
                            <div className="ecat_item2"><p className="nom_cat">Nominee 7</p></div>
                            <div className="ecat_item2"><p className="nom_cat">Nominee 8</p></div>
                            <div className="ecat_item2"><p className="nom_cat">Nominee 9</p></div>
                            <div className="ecat_item2"><p className="nom_cat">Nominee 10</p></div>
                            <div className="ecat_item2"><p className="nom_cat">Nominee 11</p></div>
                            <div className="ecat_item2"><p className="nom_cat">Nominee 12</p></div>
                        </div>
                        <div className="slider_ecat">
                            <span className="dot ecat_dot" onclick="currentSlide(1)"></span>
                            <span className="dot ecat_dot" onclick="currentSlide(2)"></span>
                            <span className="dot ecat_dot" onclick="currentSlide(3)"></span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
