import React from 'react';
import {Line, LineChart, Tooltip, XAxis, YAxis} from "recharts";
import css from "./charts.module.css";
import {Col, Row} from "reactstrap";

// Set prop types
type ChartsProps = {};

const monthlyRevenueData = [
    {name: 'Jan', profits: 2500, expenses: 500},
    {name: 'Feb', profits: 2600, expenses: 1000},
    {name: 'Mar', profits: 1400, expenses: 1200},
    {name: 'Apr', profits: 2900, expenses: 1800},
    {name: 'May', profits: 3100, expenses: 2000},
    {name: 'Jun', profits: 3300, expenses: 1700}
];

const employeeData = [
    {name: 'Jan', numberEmployees: 5},
    {name: 'Feb', numberEmployees: 6},
    {name: 'Mar', numberEmployees: 6},
    {name: 'Apr', numberEmployees: 8},
    {name: 'May', numberEmployees: 10},
    {name: 'Jun', numberEmployees: 12}
];

const taxData = [
    {name: 'Jan', totalTax: 250, taxReturn: 25},
    {name: 'Feb', totalTax: 260, taxReturn: 26},
    {name: 'Mar', totalTax: 140, taxReturn: 14},
    {name: 'Apr', totalTax: 290, taxReturn: 29},
    {name: 'May', totalTax: 310, taxReturn: 31},
    {name: 'Jun', totalTax: 330, taxReturn: 33}
];

class Charts extends React.Component<ChartsProps> {
    componentDidMount() {
    }

    componentDidUpdate() {
    }

    render() {

        return (
            <div>
                <h3>Charts</h3>
                <Row className="mb-4">
                    <Col sm={12} md={6}>
                        <LineChart className={css['chart-wrapper']} width={600} height={300} data={monthlyRevenueData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                            <Line type="monotone" dataKey="profits" stroke="#00D8FF" />
                            <Line type="monotone" dataKey="expenses" stroke="#7727FF"/>
                            <XAxis dataKey="name" />
                            <YAxis stroke="#3C3c3c" />
                            <Tooltip />
                        </LineChart>
                    </Col>
                    <Col sm={12} md={6}>
                        <LineChart className={css['chart-wrapper']} width={600} height={300} data={employeeData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                            <Line type="monotone" dataKey="numberEmployees" stroke="#00D8FF" />
                            <XAxis dataKey="name" />
                            <YAxis stroke="#3C3c3c" />
                            <Tooltip />
                        </LineChart>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                        <LineChart className={css['chart-wrapper']} width={1100} height={300} data={taxData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                            <Line type="monotone" dataKey="taxReturn" stroke="#00D8FF" />
                            <Line type="monotone" dataKey="totalTax" stroke="#7727FF"/>
                            <XAxis dataKey="name" />
                            <YAxis stroke="#3C3c3c" />
                            <Tooltip />
                        </LineChart>
                    </Col>
                </Row>


            </div>


        );
    };

}

// Set default props
Charts.defaultProps = {};

export default Charts;
