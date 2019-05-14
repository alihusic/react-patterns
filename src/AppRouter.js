import React, {Component, Fragment} from 'react';
import {Router, Route, Switch, Redirect} from 'react-router';
import {createBrowserHistory} from 'history';
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import * as classnames from "classnames";
import Charts from "./components/Charts/Charts";
import {bindActionCreators} from "redux";
import {clearUser, getUser} from "./redux/user";
import {connect} from "react-redux";
import Login from "./components/Login/Login";
import Tables from "./components/Tables/Tables";
import {ToastContainer} from "react-toastify";
import Settings from "./components/Settings/Settings";
import Footer from "./components/Footer/Footer";


const history = createBrowserHistory();

const loginRoute = {
    path: "/login",
    exact: true,
    component: Login,
    guestOnly: true,
    label: "Login"
};

export const routes = [
    {
        path: "/",
        exact: true,
        authenticated: true,
        component: Home,
        label: "Home"
    },
    {
        path: "/about",
        exact: true,
        authenticated: true,
        public: true,
        component: About,
        label: "About"
    },
    {
        path: "/charts",
        exact: true,
        authenticated: true,
        component: Charts,
        label: "Charts"
    },
    {
        path: "/tables",
        exact: true,
        authenticated: true,
        component: Tables,
        label: "Tables"
    },
    {
        path: "/settings",
        exact: true,
        authenticated: true,
        component: Settings,
        label: "Settings"
    },
    loginRoute
];



class AppRoute extends Component {

    componentDidMount() {
        this.props.getUser();
    }

    renderRoutes() {
        const authenticated = this.props.user.auth;
        if (authenticated) {
            return <Switch>
                {routes.map(route => {
                    return route.authenticated || route.public ? <Route key={route.path} path={route.path} exact component={route.component}/> : undefined
                })}
                <Redirect to={"/"} />
            </Switch>
        } else {
            return <Switch>
                {routes.map(route => {
                    return route.public || route.guestOnly ? <Route key={route.path} path={route.path} exact component={route.component}/> : undefined
                })}
                <Redirect to={loginRoute.path} />
            </Switch>
        }
    }

    render() {
        return (
            <Fragment>
                <main className="main">
                    <Router history={history}>
                        <Sidebar history={history} />
                        <ToastContainer
                            position="top-left"
                            autoClose={false}
                            newestOnTop={false}
                            closeOnClick
                            pauseOnVisibilityChange
                            draggable
                        />
                        <Fragment>
                            <main className={classnames("container")}>
                                <Switch>
                                    {this.renderRoutes()}

                                </Switch>

                            </main>
                        </Fragment>


                    </Router>
                </main>
                <Footer />

            </Fragment>
        );
    }
}

function mapState(state){
    return {
        user: state.user
    }
}


function mapActions(dispatch) {
    return bindActionCreators({
        getUser,
        clearUser
    }, dispatch);
}


export default connect(mapState, mapActions)(AppRoute);

