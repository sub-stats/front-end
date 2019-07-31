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
        .catch(error => {
            console.log(error.message);
            dispatch({ type: REGISTERING_FAILURE });
        })
}