import React, {Fragment} from 'react';
import css from "./login.module.css";
import logo from "../Sidebar/logo.png";
import {Button, Input} from "reactstrap";
import {bindActionCreators} from "redux";
import {clearUser, getUser} from "../../redux/user";
import connect from "react-redux/es/connect/connect";
import {createMessage} from "../Util/notification";


// Set prop types
type LoginProps = {};

class Login extends React.Component<LoginProps> {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            errors: {}
        }
    }

    handleInputChange = () => (e) => {
        const key = e.target.name;
        this.setState({ [key]: e.target.value });
    };

    validateForm() {
        const errors = this.state.errors;
        let valid = true;
        if (this.state.username.length >= 3) {
            delete errors.username;
        } else {
            errors.username = "Username must be at least 3 characters long";
            valid = false;
        }
        if (this.state.password.length >= 3) {
            delete errors.password;
        } else {
            errors.password = "Password must be at least 3 characters long";
            valid = false;
        }
        this.setState({ errors });
        return valid;
    }

    handleSubmit = () => (e) => {
        e.preventDefault();
        const validated = this.validateForm();
        if (validated) this.props.getUser();
        createMessage("Successfully logged in.");
    };


    render() {
        const {username,errors, password} = this.state;
        return (
            <Fragment>
                <div className="d-flex mb-4 justify-content-center">
                    <img className={css.logo} src={logo} />
                </div>
                <div className="d-flex flex-column align-items-center">
                    <form className={css.form} onSubmit={this.handleSubmit()}>
                        <div className={css["field-wrapper"]}>
                            <label htmlFor="username">Username</label>
                            <Input className={errors.username && 'error'} value={username} onChange={this.handleInputChange()} name="username" />
                            {errors.username && <div className="error-message">{errors.username}</div>}
                        </div>
                        <div className={css["field-wrapper"]}>
                            <label htmlFor="password">Password</label>
                            <Input className={errors.password && 'error'} value={password} onChange={this.handleInputChange()} name="password" type="password" />
                            {errors.password && <div className="error-message">{errors.password}</div>}
                        </div>
                        <Button className="theme-button w-100">Log In</Button>
                    </form>
                </div>


            </Fragment>
        );
    };

}

// Set default props
Login.defaultProps = {};

function mapState(state){
    return {
        user: state.user
    }
}


function mapActions(dispatch) {
    return bindActionCreators({
        getUser
    }, dispatch);
}

export default connect(mapState, mapActions)(Login);
