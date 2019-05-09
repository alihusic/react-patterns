import React, {Component, Fragment} from 'react';
import {Router, Route} from 'react-router';
import createHistory from 'history/createBrowserHistory';
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import * as classnames from "classnames";
import Charts from "./components/Charts/Charts";

const history = createHistory();

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
];

class AppRoute extends Component {
    render() {

        return (
            <Fragment>
                <main className="main">
                    <Router history={history}>
                        <Sidebar/>
                        <Route render={({ location, history }) => (
                            <React.Fragment>
                                <main className={classnames("container")}>
                                    {routes.map(route => {
                                        return <Route path={route.path} exact component={route.component}/>
                                    })}
                                </main>
                            </React.Fragment>
                        )}
                        />
                    </Router>
                </main>

            </Fragment>
        );
    }
}


export default AppRoute;
