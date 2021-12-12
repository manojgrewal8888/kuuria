import React, { PureComponent } from 'react';
import { ResponsiveContainer, PieChart, Cell, Pie, Legend } from 'recharts';
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import axios from "axios";
import Extramenu from './Extramenu';
import { addOrg } from "../../actions/eventActions";

class Settingorg extends PureComponent {

    constructor() {
        super();
        this.state = {
            event: [],
            email:'',
            name:'',
            user_id:'',
            showloader: true
        };
    }
    componentWillReceiveProps(nextProps) {

    }
    async componentDidMount() {
        if (this.props.auth.isAuthenticated == false) {
            this.props.history.push("/login");
        }
        var user_id =  localStorage.getItem('_id') ; 
        if (user_id) {
            await axios
                .post("/api/event/get_organisation", {user_id:user_id})
                .then(res => {
                    if (res) {
                        this.setState({
                            name: res.data.name,
                            subdomain: res.data.subdomain,
                            user_id: user_id,
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
    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };
    onSubmit = e => { 
        e.preventDefault(); 
        const userdata = {
            name: this.state.name,
            subdomain: this.state.subdomain,
            user_id: this.state.user_id, 
        };
        this.props.addOrg(userdata, this.props.history);  
    };
    

    render() {
        return (
            <div>

                <div className="wrap_vwendor">
                    <Sidebar history={this.props.history} />



                    <div className="right_home1">

                        <Extramenu history={this.props.history} />
                        <form noValidate onSubmit={this.onSubmit}> 
                        <div className="right_gen">

                            <img src="./img/bicon.png" alt="" className="seticon_resize" />
                            <p className="fa_user">Organisation Settings</p>

                            <div className="fauser_vl"></div>

                            <p className="genset_name">Organisation Name</p>

                            <p className="gen_spara">The Organisation Name Will Be Displayed To Voter When Logging In And Voting In Your Elections.</p>
                            <input type="text" name="suser" onChange={this.onChange} value={this.state.name} id="name" className="input_genset1" />

                            <p className="subdomain_p">Subdomain</p>
                            <p className="subdomain_p2">The Organisation Subdomain Acts As A Landing Page That List All The Active Elections Example: HTTPS://Orgname.kuuria.com</p>
                            <input type="text" name="suser" onChange={this.onChange} value={this.state.subdomain} id="subdomain" className="input_genset3" />

                            <button className="genorg_btn">Save</button>

                        </div>
                        </form>
                    </div>
                    <div className="setgen_box1"></div>
                    <div className="setorg_box"></div>
                    <div className="setgen_box3"></div>
                    <div className="setgen_box4"></div>
                    <div className="setgen_box5"></div>
                </div>
            </div>
        )
    }
}



Settingorg.propTypes = {
    addOrg: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});
export default connect(
    mapStateToProps,
    {addOrg}
)(Settingorg);
 
 
