import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import './styles.css';
import { TextField, Button } from '@material-ui/core';

const styles = {
    TextField: {
      marginTop: 0
    },
    Button: {
      margin: 24,
      marginBottom: 0
    }
};

function Cadastro() {

    const [form, setForm] = useState({
        nome: '',
        sobrenome: '',
        email: '',
        telefone: '',
        senha: '',
        confirmasenha: '',
        error: ''
    })

    const history = useHistory();

    function validators() {
        if(form.email !== '' && (!form.email.includes('@') || !form.email.includes('.com'))) {
            return 'Email Inválido';
        }
        
        if(form.senha !== '' && form.confirmasenha !== '' && form.senha !== form.confirmasenha) {
            return 'As senhas não coincidem';
        }

        return '';
    }

    function handleChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        setForm({
            ...form,
            [name]: value,
        });

        

        console.log(form)
    }

    function handleRegister(e) {
        e.preventDefault();
        let validateErrors = validators();
        setForm({
            ...form,
            error: validateErrors
        });
        console.log(form, validateErrors)
    }

    return (
        <main className="container cadastro">
            <h2>Cadastro de novos usuários</h2>
            <form noValidate autoComplete="off" onSubmit={handleRegister}>

                <div className="form-inputs">
                    <TextField style={styles.TextField} name="nome" label="Nome" type="text" onChange={handleChange} />
                    <TextField style={styles.TextField} name="sobrenome" label="Sobrenome" type="text" onChange={handleChange} />
                    <TextField style={styles.TextField} name="email" label="Email" type="email" onChange={handleChange} />
                    <TextField style={styles.TextField} name="telefone" label="Telefone" type="text" onChange={handleChange} />
                    <TextField style={styles.TextField} name="senha" label="Senha" type="password" onChange={handleChange} />
                    <TextField style={styles.TextField} name="confirmasenha" label="Confirme a senha" type="password" onChange={handleChange} />
                </div>

                <div className="register-form">
                    <span className="error">{ form.error }</span>
                    <Button style={styles.Button} variant="contained" type="submit" color="primary" disabled={
                        form.nome === '' || form.sobrenome === '' || form.email === '' || form.telefone === '' || form.senha === '' || form.confirmasenha === ''
                    }>Registrar</Button>
                </div>
                
            </form>
        </main>
    );
}

export default Cadastro;