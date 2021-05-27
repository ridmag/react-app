import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import authToken from '../utils/authToken';
import rootReducer from './rootReducer';

const store = createStore(rootReducer, applyMiddleware(thunk));

if(localStorage.jwtToken){
    authToken(localStorage.jwtToken);
}

export default store;