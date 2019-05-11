import {combineReducers} from "redux";
import {connectRouter} from 'connected-react-router';
import user, { logout } from './user';

export default (history) => combineReducers({
    router: connectRouter(history),
    user,
    logout
});
