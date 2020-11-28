import React from 'react';
import './styles.css';
import { useHistory } from "react-router-dom";
import { TextField, Button, List, ListItem, ListItemText, ListItemIcon,  } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import AssignmentIcon from '@material-ui/icons/Assignment';

function Prontuario() {

    const history = useHistory();

    async function handleSearch(e) {
        e.preventDefault();
    }

    function toForm(prontuario) {
        console.log('prontuário escolhido: ', prontuario);
        history.push('/modulos');
    }

    return (
        <main className="container prontuarios">
            <div>
                <header className="index">
                    <b>HUGG</b>
                </header>
                <h2>Prontuário</h2>
            </div>
            <div className="prontuario-options">
                <form noValidate autoComplete="off" onSubmit={handleSearch}>
                    <TextField id="standard-basic" label="Nº Prontuário" />
                    <Button variant="contained" color="primary" type="submit">
                        Buscar
                    </Button>
                </form>
                <Button variant="outlined" color="primary" className="add-prontuario" onClick={ () => {
                    history.push('/formulario', { modulo: 1 })
                }}>
                    <Add color="primary" />
                    Novo Prontuário
                </Button>
            </div>
            <div className="prontuario-result">
                <List>
                    <ListItem onClick={() => toForm('189123492')}>
                        <ListItemIcon>
                            <AssignmentIcon />
                        </ListItemIcon>
                        <ListItemText
                            primary="189123492"
                        />
                    </ListItem>
                </List>
            </div>
        </main>
    );
}

export default Prontuario;