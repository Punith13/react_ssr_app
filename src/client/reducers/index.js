import { combineReducers } from 'redux'; 
import userReducers from './userReducer';
import authReducer from './authReducer';  
import adminReducer from './adminReducer';

let rootReducers = combineReducers({
    users: userReducers,
    auth: authReducer, 
    admins: adminReducer
}); 

export default rootReducers; 