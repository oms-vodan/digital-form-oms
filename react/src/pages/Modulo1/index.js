import React, { useState, useEffect } from 'react';
import './styles.css';
import { TextField, Button, FormLabel, RadioGroup, Radio, FormControlLabel } from '@material-ui/core';

function ModuloUm() {

    // Indexação do formulário a partir do idQuestão
    const [form, setForm] = useState({
        242: 'HUGG',
        167: getCurrentDate(),
    });

    function getCurrentDate() {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0');
        var yyyy = today.getFullYear();

        return yyyy + '-' + mm + '-' + dd;
    }

    function handleChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        console.log('idQuestão: ' + target.name, 'value: ' + target.value);


        setForm({
            ...form,
            [name]: value
        });
    }

    function submit(e) {
        e.preventDefault();
        console.log(form);
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
                        name="167"
                        defaultValue={getCurrentDate()}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={handleChange}
                    />

                    <TextField label="Identificador do participante" />
                </div>

                <h3>Critérios Clínicos para Inclusão</h3>

                <div className="form-grid">

                    <div>
                        <FormLabel component="legend">Quadro de infecção comprovada ou suspeita com patógeno de interesse para a Saúde Pública</FormLabel>
                        <RadioGroup aria-label="quadro-de-infecção" name="49" onChange={handleChange}>
                            <FormControlLabel value="sim" control={<Radio />} label="Sim" />
                            <FormControlLabel value="não" control={<Radio />} label="Não" />
                        </RadioGroup>
                    </div>

                    <div></div>
                    
                    <div>
                        <FormLabel component="legend">Um histórico de febre autorelatado ou febre medida de ≥ 38ºC</FormLabel>
                        <RadioGroup aria-label="febre" name="47" onChange={handleChange}>
                            <FormControlLabel value="sim" control={<Radio />} label="Sim" />
                            <FormControlLabel value="não" control={<Radio />} label="Não" />
                        </RadioGroup>
                    </div>

                    <div>
                        <FormLabel component="legend">Tosse</FormLabel>
                        <RadioGroup aria-label="tosse" name="64" onChange={handleChange}>
                            <FormControlLabel value="sim" control={<Radio />} label="Sim" />
                            <FormControlLabel value="não" control={<Radio />} label="Não" />
                        </RadioGroup>
                    </div>

                    <div>
                        <FormLabel component="legend">Dispneia (falta de ar) ou Taquipneia</FormLabel>
                        <RadioGroup aria-label="dispneia-taquipneia" name="63" onChange={handleChange}>
                            <FormControlLabel value="sim" control={<Radio />} label="Sim" />
                            <FormControlLabel value="não" control={<Radio />} label="Não" />
                        </RadioGroup>
                    </div>

                    <div>
                        <FormLabel component="legend">Suspeita clínica de IRA apesar de não apresentar os sintomas acima</FormLabel>
                        <RadioGroup aria-label="ira" name="48" onChange={handleChange}>
                            <FormControlLabel value="sim" control={<Radio />} label="Sim" />
                            <FormControlLabel value="não" control={<Radio />} label="Não" />
                        </RadioGroup>
                    </div>

                </div>

                <h3>Dados demográficos</h3>

                <div className="form-grid">

                    <div>
                        <FormLabel>Sexo ao Nascer</FormLabel>
                        <RadioGroup aria-label="sexo" name="111" onChange={handleChange}>
                            <FormControlLabel value="feminino" control={<Radio />} label="Feminino" />
                            <FormControlLabel value="masculino" control={<Radio />} label="Masculino" />
                            <FormControlLabel value="não-especificado" control={<Radio />} label="Não especificado" />
                        </RadioGroup>
                    </div>
                    
                    <TextField
                        id="date"
                        label="Data de nascimento"
                        type="date"
                        name="107"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={handleChange}
                    />

                    {/* HABILITADO SOMENTE SE O CAMPO DATA DE NASCIMENTO ESTIVER NÃO PREENCHIDO */}
                    <div>
                        <FormLabel>Caso tenha no mínimo 1 ano</FormLabel>
                        <TextField type="number" name="144" label="Idade(Anos)" onChange={handleChange}/>
                    </div>
                    
                    <div>
                        <FormLabel>Caso tenha menos de 1 ano</FormLabel>
                        <TextField type="number" name="212" label="Idade(Meses)" onChange={handleChange}/>
                    </div>
                    

                    <div>
                        <FormLabel component="legend">Profissional de Saúde</FormLabel>
                        <RadioGroup aria-label="profissional-saude" name="108" onChange={handleChange}>
                            <FormControlLabel value="sim" control={<Radio />} label="Sim" />
                            <FormControlLabel value="não" control={<Radio />} label="Não" />
                            <FormControlLabel value="desconhecido" control={<Radio />} label="Desconhecido" />
                        </RadioGroup>
                    </div>

                    <div>
                        <FormLabel component="legend">Profissional de Laboratório</FormLabel>
                        <RadioGroup aria-label="profissional-laboratorio" name="109" onChange={handleChange}>
                            <FormControlLabel value="sim" control={<Radio />} label="Sim" />
                            <FormControlLabel value="não" control={<Radio />} label="Não" />
                            <FormControlLabel value="desconhecido" control={<Radio />} label="Desconhecido" />
                        </RadioGroup>
                    </div>

                    <div>
                        <FormLabel component="legend">Grávida</FormLabel>
                        <RadioGroup aria-label="gravida" name="110" onChange={handleChange}>
                            <FormControlLabel value="sim" control={<Radio />} label="Sim" />
                            <FormControlLabel value="não" control={<Radio />} label="Não" />
                            <FormControlLabel value="desconhecido" control={<Radio />} label="Desconhecido" />
                            <FormControlLabel value="não-informado" control={<Radio />} label="Não informado" />
                        </RadioGroup>
                    </div>

                    {/* HABILITADO SOMENTE SE O CAMPO ANTERIOR "GRÁVIDA" FOR SIM */}
                    <div>
                        <TextField type="number" label="Tempo de gravidez" placeholder="Em semanas" name="113" onChange={handleChange}/>
                    </div>

                </div>


                <h3>Início da doença e sinais vitais na admissão</h3>

                <div className="form-grid">

                    <TextField
                        id="date"
                        label="Início de Sintomas (data do primeiro sintoma)"
                        type="date"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={handleChange}
                        name="97"
                    />

                    <TextField
                        id="date"
                        label="Data de admissão nesta unidade"
                        type="date"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={handleChange}
                        name="93"
                    />

                    <TextField type="number" label="Temperatura(ºC)" name="198" onChange={handleChange}/>

                    <div></div>

                    <TextField type="number" label="Frequência cardíaca" name="191" onChange={handleChange}/>

                    <TextField type="number" label="Frequência respiratória" name="194" onChange={handleChange}/>

                    <TextField type="number" label="Pressão arterial (sistólica)" name="195" onChange={handleChange}/>

                    <TextField type="number" label="Pressão arterial (diastólica)" name="192" onChange={handleChange}/>

                    <div>
                        <FormLabel component="legend">Desidratação severa</FormLabel>
                        <RadioGroup aria-label="desidatracao" name="189" onChange={handleChange}>
                            <FormControlLabel value="sim" control={<Radio />} label="Sim" />
                            <FormControlLabel value="não" control={<Radio />} label="Não" />
                            <FormControlLabel value="desconhecido" control={<Radio />} label="Desconhecido" />
                        </RadioGroup>
                    </div>

                    <div>
                        <FormLabel component="legend">Tempo de enchimento capilar >2 segundos</FormLabel>
                        <RadioGroup aria-label="enchimento-capilar" name="196" onChange={handleChange}>
                            <FormControlLabel value="sim" control={<Radio />} label="Sim" />
                            <FormControlLabel value="não" control={<Radio />} label="Não" />
                            <FormControlLabel value="desconhecido" control={<Radio />} label="Desconhecido" />
                        </RadioGroup>
                    </div>

                    <TextField type="number" label="Saturação de oxigênio(%)" name="40" onChange={handleChange}/>

                    <div>
                        <FormLabel component="legend">Saturação de oxigênio(%) em</FormLabel>
                        <RadioGroup aria-label="enchimento-capilar" name="141" onChange={handleChange}>
                            <FormControlLabel value="oxigenoterapia" control={<Radio />} label="Oxigenoterapia" />
                            <FormControlLabel value="ar ambiente" control={<Radio />} label="Ar ambiente" />
                            <FormControlLabel value="desconhecido" control={<Radio />} label="Desconhecido" />
                        </RadioGroup>
                    </div> 

                    <div>
                        <FormLabel component="legend">Escala A V D I</FormLabel>
                        <RadioGroup aria-label="avdi" name="190" onChange={handleChange}>
                            <FormControlLabel value="alerta" control={<Radio />} label="Alerta" />
                            <FormControlLabel value="verbal" control={<Radio />} label="Verbal" />
                            <FormControlLabel value="dor" control={<Radio />} label="Dor" />
                            <FormControlLabel value="indiferente" control={<Radio />} label="Indiferente" />                          
                        </RadioGroup>
                    </div>

                    <TextField type="number" label="Escala de Coma de Glasgow (GCS /15)" name="193" onChange={handleChange}/>

                    <div>
                        <FormLabel component="legend">Desnutrição</FormLabel>
                        <RadioGroup aria-label="desnutricao" name="95" onChange={handleChange}>
                            <FormControlLabel value="sim" control={<Radio />} label="Sim" />
                            <FormControlLabel value="não" control={<Radio />} label="Não" />
                            <FormControlLabel value="desconhecido" control={<Radio />} label="Desconhecido" />
                        </RadioGroup>
                    </div>

                    <TextField type="number" label="Circunferência braquial" name="96" onChange={handleChange}/>

                    {/* Corrigir problema de não aceitar decimais, somente inteiros */}
                    <TextField type="number" step=".01" label="Altura" name="94" onChange={handleChange}/>

                    <TextField type="number" step=".01" label="Peso" name="98" onChange={handleChange}/>

                </div>

                <h3>Comorbidades</h3>

                <div className="form-grid">

                    <div>
                        <FormLabel component="legend">Doença cardíaca crônica (não hipertensão)</FormLabel>
                        <RadioGroup aria-label="doenca-cardiaca" name="52" onChange={handleChange}>
                            <FormControlLabel value="sim" control={<Radio />} label="Sim" />
                            <FormControlLabel value="não" control={<Radio />} label="Não" />
                            <FormControlLabel value="desconhecido" control={<Radio />} label="Desconhecido" />
                        </RadioGroup>
                    </div>

                    <div>
                        <FormLabel component="legend">Hipertensão</FormLabel>
                        <RadioGroup aria-label="hipertensao" name="60" onChange={handleChange}>
                            <FormControlLabel value="sim" control={<Radio />} label="Sim" />
                            <FormControlLabel value="não" control={<Radio />} label="Não" />
                            <FormControlLabel value="desconhecido" control={<Radio />} label="Desconhecido" />
                        </RadioGroup>
                    </div>

                    <div>
                        <FormLabel component="legend">Doença pulmonar crônica</FormLabel>
                        <RadioGroup aria-label="doenca-pulmonar" name="56" onChange={handleChange}>
                            <FormControlLabel value="sim" control={<Radio />} label="Sim" />
                            <FormControlLabel value="não" control={<Radio />} label="Não" />
                            <FormControlLabel value="desconhecido" control={<Radio />} label="Desconhecido" />
                        </RadioGroup>
                    </div>

                    <div>
                        <FormLabel component="legend">Asma</FormLabel>
                        <RadioGroup aria-label="asma" name="50" onChange={handleChange}>
                            <FormControlLabel value="sim" control={<Radio />} label="Sim" />
                            <FormControlLabel value="não" control={<Radio />} label="Não" />
                            <FormControlLabel value="desconhecido" control={<Radio />} label="Desconhecido" />
                        </RadioGroup>
                    </div>

                    <div>
                        <FormLabel component="legend">Doença renal crônica</FormLabel>
                        <RadioGroup aria-label="doenca-renal" name="53" onChange={handleChange}>
                            <FormControlLabel value="sim" control={<Radio />} label="Sim" />
                            <FormControlLabel value="não" control={<Radio />} label="Não" />
                            <FormControlLabel value="desconhecido" control={<Radio />} label="Desconhecido" />
                        </RadioGroup>
                    </div>

                    <div>
                        <FormLabel component="legend">Doença hepática crônica</FormLabel>
                        <RadioGroup aria-label="doenca-hepatica" name="54" onChange={handleChange}>
                            <FormControlLabel value="sim" control={<Radio />} label="Sim" />
                            <FormControlLabel value="não" control={<Radio />} label="Não" />
                            <FormControlLabel value="desconhecido" control={<Radio />} label="Desconhecido" />
                        </RadioGroup>
                    </div>

                    <div>
                        <FormLabel component="legend">Doença neurológica crônica</FormLabel>
                        <RadioGroup aria-label="doenca-neurologica" name="55" onChange={handleChange}>
                            <FormControlLabel value="sim" control={<Radio />} label="Sim" />
                            <FormControlLabel value="não" control={<Radio />} label="Não" />
                            <FormControlLabel value="desconhecido" control={<Radio />} label="Desconhecido" />
                        </RadioGroup>
                    </div>

                    <div>
                        <FormLabel component="legend">HIV</FormLabel>
                        <RadioGroup aria-label="hiv" name="59" onChange={handleChange}>
                            <FormControlLabel value="sim-nao-antivirais" control={<Radio />} label="Sim-não toma antivirais" />
                            <FormControlLabel value="sim-antivirais" control={<Radio />} label="Sim-toma antivirais" />
                            <FormControlLabel value="não" control={<Radio />} label="Não" />
                            <FormControlLabel value="desconhecido" control={<Radio />} label="Desconhecido" />
                        </RadioGroup>
                    </div>

                    <div>
                        <FormLabel component="legend">Diabete</FormLabel>
                        <RadioGroup aria-label="diabete" name="58" onChange={handleChange}>
                            <FormControlLabel value="sim" control={<Radio />} label="Sim" />
                            <FormControlLabel value="não" control={<Radio />} label="Não" />
                            <FormControlLabel value="desconhecido" control={<Radio />} label="Desconhecido" />
                        </RadioGroup>
                    </div>

                    <div>
                        <FormLabel component="legend">Fumante</FormLabel>
                        <RadioGroup aria-label="fumante" name="57" onChange={handleChange}>
                            <FormControlLabel value="sim" control={<Radio />} label="Sim" />
                            <FormControlLabel value="não" control={<Radio />} label="Não" />
                            <FormControlLabel value="desconhecido" control={<Radio />} label="Desconhecido" />
                        </RadioGroup>
                    </div>

                    <div>
                        <FormLabel component="legend">Tuberculose</FormLabel>
                        <RadioGroup aria-label="tuberculose" name="65" onChange={handleChange}>
                            <FormControlLabel value="sim" control={<Radio />} label="Sim" />
                            <FormControlLabel value="não" control={<Radio />} label="Não" />
                            <FormControlLabel value="desconhecido" control={<Radio />} label="Desconhecido" />
                        </RadioGroup>
                    </div>

                    <div>
                        <FormLabel component="legend">Asplenia</FormLabel>
                        <RadioGroup aria-label="asplenia" name="51" onChange={handleChange}>
                            <FormControlLabel value="sim" control={<Radio />} label="Sim" />
                            <FormControlLabel value="não" control={<Radio />} label="Não" />
                            <FormControlLabel value="desconhecido" control={<Radio />} label="Desconhecido" />
                        </RadioGroup>
                    </div>

                    <div>
                        <FormLabel component="legend">Neoplasma maligno</FormLabel>
                        <RadioGroup aria-label="neoplasma-maligno" name="61" onChange={handleChange}>
                            <FormControlLabel value="sim" control={<Radio />} label="Sim" />
                            <FormControlLabel value="não" control={<Radio />} label="Não" />
                            <FormControlLabel value="desconhecido" control={<Radio />} label="Desconhecido" />
                        </RadioGroup>
                    </div>

                    <div>
                        <FormLabel component="legend">Outras comorbidades</FormLabel>
                        <RadioGroup aria-label="outras-comorbidades" name="62" onChange={handleChange}>
                            <FormControlLabel value="sim" control={<Radio />} label="Sim" />
                            <FormControlLabel value="não" control={<Radio />} label="Não" />
                            <FormControlLabel value="desconhecido" control={<Radio />} label="Desconhecido" />
                        </RadioGroup>
                    </div>

                </div>
               

                <div>
                    <Button variant="contained" type="submit" color="primary">Enviar</Button>
                </div>
            </form>
        </main>
    );
}

export default ModuloUm;