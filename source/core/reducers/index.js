// Core
import { combineReducers } from 'redux';

// Instruments
import counter from './counter';
import posts from './posts';
import users from './users';

export default combineReducers({
    counter,
    posts,
    users,
});
