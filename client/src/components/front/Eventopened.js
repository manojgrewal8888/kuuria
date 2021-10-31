import React, { PureComponent } from 'react';
import { PieChart, Pie,Cell } from 'recharts';
import { Link } from "react-router-dom";

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

        <div className="contain_home">
            <div className="left_home">
                <img src="./img/kuria-new.png" alt="" className="event_img" />
                <Link className="link_reset" to='/eventopened'><i className="fa fa-home home_icon home_iconsm"></i><span className="only_edash">Dashboard</span></Link>
                <Link className="link_reset" to='/settinggen'><i className="fa fa-gear home_icon"></i></Link>
                <Link className="link_reset" to='/category'><i className="fa fa-th home_icon"></i></Link>
                <Link className="link_reset" to='/category'><i className="fa fa-trash home_icon"></i></Link>
                
            </div>
                    
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

            <i className="fa fa-circle cwhite"></i>
                <span className="vot_count">Voter</span>

                <i className="fa fa-circle cblue"></i>
                <span className="nomi_count">Nominee</span>

                <i className="fa fa-circle cyellow"></i>
                <span className="categories_count">Category</span>

                <PieChart width={400} height={700} onMouseEnter={this.onPieEnter}>
                    <Pie
                    data={data}
                    cx={150}
                    cy={480}
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

                <span className="count_x1">400</span><span className="count_x2">70</span><span className="count_x3">120</span>


            </div>
        </div>
    </div>
    );
  }
}
