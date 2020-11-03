import React, { useState, useEffect } from 'react';
import './styles.css';
import { TextField, Button, FormLabel, RadioGroup, Radio, FormControlLabel } from '@material-ui/core';

function ModuloUm() {

    function getCurrentDate() {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        console.log(dd + '-' + mm + '-' + yyyy);

        return yyyy + '-' + mm + '-' + dd;

    }

    function handleChange(e) {
        console.log(e)
    }

    function submit(e) {
        e.preventDefault();
        console.log(e.target.value);
    }

    return (
        <main className="container">
            <div>
                <header className="index">
                    HUGG > 189123492 > <b>Admissão</b> 
                </header>
                <h2>Módulo 1 - Admissão</h2>
            </div>
            <form className="mod1" onSubmit={submit}>

                <div className="form-grid">
                    <TextField
                        id="date"
                        label="Data de inscrição"
                        type="date"
                        defaultValue={getCurrentDate()}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />

                    <TextField label="Identificador do participante" />
                </div>

                <h3>Critérios Clínicos para Inclusão</h3>

                <div className="form-grid">

                    <div>
                        <FormLabel component="legend">Quadro de infecção comprovada ou suspeita com patógeno de interesse para a Saúde Pública</FormLabel>
                        <RadioGroup aria-label="quadro-de-infecção" name="quadro-de-infecção" onChange={handleChange}>
                            <FormControlLabel value="sim" control={<Radio />} label="Sim" />
                            <FormControlLabel value="não" control={<Radio />} label="Não" />
                        </RadioGroup>
                    </div>

                    <div></div>
                    
                    <div>
                        <FormLabel component="legend">Um histórico de febre autorelatado ou febre medida de ≥ 38ºC</FormLabel>
                        <RadioGroup aria-label="febre" name="febre" onChange={handleChange}>
                            <FormControlLabel value="sim" control={<Radio />} label="Sim" />
                            <FormControlLabel value="não" control={<Radio />} label="Não" />
                        </RadioGroup>
                    </div>

                    <div>
                        <FormLabel component="legend">Tosse</FormLabel>
                        <RadioGroup aria-label="tosse" name="tosse" onChange={handleChange}>
                            <FormControlLabel value="sim" control={<Radio />} label="Sim" />
                            <FormControlLabel value="não" control={<Radio />} label="Não" />
                        </RadioGroup>
                    </div>

                    <div>
                        <FormLabel component="legend">Dispneia (falta de ar) ou Taquipneia</FormLabel>
                        <RadioGroup aria-label="dispneia-taquipneia" name="dispneia-taquipneia" onChange={handleChange}>
                            <FormControlLabel value="sim" control={<Radio />} label="Sim" />
                            <FormControlLabel value="não" control={<Radio />} label="Não" />
                        </RadioGroup>
                    </div>

                    <div>
                        <FormLabel component="legend">Suspeita clínica de IRA apesar de não apresentar os sintomas acima</FormLabel>
                        <RadioGroup aria-label="ira" name="ira" onChange={handleChange}>
                            <FormControlLabel value="sim" control={<Radio />} label="Sim" />
                            <FormControlLabel value="não" control={<Radio />} label="Não" />
                        </RadioGroup>
                    </div>

                </div>

                <h3>Dados demográficos</h3>

                <div className="form-grid">

                    <div>
                        <FormLabel>Sexo ao Nascer</FormLabel>
                        <RadioGroup aria-label="sexo" name="sexo" onChange={handleChange}>
                            <FormControlLabel value="feminino" control={<Radio />} label="Feminino" />
                            <FormControlLabel value="masculino" control={<Radio />} label="Masculino" />
                            <FormControlLabel value="não-especificado" control={<Radio />} label="Não especificado" />
                        </RadioGroup>
                    </div>
                    
                    <TextField
                        id="date-"
                        label="Data de nascimento"
                        type="date"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />

                    {/* HABILITADO SOMENTE SE O CAMPO DATA DE NASCIMENTO ESTIVER NÃO PREENCHIDO */}
                    <div>
                        <FormLabel>Caso tenha no mínimo 1 ano</FormLabel>
                        <TextField type="number" label="Idade(Anos)" />
                    </div>
                    
                    <div>
                        <FormLabel>Caso tenha menos de 1 ano</FormLabel>
                        <TextField type="number" label="Idade(Meses)" />
                    </div>
                    

                    <div>
                        <FormLabel component="legend">Profissional de Saúde</FormLabel>
                        <RadioGroup aria-label="profissional-saude" name="profissional-saude" onChange={handleChange}>
                            <FormControlLabel value="sim" control={<Radio />} label="Sim" />
                            <FormControlLabel value="não" control={<Radio />} label="Não" />
                            <FormControlLabel value="desconhecido" control={<Radio />} label="Desconhecido" />
                        </RadioGroup>
                    </div>

                    <div>
                        <FormLabel component="legend">Profissional de Laboratório</FormLabel>
                        <RadioGroup aria-label="profissional-laboratorio" name="profissional-laboratorio" onChange={handleChange}>
                            <FormControlLabel value="sim" control={<Radio />} label="Sim" />
                            <FormControlLabel value="não" control={<Radio />} label="Não" />
                            <FormControlLabel value="desconhecido" control={<Radio />} label="Desconhecido" />
                        </RadioGroup>
                    </div>

                    <div>
                        <FormLabel component="legend">Grávida</FormLabel>
                        <RadioGroup aria-label="gravida" name="gravida" onChange={handleChange}>
                            <FormControlLabel value="sim" control={<Radio />} label="Sim" />
                            <FormControlLabel value="não" control={<Radio />} label="Não" />
                            <FormControlLabel value="desconhecido" control={<Radio />} label="Desconhecido" />
                            <FormControlLabel value="não-informado" control={<Radio />} label="Não informado" />
                        </RadioGroup>
                    </div>

                    {/* HABILITADO SOMENTE SE O CAMPO ANTERIOR "GRÁVIDA" FOR SIM */}
                    <div>
                        <TextField type="number" label="Tempo de gravidez" placeholder="Em semanas" />
                    </div>

                </div>
               


            </form>
        </main>
    );
}

export default ModuloUm;