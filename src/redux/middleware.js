export const pending = (action) => action + "_PENDING";
export const fulfilled = (action) => action + "_FULFILLED";
export const rejected = (action) => action + "_REJECTED";
export const pendingState = (state) => ({...state, sendingRequest: true, error: null});
export const rejectedState = (state, error) => ({...state, sendingRequest: false, error});
export const fulfilledState = (state, data) => ({...state, sendingRequest: false, error: null, data});
export const initState = {
    sendingRequest: false,
    error: null
};
