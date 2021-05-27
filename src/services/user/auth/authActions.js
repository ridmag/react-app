import * as AT from './authTypes';
import axios from 'axios';

export const authenticateUser = (email, password) => {
    const credentials = {
        username: email,
        password: password,
        grant_type: 'password'
    };

    const customHeaders = {
        'content-type': 'application/x-www-form-urlencoded',
        'username': 'raytelligence',
        'password': 'raytelligence321'
    };

    const auth = {
        username: 'raytelligence',
        password: 'raytelligence321'
    };

    var querystring = require('querystring');

    return dispatch => {
          dispatch({
              type: AT.LOGIN_REQUEST
          });

        axios.post("http://localhost:9095/oauth/token", querystring.stringify({
            username: email,
            password: password,
            grant_type: 'password'
        }), {
            auth: {
                username: 'raytelligence',
                password: 'raytelligence321'
            }
        })
            .then(response => {
                const token = response.data.token;
                console.log("qqqqqqqq"+token);
                localStorage.setItem('jwtToken', token);
                    dispatch(success(true));
            })
            .catch(error => {
                dispatch(failure());
            });
    };
};

export const logoutUser = () => {
    return dispatch => {
        dispatch({
            type: AT.LOGOUT_REQUEST
        });
        localStorage.removeItem('jwtToken');
        dispatch(success(false));
    };
};

const success = isLoggedIn => {
    return {
        type: AT.SUCCESS,
        payload: isLoggedIn
    };
};

const failure = () => {
    return {
        type: AT.FAILURE,
        payload: false
    };
};