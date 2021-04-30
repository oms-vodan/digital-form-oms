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

function Navbar({ onSubmit, state, dispatch }) {
    
    console.log(state);

    function logout() {
        dispatch(userLogout());
        window.location.href = '/';
    }

    return (
        <nav>
            <div className="navContent">
                <div className="leftItems">
                    <img src="assets/logo-icon.png" />
                    <h1>VODAN BR</h1>
                </div>
                <div className="rightItems">
                    <p>Acesso como <b>{localStorage.getItem('username')}</b></p>
                    <Button style={styles.Button} onClick={logout}>SAIR</Button>
                </div>
                
            </div>
        </nav>
    );
}

export default connect(state => ({ state: state }))(Navbar);