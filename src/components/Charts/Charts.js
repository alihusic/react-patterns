import React from 'react';
import {Line, LineChart, Tooltip, XAxis, YAxis} from "recharts";


// Set prop types
type ChartsProps = {};

const data = [
    {name: 'Jan', y: 2500},
    {name: 'Feb', y: 2600},
    {name: 'Mar', y: 1400},
    {name: 'Apr', y: 2900},
    {name: 'May', y: 3100},
    {name: 'Jun', y: 3300}
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
                <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <Line type="monotone" dataKey="y" stroke="#00D8FF" />
                    <XAxis dataKey="name" />
                    <YAxis stroke="#3C3c3c" />
                    <Tooltip />
                </LineChart>
            </div>


        );
    };

}

// Set default props
Charts.defaultProps = {};

export default Charts;
