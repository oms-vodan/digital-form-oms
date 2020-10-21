import React from 'react';
import './styles.css';
import { TextField, Button } from '@material-ui/core';

function Login() {
    return (
      <div className="container">
        <form noValidate autoComplete="off">
          <TextField id="standard-basic" label="Login" />
          <TextField id="standard-basic" label="Senha" type="password" />
          <Button variant="contained" type="submit" color="primary">Entrar</Button>
        </form>
      </div>
    );
  }
  
  export default Login;