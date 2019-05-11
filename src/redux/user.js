import {fulfilled, fulfilledState, initState, pending, pendingState, rejected, rejectedState} from "./middleware";


export const GET_USER = "GET_USER";
export const CLEAR_USER = "CLEAR_USER";

export default function (state = initState, action) {
    switch (action.type) {
        case GET_USER:
            return {...state, user: action.payload };
        default:
            return state;
    }
}

export function logout(state = initState, action) {
    switch (action.type) {
        case CLEAR_USER:
            return {...state, user: undefined};
        default:
            return state;
    }
}


export const getUser = () => ({
    type: GET_USER,
    payload: "Authenticated"
});

export const clearUser = () => ({
    type: CLEAR_USER,
    payload: {user: undefined, test: "DADAD"}
});
