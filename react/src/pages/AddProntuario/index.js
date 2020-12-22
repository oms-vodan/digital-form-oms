import React, { useState } from 'react';
import './styles.css';
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { TextField, Button } from '@material-ui/core';

import api from '../../services/api';

import { connect } from 'react-redux';

const styles = {
    Button: {
      margin: 24,
      marginBottom: 0
    }
};

function AddProntuario({user}) {

    const history = useHistory();

    const location = useLocation();

    const [prontuario, setProntuario] = useState();

    async function handleSubmit(e) {
        e.preventDefault()
        console.log(prontuario)
        const response = await api.post('/insertMedicalRecord', {
            userid: user[location.state.hospitalIndex].userid,
            groupRoleid: user[location.state.hospitalIndex].grouproleid,
            hospitalUnitid: user[location.state.hospitalIndex].hospitalunitid,
            medicalRecord: prontuario
        });

        console.log(response);
        //history.push('/formulario', { modulo: 1 })
    }

    function handleChange(e) {
        console.log(user)
        console.log(location.state)
        setProntuario(e.target.value)
    }

    return (
        <main className="container add-prontuario">
            <div>
                <header className="index">
                    <b>{user[location.state.hospitalIndex].hospitalName}</b>
                </header>
                <h2>Adicionar novo prontuário</h2>
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

export default connect(state => ({ user: state.user }))(AddProntuario);