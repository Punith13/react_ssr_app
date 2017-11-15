import { combineReducers } from 'redux'; 
import userReducers from './userReducer'; 

let rootReducers = combineReducers({
    users: userReducers
}); 

export default rootReducers; 