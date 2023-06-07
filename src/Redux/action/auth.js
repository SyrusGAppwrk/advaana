import authActionTypes from '../actionTypes/auth';

export const setAuthUserData = (data) => (dispatch) => {
    dispatch({
        type: authActionTypes.AUTH_USER_INFO,
        payload: data,
    });
}

export const setAuthState = (data) => (dispatch) => {
    dispatch({
        type: authActionTypes.AUTH_INFO,
        payload: data,
    });
}