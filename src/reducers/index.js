import {
    combineReducers
} from 'redux';
import user from './user';
import login from './login';
import register from './register';
import app from './app';
import driver from './driver';

const rootReducer = combineReducers({
    app,
    user,
    login,
    register,
    driver
});

export default rootReducer;