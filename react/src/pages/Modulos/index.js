import React from 'react';
import './styles.css';

function Modulos() {
    return (
        <main className="container">
            <div>
                <header className="index">
                    HUGG > <b>189123492</b>
                </header>
                <h2>Formulário de Registro de caso</h2>
            </div>
            <div className="modulos-list">
                <div className="item">
                    <h4>Módulo 2</h4>
                    <p> Acompanhamento do paciente (frequência de conclusão determinada pelos recursos disponíveis)</p>
                </div>
                <div className="item">
                    <h4>Módulo 3</h4>
                    <p>Alta ou Morte do paciente</p>
                </div>
            </div>
        </main>
    );
}

export default Modulos;