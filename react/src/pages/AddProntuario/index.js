import React, { useState } from 'react';
import './styles.css';
import { TextField, Button } from '@material-ui/core';

const styles = {
    Button: {
      margin: 24,
      marginBottom: 0
    }
};

function AddProntuario() {

    const [pront, setPront] = useState()

    function handleSubmit(e) {
        e.preventDefault()
        console.log(pront)
    }

    function handleChange(e) {
        setPront(e.target.value)
    }

    return (
        <main className="container add-prontuario">
            <div>
                <header className="index">
                    <b>HUGG</b>
                </header>
                <h2>Adicionar novo prontuário</h2>
            </div>
            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                <TextField name="prontuario" label="Número do prontuário" type="number" onChange={handleChange} />
                <div className="submit-pront">
                    <Button style={styles.Button} variant="contained" type="submit" color="primary" disabled={!pront}>Registrar</Button>
                </div>
            </form>
        </main>
    );
}

export default AddProntuario;