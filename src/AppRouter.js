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
import Login from "./components/Login";

const history = createBrowserHistory();

const loginRoute = {
    path: "/login",
    exact: true,
    component: Login,
    public: true,
    label: "Login"
};

export const routes = [
    {
        path: "/",
        exact: true,
        component: Home,
        label: "Home"
    },
    {
        path: "/about",
        exact: true,
        component: About,
        label: "About"
    },
    {
        path: "/charts",
        exact: true,
        component: Charts,
        label: "Charts"
    },
    loginRoute
];



class AppRoute extends Component {

    async componentDidMount() {
        await this.props.getUser();
        console.log("CLEARING USER");
        this.props.clearUser();
    }

    render() {

        return (
            <Fragment>
                <main className="main">
                    <Router history={history}>
                        <Sidebar history={history} />
                            <Fragment>
                                <main className={classnames("container")}>
                                    <Switch>
                                        {!this.props.user &&
                                            <Fragment>
                                                <Route exact path={loginRoute.path} component={loginRoute.component} />
                                                <Redirect to={loginRoute.path} />
                                            </Fragment>
                                        }
                                        {routes.map(route => {
                                            return <Route key={route.path} path={route.path} exact component={route.component}/>
                                        })}
                                        <Redirect to={"/"} />
                                    </Switch>

                                </main>
                            </Fragment>

                    </Router>
                </main>

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

