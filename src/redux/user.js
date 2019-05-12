import {fulfilled, fulfilledState, initState, pending, pendingState, rejected, rejectedState} from "./middleware";


export const GET_USER = "GET_USER";
export const CLEAR_USER = "CLEAR_USER";

export default function (state = initState, action) {
    switch (action.type) {
        case GET_USER:
            return {...state, ...action.payload };
        case CLEAR_USER:
            return {...state, ...action.payload};
        default:
            return state;
    }
}

export const getUser = () => ({
    type: GET_USER,
    payload: {auth: true}
});

export const clearUser = () => ({
    type: CLEAR_USER,
    payload: {auth: false}
});
