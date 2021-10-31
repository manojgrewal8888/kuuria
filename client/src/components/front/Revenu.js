import React, { Component } from 'react';

import {
    BarChart, Bar, XAxis, YAxis,
    CartesianGrid
} from 'recharts';



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

export default class Revenu extends Component {
    render() {
        return (
            <div>
                <div className="wrap_vwendor">
                    <div className="left_vendor">
                        <div className="left_subven">
                            <img src="./img/kuria-new.png" alt="" className="res_venlogo" />

                            <i className="fa fa-home cus_vicon"></i>



                            <i className="fa fa-calendar-check-o cus_vicon"></i>

                            <div className="home_vendori3">
                                <i className="fa fa-ticket cus_vicon3"></i>
                                <span className="home_vender3">Manage Tickets</span>
                            </div>

                            <i className="fa fa-money cus_vicon"></i>
                            <i className="fa fa-comment cus_vicon"></i>
                            <i className="fa fa-bar-chart cus_vicon"></i>
                            <i className="fa fa-file-text-o cus_vicon"></i>

                        </div>
                    </div>

                    <div className="right_vendor">
                        <div className="right_subven">
                            <button className="logout_ven">
                                <i class="fa fa-sign-out"></i>
                                Log Out
                            </button>

                            <div className="sales_wr">
                                <p className="sal_pra">SALES</p>
                                <span className="sal_span">$ 25000</span>

                            </div>

                            <div className="btn_salewr">
                                <button className="vote_sal">Votes</button>
                                <button className="tiket_sal">Tickets</button>
                            </div>

                            <p className="vote_datasal">Votes Data for the period. Each Bar represents a single day.</p>

                            <div className="wrapchart_rev">
                                <div className="chrt_rev">
                                    <BarChart width={600} height={300} data={data} >
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
                                    <table className="table_rev" >
                                        <tr>
                                            <th>Votes<i class="fa fa-caret-down crt_tb" aria-hidden="true"></i></th>

                                        </tr>
                                        <tr>
                                            <td>Emil</td>
                                            <td>Tobias</td>
                                            
                                        </tr>
                                       
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
