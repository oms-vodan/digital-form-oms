import { createStore } from 'redux';

const INITIAL_STATE = {
    logged: true,
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