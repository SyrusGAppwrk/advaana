import authActionTypes from "../actionTypes/auth";

let initialState = {
    isAuthenticated: false,
    userData: {}
};

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case authActionTypes.AUTH_INFO:
            return {
                ...state,
                isAuthenticated: action.payload,
            }
        case authActionTypes.AUTH_USER_INFO:
            return {
                ...state,
                userData: action.payload,
            }
        default:
            return state;
    }
}
