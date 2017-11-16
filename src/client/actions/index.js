export const FETCH_USERS = 'fetch_users'; 

export const fetchUsers = () => async (dispatch,getState,api) => {

    const res = await api.get('/users'); 
    dispatch({
        type: FETCH_USERS, 
        payload: res
    });
    
}

export const FETCH_CURRENT_USERS = 'fetch_current_users'; 

export const fetchCurrentUsers = () => async (dispatch,getState,api) => {

    const res = await api.get('/current_user'); 
    dispatch({
        type: FETCH_CURRENT_USERS, 
        payload: res
    });
    
}