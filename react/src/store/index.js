import { createStore } from 'redux';

function checkStorage() {
    if(localStorage.getItem('authToken'))
        return true;
    else
        return false;
}

const INITIAL_STATE = {
    logged: checkStorage(),
    username: '',
}

function reducer(state = INITIAL_STATE, action) {
    console.log(action);

    if(action.type === 'TOGGLE_LOGIN' || action.type === 'TOGGLE_LOGOUT') {
        return { 
            ...state,
            logged: action.isLogged
        }
    }

    return state;
}

const store = createStore(reducer);

export default store;