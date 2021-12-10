import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from "./Sidebar";
import Logout from "./Logout";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
    BarChart, Bar, XAxis, YAxis,
    CartesianGrid
} from 'recharts';
import Hamburgerone from './ham1';
import Hamburgertwo from './hemtwo';
import Extramenu from './Extramenu';



// Sample data
const data = [
    { name: 'A', x: 30, y: 70, z: 0 },
    { name: 'B', x: 50, y: 50, z: 0 },
    { name: 'C', x: 20, y: 80, z: 0 },
    { name: 'D', x: 40, y: 60, z: 0 },
    { name: 'E', x: 50, y: 50, z: 0 },
    { name: 'F', x: 50, y: 50, z: 0 },
    { name: 'G', x: 50, y: 50, z: 0 },
    { name: 'H', x: 50, y: 50, z: 0 },
    { name: 'I', x: 50, y: 50, z: 0 },
    { name: 'I', x: 50, y: 50, z: 0 },
    { name: 'I', x: 50, y: 50, z: 0 },
    { name: 'I', x: 50, y: 50, z: 0 },
    { name: 'I', x: 50, y: 50, z: 0 },
    { name: 'I', x: 50, y: 50, z: 0 },
    { name: 'I', x: 50, y: 50, z: 0 },
];

class Revenu extends Component {
    constructor() {
        super();
        this.state = {
        };
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }
    componentDidMount() {
        if (this.props.auth.isAuthenticated == false) {
            this.props.history.push("/login");
        }
    }
    render() {
        return (
            <div>
                <div className="wrap_vwendor">
                    <Sidebar history={this.props.history} />
                    <Hamburgerone />
                    <Hamburgertwo />

                    <div className="right_vendor">
                    <Extramenu history={this.props.history} />
                        <div className="dropmenu_sidebar">
                            <div className="menusidebar">
                                <button className="dropbtnzsidebar"><i className='fas fa-list'></i></button>
                                <div className="dropdown-contentside">
                                    <Link className="link_resetmen" to='/dashboard'>Dashboard</Link>
                                    <Link className="link_resetmen" to='/manage_questions'>Manage Questions</Link>
                                    <Link className="link_resetmen" to='/manage_ticket'>Manage Tickets</Link>
                                    <Link className="link_resetmen" to='/massages'>Massages</Link>
                                    <Link className="link_resetmen" to='/process_var'>Varification</Link>
                                    <Link className="link_resetmen" to='/nomination_form'>Nomination Form</Link>
                                    <Link className="link_resetmen" to='/manage_events'>Manage Events</Link>
                                </div>
                            </div>

                        </div>
                        <div className="right_subven">
                           {/*  <Logout history={this.props.history} /> */}


                            <div className="sales_wr">
                                <p className="sal_pra">SALES</p>
                                <span className="sal_span">$ 25000</span>

                            </div>

                            <div className="btn_salewr">
                                <Link className="lix_btx" exact to='/'><button className="vote_sal">Votes</button></Link>
                                <Link className="lix_btx" exact to='/'><button className="vote_sal">Tickets</button></Link>
                            </div>

                            <p className="vote_datasal">Votes Data for the period. Each Bar represents a single day.</p>

                            <div className="wrapchart_rev">
                                <div className="chrt_rev">
                                    <BarChart className="rewrapx" width={400} height={200} data={data} >
                                        <CartesianGrid />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Bar dataKey="x" stackId="a" fill="#ffd600" />
                                        <Bar dataKey="y" stackId="a" fill="#ffffff" />
                                    </BarChart>
                                    <a href='javascript(void)' className="prev" onclick="plusSlides(-1)">&#10094;</a>
                                    <a href='javascript(void)' className="next" onclick="plusSlides(1)">&#10095;</a>
                                </div>

                                <div className="stat_chart">
                                    <div className="wrap_tbx">
                                        <table className="table_rev" >
                                            <tr>
                                                <th>Votes<i className="fa fa-caret-down crt_tb" aria-hidden="true"></i></th>

                                            </tr>
                                            <tr className="trtabdat">
                                                <td className="datetab">01 Sep</td>
                                                <td className="pricxetab">70 Cedis</td>

                                            </tr>
                                            <tr className="trtabdat">
                                                <td className="datetab">01 Sep</td>
                                                <td className="pricxetab">70 Cedis</td>

                                            </tr>

                                            <tr className="trtabdat">
                                                <td className="datetab">01 Sep</td>
                                                <td className="pricxetab">70 Cedis</td>

                                            </tr>

                                            <tr className="trtabdat">
                                                <td className="datetab">01 Sep</td>
                                                <td className="pricxetab">70 Cedis</td>

                                            </tr>

                                            <tr className="trtabdat">
                                                <td className="datetab">01 Sep</td>
                                                <td className="pricxetab">70 Cedis</td>

                                            </tr>

                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Revenu.propTypes = {
    auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth
});
export default connect(
    mapStateToProps,
    {}
)(Revenu);