import { 
    REGISTERING_START, 
    REGISTERING_SUCCESS, 
    REGISTERING_FAILURE,
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE 
} from '../actions';

const initialState = {
    isRegistering: false,
    isLoggingIn: false,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case REGISTERING_START:
            return {
                ...state,
                isRegistering: true,
                error: ''
            }
        case REGISTERING_SUCCESS:
            return {
                ...state,
                isRegistering: false,
                isLogginIn: true,
                error: ''
            }
        case LOGIN_START:
            return {
                ...state,
                isLoggingIn: true,
                error: ''
            }
        case LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload);
            
            return {
                ...state,
                isLoggingIn: false,
                error: ''
            }
        default:
            return state;
    }
}