import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import currentUserReducer from './currentUser'
import usersReducer from './users';

const store = createStore(combineReducers({
    users: usersReducer,
    currentUser: currentUserReducer
})
    ,composeWithDevTools()
);

export default store;