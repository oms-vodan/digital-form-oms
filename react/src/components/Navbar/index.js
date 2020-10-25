import React from 'react';
import './styles.css';

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


    function logout() {
        dispatch(userLogout());
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