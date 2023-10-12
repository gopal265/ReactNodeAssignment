import {
    FAIL_GET_SUSER,
    FAIL_GET_USERS,
    REQUEST_GET_SUSER,
    REQUEST_GET_USERS,
    SELECTPAGE,
    SUCCESS_GET_SUSER,
    SUCCESS_GET_USERS,
} from '../constants/userConstants';

import * as api from '../api/user';

// Action creator for fetching all users
export const getUsers = () => async (dispatch) => {
    try {
        dispatch({ type: REQUEST_GET_USERS }); // dispatch  action we if request to get users
        const { data } = await api.getUsers();
        dispatch({
            type: SUCCESS_GET_USERS,
            payload: data.data,
            message: data.message,
            success: data.success,
        });  // dispatch action if we successfully fetch the users and store them in payload so reducer can change the state.
    } catch (error) {
        dispatch({ type: FAIL_GET_USERS, payload: 'Unable to Fetch the Users' }); // dispatch action if the fetch is failed.
    }
};

// Action creator for fetching a single user by ID
export const getSingleUser = (id) => async (dispatch) => {
    try {
        dispatch({ type: REQUEST_GET_SUSER });    // dispatch  action we if request to get user details
        const { data } = await api.getSingleUser(id);  
        dispatch({
            type: SUCCESS_GET_SUSER,
            payload: data.data,
            message: data.message,
            success: data.success,
        });   // dispatch action if we successfully fetch the user details and store them in payload so reducer can change the state.
    } catch (error) {

        dispatch({ type: FAIL_GET_SUSER, payload: 'Unable to Fetch User Data' }); // dispatch action if the fetch is failed.
    }
};

// Action creator for selecting a page
export const selectPage = (dispatch, data) => {
    dispatch({ type: SELECTPAGE, payload: data });  // dispatch action to update the index state in store based on the data we send.
};
