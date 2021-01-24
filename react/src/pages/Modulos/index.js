import React from 'react';
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import './styles.css';

import { connect } from 'react-redux';

function Modulos({user}) {

    const history = useHistory();

    const location = useLocation();

    return (
        <main className="container">
            <div>
                <header className="index">
                    { user[location.state.hospitalIndex].hospitalName } > <b>{ location.state.prontuario }</b>
                </header>
                <h2>Formulário de Registro de caso</h2>
            </div>
            <div className="modulos-list">
                <div className="item" onClick={ () => {
                    history.push('/formulario', { modulo: 2 })
                }}>
                    <h4>Módulo 2</h4>
                    <p> Acompanhamento do paciente (frequência de conclusão determinada pelos recursos disponíveis)</p>
                </div>
                <div className="item" onClick={ () => {
                    history.push('/formulario', { modulo: 3 })
                }}>
                    <h4>Módulo 3</h4>
                    <p>Alta ou Morte do paciente</p>
                </div>
            </div>
        </main>
    );
}

export default connect(state => ({ user: state.user }))(Modulos);