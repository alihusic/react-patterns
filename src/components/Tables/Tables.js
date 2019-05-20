import React from 'react';
import {Table} from "reactstrap";
import css from './tables.module.css';
import * as classnames from "classnames";

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
    {
        name: "Ali",
        lastName: "Husic",
        amount: 99,
        delivered: "Not delivered"
    },
    {
        name: "John",
        lastName: "Snow",
        amount: 130,
        delivered: "Not delivered"
    },
    {
        name: "John",
        lastName: "Doe",
        amount: 150,
        delivered: "Delivered"
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
            <Table className={classnames(css.table, "table-striped")}>
                <thead className="thead-light">
                    <tr>
                        {this.props.headers.map(header =>
                            <th key={header.key}>{header.label}</th>
                        )}
                    </tr>
                </thead>
                <tbody>
                {this.props.data.map((dataEntry, index) =>
                    <tr key={`${dataEntry.name}-${index}`}>
                        {this.props.headers.map(header =>
                            <td key={header.key}>{dataEntry[header.key]}</td>
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
