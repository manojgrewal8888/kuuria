import React, { Component } from "react"; 
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions"; 
import { Link } from "react-router-dom"; 
class Logout extends Component {
    constructor() {
        super(); 
        this.state = {
            route: ""
        };
    }
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser(this.props.history);
    };
    render() {  
        const { user } = this.props.auth;
        
        return (
            <>
                <a onClick={this.onLogoutClick} className='text-white'>
                    <div  className="logout_ven1"> 
                        <i  className="fa fa-sign-out "></i>
                    Log Out
                    </div>
                </a>
            </>
        )
    }
}
Logout.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth
});
export default connect(
    mapStateToProps,
    { logoutUser }
)(Logout);