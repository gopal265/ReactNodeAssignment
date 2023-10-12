import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { getUsers, getSingleUser, selectPage } from '../reducers/userReducer';

// Combine your reducers into a single root reducer
const rootReducer = combineReducers({
    users: getUsers,
    user: getSingleUser,
    index: selectPage,
});

// Create the Redux store and apply the Redux Thunk middleware for handling asynchronous actions
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
