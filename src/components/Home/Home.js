import React, {Fragment} from 'react';
import Charts from "../Charts/Charts";
import Tables from "../Tables/Tables";


// Set prop types
type HomeProps = {};

class Home extends React.Component<HomeProps> {
    componentDidMount() {
    }

    componentDidUpdate() {
    }

    render() {

        return (
            <div>
                <h3>Dashboard</h3>
                <p>Welcome to the dashboard! Feel free to edit the structure and add/remove components.</p>
            </div>
        );
    };

}

// Set default props
Home.defaultProps = {};

export default Home;
