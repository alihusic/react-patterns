import React from 'react';
import { NavLink } from 'react-router-dom'
import css from './sidebar.module.css';
import * as classnames from "classnames";
import logo from "./logo.png";
import '../../../node_modules/hamburgers/dist/hamburgers.min.css';
import {routes} from "../../AppRouter";
import connect from "react-redux/es/connect/connect";
import {bindActionCreators} from "redux";
import {clearUser, getUser} from "../../redux/user";

// Set prop types
type SidebarProps = {};

class Sidebar extends React.Component<SidebarProps> {
    constructor(props) {
        super(props);

        this.state = {
            sidebarIsOpen: false
        };
    }

    toggle = (key) => () => {
        const fullKey = `${key}IsOpen`;
        this.setState({ [fullKey]: !this.state[fullKey] });
    };

    componentDidMount() {
        this.unlisten = this.props.history.listen( location =>  {
            console.log("CHANGING SIDEBAR");
            this.toggle('sidebar')();
        });
    }

    componentWillUnmount() {
        this.unlisten();

    }


    render() {
        const collapsed = this.state.sidebarIsOpen ? "" : "collapsed";
        const active = this.state.sidebarIsOpen ? "is-active" : "";
        return (
            <nav id="sidebar" className={classnames("position-relative p-4", collapsed, css.navigation)}>
                <button onClick={this.toggle('sidebar')} className={classnames("hamburger hamburger--slider", active, css.toggle)} type="button">
                    <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                    </span>
                </button>
                <div id="sidebar-content" className="d-flex flex-column">
                    <NavLink className={css['logo-wrapper']} to="/">
                        <img className={css.logo} src={logo} />
                    </NavLink>

                    <div className="d-flex flex-column" >
                        {routes.map(route => {
                            return !route.public ? <NavLink key={route.path} exact={true} to={route.path} activeClassName={css['link-active']} className={css.link}>{route.label} </NavLink> : undefined;
                        })}
                        <button onClick={this.props.clearUser} className={css.logout}>
                            Logout
                        </button>
                    </div>

                </div>
            </nav>
        );
    };

}

// Set default props
Sidebar.defaultProps = {
    history: {}
};

function mapState(state){
    return {
        user: state.user
    }
}


function mapActions(dispatch) {
    return bindActionCreators({
        clearUser
    }, dispatch);
}

export default connect(mapState, mapActions)(Sidebar);
