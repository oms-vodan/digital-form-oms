import React from 'react';
import './styles.css';
import { TextField, Button } from '@material-ui/core';
import { Add } from '@material-ui/icons';

function Prontuario() {

    async function handleSearch(e) {
        e.preventDefault();
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
        </main>
    );
}

export default Prontuario;