import { createStore } from 'redux';

function checkStorage() {
    if(localStorage.getItem('authToken'))
        return true;
    else
        return false;
}

const INITIAL_STATE = {
    logged: checkStorage(),
    user: {}
}

function reducer(state = INITIAL_STATE, action) {
    console.log(action);

    if(action.type === 'TOGGLE_LOGIN' || action.type === 'TOGGLE_LOGOUT') {
        return { 
            ...state,
            logged: action.isLogged,
            user: action.user
        }
    }

    if(action.type === 'STORE_USER') {
        return {
            ...state,
            user: action
        }
    }

    return state;
}

const store = createStore(reducer);

export default store;