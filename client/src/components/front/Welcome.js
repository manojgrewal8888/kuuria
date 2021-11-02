 import React, { Component } from "react";
 import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { onNext } from "../../actions/ManagerActions";
class Welcome extends Component {
    constructor() {
        super();
        this.state = {
          event: "", 
          error:''
        };
         
    } 
    onNext = e => {
        e.preventDefault();
        if(this.state.event.length > 0){
            this.setState({ event: e.target.value }); 
            this.props.onNext(this.state.event);
            this.setState({ error: '' }); 
            this.props.history.push("/create");
        }else{
            console.log(this.state.event.length)
            this.setState({ error: 'Enter event name !!!' }); 
        }
      };
      setval = e => {
        if(e.target.value.length > 0){
            this.setState({ event: e.target.value }); 
        }else{
            this.setState({ event: '' }); 
        }
      };
    render() {
        return (
            <div>
                <div className="wrap-newevent">

                    <div className="new-logo">
                    <Link to="/dashboard"><img src="./img/kuria-new.png" alt="" className="logo-new"/></Link>
                    </div>

                    <div className="newevent-txt">
                        <h1 className="heding-newevent"> WeLCOME TO KuuRia! </h1>

                        <p className="newevent-para"> Get Started by Creating Your First Award and Event Scheme </p>
                    </div>

                    <div className="box-new"></div>
                    <div className="box-new1"></div>

                    <input type="text" onChange={this.setval} defaultValue={this.state.event ?? ''} name="event" id="event">
                    </input>

                           <div className='text-center'>{this.state.error}</div>
                    <div className="newevnt-btn">

                        <a  onClick={this.onNext} className="btn-animate"> 
                            <p className="btn-pra">NEXT</p>
                        </a>    

                    </div>



                </div>
            </div>
        )
    }
}

Welcome.propTypes = {
    onNext: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };
  const mapStateToProps = state => ({
    auth: state.auth
  });
  export default connect(
    mapStateToProps,
    { onNext }
  )(Welcome);