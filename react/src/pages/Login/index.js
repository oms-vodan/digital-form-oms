import React from 'react';
import { useHistory } from "react-router-dom";
import './styles.css';
import { TextField, Button } from '@material-ui/core';

import { connect } from 'react-redux';

const styles = {
  TextField: {
    margin: 24,
    marginTop: 0
  },
  Button: {
    margin: 24,
    marginBottom: 0
  }
};

function userLogin() {
  return {
    type: 'TOGGLE_LOGIN',
    isLogged: true,
  }
}

function Login({ logged, dispatch }) {

  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();
    dispatch(userLogin());
    localStorage.setItem('authToken', 'token');
    history.push("/prontuario");
  }

  return (
    <div className="container login">
      <form noValidate autoComplete="off" onSubmit={handleLogin}>
        <TextField style={styles.TextField} label="Login" />
        <TextField style={styles.TextField} label="Senha" type="password" />
        <Button style={styles.Button} variant="contained" type="submit" color="primary">Entrar</Button>
      </form>
    </div>
  );
}
  
export default connect(state => ({ logged: state }))(Login);