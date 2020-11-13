import React from 'react';
import './styles.css';
import { useHistory } from "react-router-dom";
import { TextField, Button } from '@material-ui/core';
import { Add } from '@material-ui/icons';

function Prontuario() {

    const history = useHistory();

    async function handleSearch(e) {
        e.preventDefault();
    }

    function toForm() {
        history.push('/modulo1');
    }

    return (
        <main className="container prontuarios">
            <h2>Prontuário</h2> 
            <div className="prontuario-options"> 
                <form noValidate autoComplete="off" onSubmit={handleSearch}>
                    <TextField id="standard-basic" label="Nº Prontuário" />
                    <Button variant="contained" color="primary" type="submit">
                        Buscar
                    </Button>
                </form>
                <Button variant="outlined" color="primary" className="add-prontuario">
                    <Add color="primary" />
                    Novo Prontuário
                </Button>
            </div>
            <div className="prontuario-continue">
                <Button variant="contained" color="primary" onClick={toForm}>Continuar</Button>
            </div>
        </main>
    );
}

export default Prontuario;