import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import './styles.css';
import { TextField, Button } from '@material-ui/core';
import api from '../../services/api';

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

function userLogin(userData) {
  return {
    type: 'TOGGLE_LOGIN',
    isLogged: true,
    user: userData
  }
}

function Login({ logged, dispatch }) {

  const [form, setForm] = useState({
    email: '',
    senha: '',
    error: false
  });

  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();
    console.log(form);
    const response = await api.post('/login',  {
      login: form.email,
      password: form.senha
    });
    console.log(response.data[0]);
    if(response.data[0].userid) {
      localStorage.setItem('authToken', 'token');
      localStorage.setItem('username', response.data[0].firstname);
      dispatch(userLogin(response.data));
      if(response.data.length === 1) {
        history.replace("/prontuario", { hospitalName: response.data[0].hospitalName, hospitalId: response.data[0].hospitalunitid });
      } else {
        history.replace("/hospital");
      }
      
    }
  }
  
  function handleChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    setForm({
        ...form,
        [name]: value,
    });
  }

  return (
    <div className="container login">
      <form noValidate autoComplete="off" onSubmit={handleLogin}>
        <TextField style={styles.TextField} name="email" label="Email" type="email" onChange={handleChange} />
        <TextField style={styles.TextField} name="senha" label="Senha" type="password" onChange={handleChange} />
        <Button style={styles.Button} variant="contained" type="submit" color="primary" disabled={form.email === '' || form.senha === ''}>Entrar</Button>
      </form>
    </div>
  );
}
  
export default connect(state => ({ logged: state }))(Login);