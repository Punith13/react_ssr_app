import { combineReducers } from 'redux'; 
import userReducers from './userReducer';
import authReducer from './authReducer';  

let rootReducers = combineReducers({
    users: userReducers,
    auth: authReducer
}); 

export default rootReducers; 