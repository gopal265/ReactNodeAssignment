import {
    FAIL_GET_SUSER,
    FAIL_GET_USERS,
    REQUEST_GET_SUSER,
    REQUEST_GET_USERS,
    SELECTPAGE,
    SUCCESS_GET_SUSER,
    SUCCESS_GET_USERS,
} from '../constants/userConstants';

// Reducer for managing user list
export const getUsers = (state = { loading: false, users: [], error: null }, action) => {
    switch (action.type) {
        case REQUEST_GET_USERS:
            return {
                ...state,
                loading: true,
            };
        case SUCCESS_GET_USERS:
            return {
                ...state,
                loading: false,
                users: action.payload,
            };
        case FAIL_GET_USERS:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

// Reducer for managing a single user
export const getSingleUser = (state = { loading: false, user: null, error: null }, action) => {
    switch (action.type) {
        case REQUEST_GET_SUSER:
            return {
                ...state,
                loading: true,
            };
        case SUCCESS_GET_SUSER:
            return {
                ...state,
                loading: false,
                user: action.payload,
            };
        case FAIL_GET_SUSER:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

// Reducer for managing the selected page index
export const selectPage = (state = { index: 0 }, action) => {
    switch (action.type) {
        case SELECTPAGE:
            return {
                ...state,
                index: action.payload,
            };
        default:
            return state;
    }
};
