import React, { Component } from 'react'
import { Link } from "react-router-dom";


export default class Eventcategory extends Component {
    render() {
        return (
            <div>
                  <div className="contain_home">
                    <div className="left_home">
                        <img src="./img/kuria-new.png" alt="" className="event_img" />
                        <Link className="link_reset" to='/eventopened'><i className="fa fa-home home_icon"></i></Link>
                        <Link className="link_reset" to='/eventsetting'><i className="fa fa-gear home_icon"></i></Link>
                        <Link className="link_reset" to='/eventcategory'><i className="fa fa-th home_icon"></i></Link>
                        <Link className="link_reset" to='/eventdelete'><i className="fa fa-trash home_icon"></i></Link>
                    </div>
                    <div className="cat_box1"></div>
                    <div className="cat_box2"></div>
                    <div className="cat_box3"></div>
                    
                    <div className="right_home">
                        <i className="fa fa-plus ecat_icon"></i>
                        <Link exact to='/Eventcatdelete'><p className="ecat_txt">NEW CATEGORY </p></Link>

                        <input className="evevntcat_search" type="text" placeholder="Search Categories.." name="search" />
                        <i className="fa fa-search catsearch_icon"></i>

                        <div className="ecat_box">
                            <div className="ecat_item"><p className="nom_cat">Category 1</p></div>
                            <div className="ecat_item"><p className="nom_cat">Category 2</p></div>
                            <div className="ecat_item"><p className="nom_cat">Category 3</p></div>
                            <div className="ecat_item"><p className="nom_cat">Category 4</p></div>
                            <div className="ecat_item"><p className="nom_cat">Category 5</p></div>
                            <div className="ecat_item"><p className="nom_cat">Category 6</p></div>
                            <div className="ecat_item"><p className="nom_cat">Category 7</p></div>
                            <div className="ecat_item"><p className="nom_cat">Category 8</p></div>
                            <div className="ecat_item"><p className="nom_cat">Category 9</p></div>
                            <div className="ecat_item"><p className="nom_cat">Category 10</p></div>
                            <div className="ecat_item"><p className="nom_cat">Category 11</p></div>
                            <div className="ecat_item"><p className="nom_cat">Category 12</p></div>
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
