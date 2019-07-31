import { 
    REGISTERING_START, 
    REGISTERING_SUCCESS, 
    REGISTERING_FAILURE,
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE 
} from '../actions';

const initialState = {
    isLoading: false,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case REGISTERING_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case REGISTERING_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: ''
            }
        default:
            return state;
    }
}