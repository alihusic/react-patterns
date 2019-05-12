import React from 'react';
import {Table} from "reactstrap";


// Set prop types
type TablesProps = {};

const testData = [
    {
        name: "Enver",
        lastName: "Hodzic",
        amount: 50,
        delivered: "Delivered"
    },
    {
        name: "Halil",
        lastName: "Begovic",
        amount: 35,
        delivered: "Not delivered"
    },
];

const tableHeaders = [
    {
        label: "Name",
        key: "name"
    },
    {
        label: "Last Name",
        key: "lastName"
    },
    {
        label: "Order amount",
        key: "amount"
    },
    {
        label: "Delivered",
        key: "delivered"
    }
];

class Tables extends React.Component<TablesProps> {
    componentDidMount() {
    }

    componentDidUpdate() {
    }

    render() {

        return (
            <Table>
                <thead className="thead-dark">
                    <tr>
                        {this.props.headers.map(header =>
                            <td>{header.label}</td>
                        )}
                    </tr>
                </thead>
                <tbody>
                {this.props.data.map(dataEntry =>
                    <tr>
                        {this.props.headers.map(header =>
                            <td>{dataEntry[header.key]}</td>
                        )}
                    </tr>
                )}

                </tbody>
            </Table>
        );
    };

}

// Set default props
Tables.defaultProps = {
    headers: tableHeaders,
    data: testData
};

export default Tables;
