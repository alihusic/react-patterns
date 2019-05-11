import { createStore,compose, applyMiddleware } from "redux";
import rootReducer from "./redux/index";
import {createBrowserHistory} from "history";
import {routerMiddleware} from "react-router-redux";
import promise from "redux-promise-middleware";

const currentHistory = createBrowserHistory();

const middleware = applyMiddleware(routerMiddleware(currentHistory), promise);

const store = createStore(
    rootReducer(currentHistory),
    compose(middleware)
);

export default store;
