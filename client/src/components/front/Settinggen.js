import React, { PureComponent } from 'react';
import { ResponsiveContainer, PieChart, Cell, Pie, Legend } from 'recharts';
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import axios from "axios";
import Extramenu from './Extramenu';
import { updateuser } from "../../actions/eventActions";


class Settinggen extends PureComponent {

    constructor() {
        super();
        this.state = {
            event: [],
            email:'',
            name:'',
            showloader: true
        };
    }
    componentWillReceiveProps(nextProps) {

    }
    async componentDidMount() {
        if (this.props.auth.isAuthenticated == false) {
            this.props.history.push("/login");
        }
        var email = localStorage.getItem('email');
        var name = localStorage.getItem('name');
        this.setState ({
            email:email,
            name:name,
        });
    }
    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };
    onSubmit = e => {
        var user_id = localStorage.getItem('_id'); 
        e.preventDefault(); 
        const userdata = {
            name: this.state.name,
            email: this.state.email,
            user_id: user_id, 
        };
        this.props.updateuser(userdata, this.props.history);  
    };
    
    render() {
        const { errors } = this.state;
        return (
            <div>

                <div className="wrap_vwendor">
                    <Sidebar history={this.props.history} />



                    <div className="right_home1">

                        <Extramenu history={this.props.history} />

                        <form noValidate onSubmit={this.onSubmit}> 
                        <div className="right_gen">
                            <p className="fa_user">Profile Settings</p>
                            <div className="fauser_vl"></div>
                            <p className="genset_name">Name</p>
                            <p className="gen_spara">Your Name Or The Name Of The Primary Contact Of The Account{/* , Visit The <Link className="genset_link">Organisation Setting</Link> To Change Name Of The Organisation */}</p>
                            <input  onChange={this.onChange}  type="text" name="name" value={this.state.name ?? ''} id="name" className="input_genset1" />
                            <label className="label_genset" htmlFor="Email Address">Email Address</label>
                            <input  onChange={this.onChange}  type="email" id="email" name="email" className="input_genset2" value={this.state.email ?? ''} />
                            <button className="genset_btn">Save</button>
                        </div>
                        </form>
                    </div>
                    <div className="setgen_box1"></div>
                    <div className="setgen_box2"></div>
                    <div className="setgen_box3"></div>
                    <div className="setgen_box4"></div>
                    <div className="setgen_box5"></div>
                </div>
            </div>
        )
    }
}


Settinggen.propTypes = { 
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});
export default connect(
    mapStateToProps,
    {updateuser}
)(Settinggen);
 
