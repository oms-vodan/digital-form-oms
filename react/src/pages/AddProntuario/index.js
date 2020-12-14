import React, { useState } from 'react';
import './styles.css';
import { useHistory } from "react-router-dom";
import { TextField, Button } from '@material-ui/core';

const styles = {
    Button: {
      margin: 24,
      marginBottom: 0
    }
};

function AddProntuario() {

    const history = useHistory();

    const [prontuario, setProntuario] = useState();

    function handleSubmit(e) {
        e.preventDefault()
        console.log(prontuario)
        history.push('/formulario', { modulo: 1 })
    }

    function handleChange(e) {
        setProntuario(e.target.value)
    }

    return (
        <main className="container add-prontuario">
            <div>
                <header className="index">
                    <b>HUGG</b>
                </header>
                <h2>Adicionar novo prontuariouário</h2>
            </div>
            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                <TextField name="prontuario" label="Número do prontuário" type="number" onChange={handleChange} />
                <div className="submit-prontuario">
                    <Button style={styles.Button} variant="contained" type="submit" color="primary" disabled={!prontuario}>Registrar</Button>
                </div>
            </form>
        </main>
    );
}

export default AddProntuario;