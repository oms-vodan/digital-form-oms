import React from 'react';
import { useHistory } from "react-router-dom";
import './styles.css';
import { TextField, Button } from '@material-ui/core';

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

function Login() {

  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();
    history.push("/hospital");
  }

  return (
    <div className="container">
      <form noValidate autoComplete="off" onSubmit={handleLogin}>
        <TextField style={styles.TextField} label="Login" />
        <TextField style={styles.TextField} label="Senha" type="password" />
        <Button style={styles.Button} variant="contained" type="submit" color="primary">Entrar</Button>
      </form>
    </div>
  );
}
  
export default Login;