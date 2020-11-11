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

                    <TextField type="number" label="Identificador do participante" />
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
                        <TextField type="number" name="144" label="Idade(Anos)" onChange={handleChange} />
                    </div>

                    <div>
                        <FormLabel>Caso tenha menos de 1 ano</FormLabel>
                        <TextField type="number" name="212" label="Idade(Meses)" onChange={handleChange} />
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
                        <TextField type="number" label="Tempo de gravidez" placeholder="Em semanas" name="113" onChange={handleChange} />
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

                    <TextField type="number" label="Temperatura(ºC)" name="198" onChange={handleChange} />

                    <div></div>

                    <TextField type="number" label="Frequência cardíaca" name="191" onChange={handleChange} />

                    <TextField type="number" label="Frequência respiratória" name="194" onChange={handleChange} />

                    <TextField type="number" label="Pressão arterial (sistólica)" name="195" onChange={handleChange} />

                    <TextField type="number" label="Pressão arterial (diastólica)" name="192" onChange={handleChange} />

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

                    <TextField type="number" label="Saturação de oxigênio(%)" name="40" onChange={handleChange} />

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

                    <TextField type="number" label="Escala de Coma de Glasgow (GCS /15)" name="193" onChange={handleChange} />

                    <div>
                        <FormLabel component="legend">Desnutrição</FormLabel>
                        <RadioGroup aria-label="desnutricao" name="95" onChange={handleChange}>
                            <FormControlLabel value="sim" control={<Radio />} label="Sim" />
                            <FormControlLabel value="não" control={<Radio />} label="Não" />
                            <FormControlLabel value="desconhecido" control={<Radio />} label="Desconhecido" />
                        </RadioGroup>
                    </div>

                    <TextField type="number" label="Circunferência braquial" name="96" onChange={handleChange} />

                    {/* Corrigir problema de não aceitar decimais, somente inteiros */}
                    <TextField type="number" step=".01" label="Altura" name="94" onChange={handleChange} />

                    <TextField type="number" step=".01" label="Peso" name="98" onChange={handleChange} />

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

                <h3>Pré-admissão e medicamentos de uso contínuo</h3>

                <div className="form-grid">

                    <div>
                        <FormLabel component="legend">Inibidores da enzima de conversão da angiotensina (inibidores da ECA)</FormLabel>
                        <RadioGroup aria-label="inibidores-eca" name="202" onChange={handleChange}>
                            <FormControlLabel value="sim" control={<Radio />} label="Sim" />
                            <FormControlLabel value="não" control={<Radio />} label="Não" />
                            <FormControlLabel value="desconhecido" control={<Radio />} label="Desconhecido" />
                        </RadioGroup>
                    </div>

                    <div>
                        <FormLabel component="legend">Bloqueadores dos receptores de angiotensina II (BRAs)</FormLabel>
                        <RadioGroup aria-label="bras" name="203" onChange={handleChange}>
                            <FormControlLabel value="sim" control={<Radio />} label="Sim" />
                            <FormControlLabel value="não" control={<Radio />} label="Não" />
                            <FormControlLabel value="desconhecido" control={<Radio />} label="Desconhecido" />
                        </RadioGroup>
                    </div>

                    <div>
                        <FormLabel component="legend">Antiinflamatório não esteroide (AINE)</FormLabel>
                        <RadioGroup aria-label="aine" name="204" onChange={handleChange}>
                            <FormControlLabel value="sim" control={<Radio />} label="Sim" />
                            <FormControlLabel value="não" control={<Radio />} label="Não" />
                            <FormControlLabel value="desconhecido" control={<Radio />} label="Desconhecido" />
                        </RadioGroup>
                    </div>

                    <div></div>

                    <div>
                        <FormLabel component="legend">Qual antiviral</FormLabel>
                        <RadioGroup aria-label="antiviral" name="254" onChange={handleChange}>
                            <FormControlLabel value="sim" control={<Radio />} label="Interferon alfa" />
                            <FormControlLabel value="não" control={<Radio />} label="Interferon beta" />
                            <FormControlLabel value="desconhecido" control={<Radio />} label="Lopinavir/Ritonavir" />
                            <FormControlLabel value="desconhecido" control={<Radio />} label="Inibidor de neuraminidase" />
                            <FormControlLabel value="desconhecido" control={<Radio />} label="Ribavirina" />
                            <FormControlLabel value="desconhecido" control={<Radio />} label="Azitromicina" />
                            <FormControlLabel value="desconhecido" control={<Radio />} label="Cloroquina / hidroxicloroquina" />
                            <FormControlLabel value="desconhecido" control={<Radio />} label="Favipiravir" />
                        </RadioGroup>
                    </div>

                    {/* Depende da questão de cima */}
                    <TextField name="255" label="Qual outro antiviral" />

                </div>

                <h3>Sinais e sintomas na hora da admissão</h3>

                <div className="form-grid">

                    <div>
                        <FormLabel component="legend">Histórico de febre</FormLabel>
                        <RadioGroup aria-label="febre" name="132" onChange={handleChange}>
                            <FormControlLabel value="sim" control={<Radio />} label="Sim" />
                            <FormControlLabel value="não" control={<Radio />} label="Não" />
                            <FormControlLabel value="desconhecido" control={<Radio />} label="Desconhecido" />
                        </RadioGroup>
                    </div>

                    <div>
                        <FormLabel component="legend">Tosse</FormLabel>
                        <RadioGroup aria-label="tosse" name="210" onChange={handleChange}>
                            <FormControlLabel value="sim" control={<Radio />} label="Sim" />
                            <FormControlLabel value="não" control={<Radio />} label="Não" />
                            <FormControlLabel value="desconhecido" control={<Radio />} label="Desconhecido" />
                        </RadioGroup>
                    </div>

                    <div>
                        <FormLabel component="legend">Tosse com expectoração</FormLabel>
                        <RadioGroup aria-label="tosse-expectoracao" name="225" onChange={handleChange}>
                            <FormControlLabel value="sim" control={<Radio />} label="Sim" />
                            <FormControlLabel value="não" control={<Radio />} label="Não" />
                            <FormControlLabel value="desconhecido" control={<Radio />} label="Desconhecido" />
                        </RadioGroup>
                    </div>

                    <div>
                        <FormLabel component="legend">Tosse com hemóptise</FormLabel>
                        <RadioGroup aria-label="tosse-hemoptise" name="128" onChange={handleChange}>
                            <FormControlLabel value="sim" control={<Radio />} label="Sim" />
                            <FormControlLabel value="não" control={<Radio />} label="Não" />
                            <FormControlLabel value="desconhecido" control={<Radio />} label="Desconhecido" />
                        </RadioGroup>
                    </div>

                    <div>
                        <FormLabel component="legend">Dor de garganta</FormLabel>
                        <RadioGroup aria-label="dor-garganta" name="215" onChange={handleChange}>
                            <FormControlLabel value="sim" control={<Radio />} label="Sim" />
                            <FormControlLabel value="não" control={<Radio />} label="Não" />
                            <FormControlLabel value="desconhecido" control={<Radio />} label="Desconhecido" />
                        </RadioGroup>
                    </div>

                    <div>
                        <FormLabel component="legend">Coriza (rinorréia)</FormLabel>
                        <RadioGroup aria-label="coriza" name="137" onChange={handleChange}>
                            <FormControlLabel value="sim" control={<Radio />} label="Sim" />
                            <FormControlLabel value="não" control={<Radio />} label="Não" />
                            <FormControlLabel value="desconhecido" control={<Radio />} label="Desconhecido" />
                        </RadioGroup>
                    </div>

                    <div>
                        <FormLabel component="legend">Respiração sibilante</FormLabel>
                        <RadioGroup aria-label="respiracao-sibilante" name="140" onChange={handleChange}>
                            <FormControlLabel value="sim" control={<Radio />} label="Sim" />
                            <FormControlLabel value="não" control={<Radio />} label="Não" />
                            <FormControlLabel value="desconhecido" control={<Radio />} label="Desconhecido" />
                        </RadioGroup>
                    </div>

                    <div>
                        <FormLabel component="legend">Dor no peito</FormLabel>
                        <RadioGroup aria-label="dor-peito" name="214" onChange={handleChange}>
                            <FormControlLabel value="sim" control={<Radio />} label="Sim" />
                            <FormControlLabel value="não" control={<Radio />} label="Não" />
                            <FormControlLabel value="desconhecido" control={<Radio />} label="Desconhecido" />
                        </RadioGroup>
                    </div>

                    <div>
                        <FormLabel component="legend">Dor muscular (mialgia)</FormLabel>
                        <RadioGroup aria-label="dor-muscular" name="209" onChange={handleChange}>
                            <FormControlLabel value="sim" control={<Radio />} label="Sim" />
                            <FormControlLabel value="não" control={<Radio />} label="Não" />
                            <FormControlLabel value="desconhecido" control={<Radio />} label="Desconhecido" />
                        </RadioGroup>
                    </div>

                    <div>
                        <FormLabel component="legend">Dor articular (artralgia)</FormLabel>
                        <RadioGroup aria-label="dor-articular" name="134" onChange={handleChange}>
                            <FormControlLabel value="sim" control={<Radio />} label="Sim" />
                            <FormControlLabel value="não" control={<Radio />} label="Não" />
                            <FormControlLabel value="desconhecido" control={<Radio />} label="Desconhecido" />
                        </RadioGroup>
                    </div>

                    <div>
                        <FormLabel component="legend">Fadiga/mal estar</FormLabel>
                        <RadioGroup aria-label="fadiga" name="129" onChange={handleChange}>
                            <FormControlLabel value="sim" control={<Radio />} label="Sim" />
                            <FormControlLabel value="não" control={<Radio />} label="Não" />
                            <FormControlLabel value="desconhecido" control={<Radio />} label="Desconhecido" />
                        </RadioGroup>
                    </div>

                    <div>
                        <FormLabel component="legend">Perda do paladar</FormLabel>
                        <RadioGroup aria-label="perda-paladar" name="253" onChange={handleChange}>
                            <FormControlLabel value="sim" control={<Radio />} label="Sim" />
                            <FormControlLabel value="não" control={<Radio />} label="Não" />
                            <FormControlLabel value="desconhecido" control={<Radio />} label="Desconhecido" />
                        </RadioGroup>
                    </div>

                    <div>
                        <FormLabel component="legend">Perda do Olfato</FormLabel>
                        <RadioGroup aria-label="perda-olfato" name="252" onChange={handleChange}>
                            <FormControlLabel value="sim" control={<Radio />} label="Sim" />
                            <FormControlLabel value="não" control={<Radio />} label="Não" />
                            <FormControlLabel value="desconhecido" control={<Radio />} label="Desconhecido" />
                        </RadioGroup>
                    </div>

                    <div>
                        <FormLabel component="legend">Falta de ar</FormLabel>
                        <RadioGroup aria-label="falta-ar" name="205" onChange={handleChange}>
                            <FormControlLabel value="sim" control={<Radio />} label="Sim" />
                            <FormControlLabel value="não" control={<Radio />} label="Não" />
                            <FormControlLabel value="desconhecido" control={<Radio />} label="Desconhecido" />
                        </RadioGroup>
                    </div>

                    <div>
                        <FormLabel component="legend">Retração toráxica</FormLabel>
                        <RadioGroup aria-label="retracao-toraxica" name="135" onChange={handleChange}>
                            <FormControlLabel value="sim" control={<Radio />} label="Sim" />
                            <FormControlLabel value="não" control={<Radio />} label="Não" />
                            <FormControlLabel value="desconhecido" control={<Radio />} label="Desconhecido" />
                        </RadioGroup>
                    </div>

                    <div>
                        <FormLabel component="legend">Dor de cabeça</FormLabel>
                        <RadioGroup aria-label="dor-cabeça" name="130" onChange={handleChange}>
                            <FormControlLabel value="sim" control={<Radio />} label="Sim" />
                            <FormControlLabel value="não" control={<Radio />} label="Não" />
                            <FormControlLabel value="desconhecido" control={<Radio />} label="Desconhecido" />
                        </RadioGroup>
                    </div>

                    <div>
                        <FormLabel component="legend">Consciência alterada/confusão</FormLabel>
                        <RadioGroup aria-label="confusao" name="207" onChange={handleChange}>
                            <FormControlLabel value="sim" control={<Radio />} label="Sim" />
                            <FormControlLabel value="não" control={<Radio />} label="Não" />
                            <FormControlLabel value="desconhecido" control={<Radio />} label="Desconhecido" />
                        </RadioGroup>
                    </div>

                    <div>
                        <FormLabel component="legend">Convulsões</FormLabel>
                        <RadioGroup aria-label="convulsoes" name="211" onChange={handleChange}>
                            <FormControlLabel value="sim" control={<Radio />} label="Sim" />
                            <FormControlLabel value="não" control={<Radio />} label="Não" />
                            <FormControlLabel value="desconhecido" control={<Radio />} label="Desconhecido" />
                        </RadioGroup>
                    </div>

                    <div>
                        <FormLabel component="legend">Dor abdominal</FormLabel>
                        <RadioGroup aria-label="dor-abdominal" name="127" onChange={handleChange}>
                            <FormControlLabel value="sim" control={<Radio />} label="Sim" />
                            <FormControlLabel value="não" control={<Radio />} label="Não" />
                            <FormControlLabel value="desconhecido" control={<Radio />} label="Desconhecido" />
                        </RadioGroup>
                    </div>

                    <div>
                        <FormLabel component="legend">Vômito/náusea</FormLabel>
                        <RadioGroup aria-label="vomito" name="206" onChange={handleChange}>
                            <FormControlLabel value="sim" control={<Radio />} label="Sim" />
                            <FormControlLabel value="não" control={<Radio />} label="Não" />
                            <FormControlLabel value="desconhecido" control={<Radio />} label="Desconhecido" />
                        </RadioGroup>
                    </div>

                    <div>
                        <FormLabel component="legend">Diarréia</FormLabel>
                        <RadioGroup aria-label="diarreia" name="208" onChange={handleChange}>
                            <FormControlLabel value="sim" control={<Radio />} label="Sim" />
                            <FormControlLabel value="não" control={<Radio />} label="Não" />
                            <FormControlLabel value="desconhecido" control={<Radio />} label="Desconhecido" />
                        </RadioGroup>
                    </div>

                    <div>
                        <FormLabel component="legend">Conjuntivite</FormLabel>
                        <RadioGroup aria-label="conjuntivite" name="213" onChange={handleChange}>
                            <FormControlLabel value="sim" control={<Radio />} label="Sim" />
                            <FormControlLabel value="não" control={<Radio />} label="Não" />
                            <FormControlLabel value="desconhecido" control={<Radio />} label="Desconhecido" />
                        </RadioGroup>
                    </div>

                    <div>
                        <FormLabel component="legend">Erupções cutâneas</FormLabel>
                        <RadioGroup aria-label="erupcoes-cutaneas" name="138" onChange={handleChange}>
                            <FormControlLabel value="sim" control={<Radio />} label="Sim" />
                            <FormControlLabel value="não" control={<Radio />} label="Não" />
                            <FormControlLabel value="desconhecido" control={<Radio />} label="Desconhecido" />
                        </RadioGroup>
                    </div>

                    <div>
                        <FormLabel component="legend">Úlceras cutâneas</FormLabel>
                        <RadioGroup aria-label="ulceras-cutaneas" name="139" onChange={handleChange}>
                            <FormControlLabel value="sim" control={<Radio />} label="Sim" />
                            <FormControlLabel value="não" control={<Radio />} label="Não" />
                            <FormControlLabel value="desconhecido" control={<Radio />} label="Desconhecido" />
                        </RadioGroup>
                    </div>

                    <div>
                        <FormLabel component="legend">Linfadenopatia</FormLabel>
                        <RadioGroup aria-label="linfadenopatia" name="136" onChange={handleChange}>
                            <FormControlLabel value="sim" control={<Radio />} label="Sim" />
                            <FormControlLabel value="não" control={<Radio />} label="Não" />
                            <FormControlLabel value="desconhecido" control={<Radio />} label="Desconhecido" />
                        </RadioGroup>
                    </div>

                    <div>
                        <FormLabel component="legend">Incapaz de andar</FormLabel>
                        <RadioGroup aria-label="incapaz-andar" name="133" onChange={handleChange}>
                            <FormControlLabel value="sim" control={<Radio />} label="Sim" />
                            <FormControlLabel value="não" control={<Radio />} label="Não" />
                            <FormControlLabel value="desconhecido" control={<Radio />} label="Desconhecido" />
                        </RadioGroup>
                    </div>

                    <div>
                        <FormLabel component="legend">Sangramento (hemorragia)</FormLabel>
                        <RadioGroup aria-label="sangramento" name="38" onChange={handleChange}>
                            <FormControlLabel value="sim" control={<Radio />} label="Sim" />
                            <FormControlLabel value="não" control={<Radio />} label="Não" />
                            <FormControlLabel value="desconhecido" control={<Radio />} label="Desconhecido" />
                        </RadioGroup>
                    </div>

                    {/* Se for Sim na questão anterior */}
                    <TextField name="91" label="Localidade do sangramento" />

                    <div>
                        <FormLabel component="legend">Outros</FormLabel>
                        <RadioGroup aria-label="outros-sinais-sintomas" name="29" onChange={handleChange}>
                            <FormControlLabel value="sim" control={<Radio />} label="Sim" />
                            <FormControlLabel value="não" control={<Radio />} label="Não" />
                            <FormControlLabel value="desconhecido" control={<Radio />} label="Desconhecido" />
                        </RadioGroup>
                    </div>

                    {/* Se for Sim na questão anterior */}
                    <TextField name="143" label="Qual sinal ou sintoma" />

                </div>

                <h3>Medicação</h3>

                <div className="form-grid">

                    <div>
                        <FormLabel component="legend">Hidratação oral/orogástrica</FormLabel>
                        <RadioGroup aria-label="Hidratação oral/orogástrica" name="120" onChange={handleChange}>
                            <FormControlLabel value="sim" control={<Radio />} label="Sim" />
                            <FormControlLabel value="não" control={<Radio />} label="Não" />
                            <FormControlLabel value="desconhecido" control={<Radio />} label="Desconhecido" />
                        </RadioGroup>
                    </div>

                    <div>
                        <FormLabel component="legend">Hidratação venosa</FormLabel>
                        <RadioGroup aria-label="Hidratação venosa" name="119" onChange={handleChange}>
                            <FormControlLabel value="sim" control={<Radio />} label="Sim" />
                            <FormControlLabel value="não" control={<Radio />} label="Não" />
                            <FormControlLabel value="desconhecido" control={<Radio />} label="Desconhecido" />
                        </RadioGroup>
                    </div>

                    <div>
                        <FormLabel component="legend">Antiviral</FormLabel>
                        <RadioGroup aria-label="Antiviral" name="35" onChange={handleChange}>
                            <FormControlLabel value="sim" control={<Radio />} label="Sim" />
                            <FormControlLabel value="não" control={<Radio />} label="Não" />
                            <FormControlLabel value="desconhecido" control={<Radio />} label="Desconhecido" />
                        </RadioGroup>
                    </div>

                    <div></div>

                    {/* Depende da questão Antiviral */}
                    <div>
                        <FormLabel component="legend">Qual antiviral</FormLabel>
                        <RadioGroup aria-label="Qual antiviral" name="101" onChange={handleChange}>
                            <FormControlLabel value="Interferon alfa" control={<Radio />} label="Interferon alfa" />
                            <FormControlLabel value="Interferon beta" control={<Radio />} label="Interferon beta" />
                            <FormControlLabel value="Lopinavir/Ritonavir" control={<Radio />} label="Lopinavir/Ritonavir" />
                            <FormControlLabel value="Inibidor de neuraminidase" control={<Radio />} label="Inibidor de neuraminidase" />
                            <FormControlLabel value="Ribavirina" control={<Radio />} label="Ribavirina" />
                            <FormControlLabel value="Azitromicina" control={<Radio />} label="Azitromicina" />
                            <FormControlLabel value="Cloroquina / hidroxicloroquina" control={<Radio />} label="Cloroquina / hidroxicloroquina" />
                            <FormControlLabel value="Favipiravir" control={<Radio />} label="Favipiravir" />

                        </RadioGroup>
                    </div>

                    {/* Depende da questão Antiviral */}
                    <TextField name="104" label="Qual outro antiviral" />

                    <div>
                        <FormLabel component="legend">Corticosteroide</FormLabel>
                        <RadioGroup aria-label="Corticosteroide" name="36" onChange={handleChange}>
                            <FormControlLabel value="sim" control={<Radio />} label="Sim" />
                            <FormControlLabel value="não" control={<Radio />} label="Não" />
                            <FormControlLabel value="desconhecido" control={<Radio />} label="Desconhecido" />
                        </RadioGroup>
                    </div>

                    <div></div>

                    {/* Depende da questão Corticosteroide */}
                    <div>
                        <FormLabel component="legend">Qual via do corticosteroide</FormLabel>
                        <RadioGroup aria-label="Qual via do corticosteroide" name="82" onChange={handleChange}>
                            <FormControlLabel value="Inalatória" control={<Radio />} label="Inalatória" />
                            <FormControlLabel value="Intravenosa" control={<Radio />} label="Intravenosa" />
                            <FormControlLabel value="Oral" control={<Radio />} label="Oral" />

                        </RadioGroup>
                    </div>

                    {/* Depende da questão Corticosteroide */}
                    <TextField name="87" label="Dose diária máxima de corticosteroide" />

                    <div>
                        <FormLabel component="legend">Antibiótico</FormLabel>
                        <RadioGroup aria-label="Antibiótico" name="117" onChange={handleChange}>
                            <FormControlLabel value="sim" control={<Radio />} label="Sim" />
                            <FormControlLabel value="não" control={<Radio />} label="Não" />
                            <FormControlLabel value="desconhecido" control={<Radio />} label="Desconhecido" />
                        </RadioGroup>
                    </div>

                    <div>
                        <FormLabel component="legend">Agente antifungal</FormLabel>
                        <RadioGroup aria-label="Agente antifungal" name="33" onChange={handleChange}>
                            <FormControlLabel value="sim" control={<Radio />} label="Sim" />
                            <FormControlLabel value="não" control={<Radio />} label="Não" />
                            <FormControlLabel value="desconhecido" control={<Radio />} label="Desconhecido" />
                        </RadioGroup>
                    </div>

                    <div>
                        <FormLabel component="legend">Agente antimalárico</FormLabel>
                        <RadioGroup aria-label="Agente antimalárico" name="34" onChange={handleChange}>
                            <FormControlLabel value="sim" control={<Radio />} label="Sim" />
                            <FormControlLabel value="não" control={<Radio />} label="Não" />
                            <FormControlLabel value="desconhecido" control={<Radio />} label="Desconhecido" />
                        </RadioGroup>
                    </div>

                    {/* Depende da questão Agente antimalárico */}
                    <TextField name="100" label="Qual agente antimalárico" />

                    <div>
                        <FormLabel component="legend">Agente experimental</FormLabel>
                        <RadioGroup aria-label="Agente experimental" name="37" onChange={handleChange}>
                            <FormControlLabel value="sim" control={<Radio />} label="Sim" />
                            <FormControlLabel value="não" control={<Radio />} label="Não" />
                            <FormControlLabel value="desconhecido" control={<Radio />} label="Desconhecido" />
                        </RadioGroup>
                    </div>

                    {/* Depende da questão Agente experimental */}
                    <TextField name="103" label="Qual agente experimental" />

                    <div>
                        <FormLabel component="legend">Antiinflamatório não esteroide (AINE)</FormLabel>
                        <RadioGroup aria-label="Antiinflamatório não esteroide (AINE)" name="199" onChange={handleChange}>
                            <FormControlLabel value="sim" control={<Radio />} label="Sim" />
                            <FormControlLabel value="não" control={<Radio />} label="Não" />
                            <FormControlLabel value="desconhecido" control={<Radio />} label="Desconhecido" />
                        </RadioGroup>
                    </div>

                    <div>
                        <FormLabel component="legend">Inibidores da enzima de conversão da angiotensina (inibidores da ECA)</FormLabel>
                        <RadioGroup aria-label="Inibidores da enzima de conversão da angiotensina (inibidores da ECA)" name="200" onChange={handleChange}>
                            <FormControlLabel value="sim" control={<Radio />} label="Sim" />
                            <FormControlLabel value="não" control={<Radio />} label="Não" />
                            <FormControlLabel value="desconhecido" control={<Radio />} label="Desconhecido" />
                        </RadioGroup>
                    </div>

                    <div>
                        <FormLabel component="legend">Bloqueadores dos receptores de angiotensina II (BRAs)</FormLabel>
                        <RadioGroup aria-label="Bloqueadores dos receptores de angiotensina II (BRAs)" name="201" onChange={handleChange}>
                            <FormControlLabel value="sim" control={<Radio />} label="Sim" />
                            <FormControlLabel value="não" control={<Radio />} label="Não" />
                            <FormControlLabel value="desconhecido" control={<Radio />} label="Desconhecido" />
                        </RadioGroup>
                    </div>

                    <div>
                        <FormLabel component="legend">Anticoagulação sistêmica</FormLabel>
                        <RadioGroup aria-label="Anticoagulação sistêmica" name="241" onChange={handleChange}>
                            <FormControlLabel value="sim" control={<Radio />} label="Sim" />
                            <FormControlLabel value="não" control={<Radio />} label="Não" />
                            <FormControlLabel value="desconhecido" control={<Radio />} label="Desconhecido" />
                        </RadioGroup>
                    </div>

                </div>

                <h3>Cuidados</h3>

                <div className="form-grid">

                    {/* TO DO */}

                </div>

                <h3>Resultados laboratoriais</h3>

                <div className="form-grid">

                    <TextField name="158" label="Hemoglobina" />

                    <TextField name="226" label="Leucócitos" />

                    <TextField name="157" label="Hematócrito" />

                    <TextField name="163" label="Plaquetas" />

                    <TextField name="115" label="TTPA/APTR" />

                    <TextField name="169" label="TP" />

                    <TextField name="160" label="INR" />

                    <TextField name="114" label="ALT/TGP" />

                    <TextField name="171" label="Bilirrubina total" />

                    <TextField name="116" label="AST/TGO" />

                    <TextField name="174" label="Uréia (BUN)" />

                    <TextField name="161" label="Lactose" />

                    <TextField name="146" label="Creatinina" />

                    <TextField name="170" label="Sódio" />

                    <TextField name="164" label="Potássio" />

                    <TextField name="165" label="Procalcitonina" />

                    <TextField name="147" label="PCR" />

                    <TextField name="162" label="LDH" />

                    <TextField name="145" label="Creatina quinase" />

                    <TextField name="172" label="Troponina" />

                    <TextField name="118" label="VHS" />

                    <TextField name="148" label="Dimero D" />

                    <TextField name="156" label="Ferritina" />

                    <TextField name="159" label="IL-6" />

                </div>

                <div>
                    <Button variant="contained" type="submit" color="primary">Enviar</Button>
                </div>
            </form>
        </main>
    );
}

export default ModuloUm;