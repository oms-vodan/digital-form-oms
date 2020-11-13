import React from 'react';
import './styles.css';
import { useHistory  } from "react-router-dom";

import { connect } from 'react-redux';

import { Button } from '@material-ui/core';


const styles = {
    Button: {
      color: 'white'
    }
};

function userLogout() {
    return {
      type: 'TOGGLE_LOGOUT',
      isLogged: false,
    }
  }

function Navbar({ onSubmit, logged, dispatch }) {

    const history = useHistory();

    function logout() {
        localStorage.removeItem('authToken');
        dispatch(userLogout());
        window.location.href = 'http://localhost:3000';
    }

    return (
        <nav>
            <div className="navContent">
                <h1>Formulário OMS</h1>
                <div className="rightItems">
                    <p>Acesso como <b>Fulano da Silva</b></p>
                    <Button style={styles.Button} onClick={logout}>SAIR</Button>
                </div>
                
            </div>
        </nav>
    );
}

export default connect(state => ({ logged: state.logged }))(Navbar);