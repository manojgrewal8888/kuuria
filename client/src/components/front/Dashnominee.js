import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import axios from "axios";


const percentage = 66;

class Dashnom extends Component {
    constructor() {
        super();
        this.state = {
            categories: [],
            event: [],
            showloader: true
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
        if(this.props.location.state && this.props.location.state.event_id !=''){  
            var event_id = this.props.location.state.event_id; 
            await axios
                .post("/api/front/event_category", {event_id:event_id})
                .then(response => {
                    if (response) {
                        this.setState({
                            categories: response.data,
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
                <Link to='/'> <img src="./img/kuria-new.png" alt="" className="nomin" /></Link>
                    <h1 className="umb_heading">{this.state.event.eventname ?? ''} 
                     {this.state.showloader &&  
                            <div className='text-center'><p className="loading">Loading</p></div>
                        }</h1>
                </div>
                <div className="umb_contain">
                    <div className="umb_title">
                        <p className="progress_umb">{this.state.event.eventname == 2 ? 'Nomination' : 'Voting'} In Progress</p>
                        <p className="date_umb">  
                        {this.state.showloader &&  
                            <div className='text-center'><p className="loading">Loading</p></div>
                        }
                        {this.state.event.start_date ?? ''} - {this.state.event.end_date ?? ''}</p>
                    </div>
                </div>

                <div className="wrapnom_umb">
                    <div className="wrapinner_nom">
                        <input className='search-inputdash_nom' type="text" placeholder="Search  Nominee" name="search" />
                        <i className="fa fa-search umb2-search"></i>


                        <p className="select_umbp">Select Category {this.state.event.eventname == 2 ? 'To File For Nomination' : 'To Vote'} </p>
                        {this.state.showloader &&  
                            <div className='text-center'><p className="loading">Loading</p></div>
                        }
                        <div className="cat-box">
                        {Object.entries(this.state.categories).map((val, key) => {
                            return (
                                <>
                        <div className="fle x_umb">
                            <div className="item_umb"><Link className="link_reset" to={{ pathname: `/dashvote`, state: { cate_id: val[1]._id,event_id:this.state.event._id } }}><p className="nom_subumb"> {val[1].title ?? ''} </p></Link></div>
                             {/*    <div className="item_umb"><Link className="link_reset" to='/dashvote' ><p className="nom_subumb"> Category 2</p></Link></div> */} 
                        </div>
                        </>
                        )})}

                    </div>
                </div>
                </div>


               {/*  <div className="umb_3rdsec">
                <CircularProgressbar value={percentage} text={`${percentage}%`} />;
                   
                    <p className="umbchart_2">Accepted Nomination</p>
                </div> */}
            </div>
        )
    }
}
Dashnom.propTypes = {   
  };
  const mapStateToProps = state => ({ 
  });
  export default connect(
    mapStateToProps,
    {  }
  )(Dashnom);