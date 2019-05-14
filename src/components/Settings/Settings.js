import React from 'react';
import css from "./settings.module.css";
import {Button, Input} from "reactstrap";
import {createMessage} from "../Util/notification";
import * as classnames from "classnames";


// Set prop types
type SettingsProps = {};

const fields = [
    {
        key: 'firstName',
        label: 'First Name'
    }, {
        key: 'lastName',
        label: 'Last Name'
    },
    {
        key:'address',
        label: 'Address'
    }, {
        key:'zipcode',
        label: 'Zipcode'
    },{
        key:'city',
        label: 'City'
    }, {
        key:'country',
        label: 'Country'
    }
];

class Settings extends React.Component<SettingsProps> {
    constructor(props) {
        super(props);
        this.state = {
            firstName: 'Ali',
            lastName: 'Husic',
            address: 'Porodice Foht 27',
            zipcode: '71000',
            city: 'Sarajevo',
            country: 'Bosnia and Herzegovina',
            errors: {}
        }
    }

    handleInputChange = () => (e) => {
        const key = e.target.name;
        this.setState({ [key]: e.target.value });
    };

    handleSubmit = () => (e) => {
        e.preventDefault();
        createMessage("Successfully saved settings.");

    };

    render() {
        const {errors} = this.state;
        return (
            <div className="d-flex flex-column align-items-center">
                <h3>Settings</h3>
                <form className={css.form} onSubmit={this.handleSubmit()}>
                    {fields.map(field => {
                        return <div className={css["field-wrapper"]}>
                            <label htmlFor={field.key}>{field.label}</label>
                            <Input className={errors[field.key] && 'error'} value={this.state[field.key]} onChange={this.handleInputChange()} name={field.key} />
                            {errors[field.key] && <div className="error-message">{errors[field.key]}</div>}
                        </div>
                    })}
                    <Button className="theme-button w-100">Submit</Button>

                </form>
            </div>
        );
    };

}

// Set default props
Settings.defaultProps = {};

export default Settings;
