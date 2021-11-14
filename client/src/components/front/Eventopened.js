import React, { PureComponent } from 'react';
import { PieChart, Pie, Cell } from 'recharts';
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

const data = [
    { name: 'Group A', value: 900 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },

];
const COLORS = ['#ffffff', '#008cff', '#FFd600'];

export default class Opened extends PureComponent {
    static demoUrl = 'https://codesandbox.io/s/pie-chart-with-padding-angle-7ux0o';

    render() {
        return (
            <div>

                <div className="wrap_vwendor">
                    <Sidebar history={this.props.history} />



                    <div className="right_home">

                        <div className="open_lin1"></div>
                        <div className="open_lin2"></div>

                        <div className="date_format">
                            <div className="devide_opened"></div>

                            <i className="fa fa-calendar-o cal_left"></i>
                            <span className="date_o1">Start Date</span>
                            <span className="date_o2">September 27th,2021</span>
                            <span className="date_o3">10:00 AM</span>

                            <i className="fa fa-calendar-o cal_right"></i>
                            <span className="date_o4">End Date</span>
                            <span className="date_o5">October 27th,2021</span>
                            <span className="date_o6">10:00 AM</span>

                        </div>

                        <input className="input_opened" type="text" placeholder="//http karmatech.com" />

                       

                        <PieChart width={325} height={500} onMouseEnter={this.onPieEnter}>
                            <Pie
                                data={data}
                                cx={150}
                                cy={200}
                                innerRadius={120}
                                outerRadius={150}
                                fill="#8884d8"
                                paddingAngle={5}
                                dataKey="value"
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                        </PieChart>

                     <div className="spans_ope">
                         <div className="one_op1"><span className="open_spv"><i className="fa fa-circle white_cop"></i>Votes</span> </div>
                         <div className="one_op2"><span className="open_spv2"><i className="fa fa-circle blue_cop"></i>Nominee</span> </div>
                         <div className="one_op3"><span className="open_spv3"><i className="fa fa-circle yellow_cop"></i>Category</span> </div>
                     </div>


                    </div>
                </div>
            </div>
        );
    }
}
