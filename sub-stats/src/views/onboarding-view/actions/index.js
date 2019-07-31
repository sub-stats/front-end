import axios from 'axios';

export const REGISTERING_START = 'REGISTERING_START';
export const REGISTERING_SUCCESS = 'REGISTERING_SUCCESS';
export const REGISTERING_FAILURE = 'REGISTERING_FAILURE';

export const register = (credentials) => (dispatch) => {
    dispatch({ type: REGISTERING_START });
    axios.post("https://yuka-livingston-subreddit.herokuapp.com/register", credentials)
        .then(response => {
            console.log(response);
            dispatch({ type: REGISTERING_SUCCESS });
        })
        .then(() => {
            dispatch({ type: LOGIN_START });
            axios.post("https://yuka-livingston-subreddit.herokuapp.com/login", credentials)
                .then(response => {
                    console.log(response);
                    dispatch({ type: LOGIN_SUCCESS, payload: response.data.token });
                })
                .catch(error => {
                    console.log(error.message);
                    dispatch({ type: LOGIN_FAILURE, payload: error.message });
                })
        })
        .catch(error => {
            console.log(error.message);
            dispatch({ type: REGISTERING_FAILURE });
        })
}

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = (credentials) => (dispatch) => {
    dispatch({ type: LOGIN_START });
    axios.post("https://yuka-livingston-subreddit.herokuapp.com/login", credentials)
        .then(response => {
            console.log(response);
            dispatch({ type: LOGIN_SUCCESS, payload: response.data.token });
        })
        .catch(error => {
            console.log(error.message);
            dispatch({ type: LOGIN_FAILURE, payload: error.message });
        })
}