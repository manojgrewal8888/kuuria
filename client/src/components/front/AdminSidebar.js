import React, { Component } from "react"; 
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions"; 
import { Link } from "react-router-dom"; 
class AdminSidebar extends Component {
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

    componentDidMount(){
        if(this.props.history.location.pathname){
            this.setState({
                route: this.props.history.location.pathname
            });
        }
    }
    
    render() {  
        const { user } = this.props.auth;
        
        return (
            <>
                <div className="left_vendor">
                    <div className="left_subven">
                    <Link className="linx_ven" to="/"><img src="./img/kuria-new.png" alt="" className="res_venlogo" /></Link> 
                        <Link className="ven_under" to='/dashboard'>
                            <div className={this.state.route == '/dashboard' ? 'custom_btn1' : 'custom_btn0' }>
                                <i className="fa fa-home cus_vicon"></i>
                                <span className='menu_it_em1'>Dashboard</span>
                            </div>
                        </Link>  
                    </div>
                </div>
            </>
        )
    }
}
AdminSidebar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth
});
export default connect(
    mapStateToProps,
    { logoutUser }
)(AdminSidebar);