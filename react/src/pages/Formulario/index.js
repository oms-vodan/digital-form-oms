import React, { useState, useEffect  } from 'react';
import './styles.css';
import { useLocation } from "react-router-dom";
import { TextField, Button, FormLabel, RadioGroup, Radio, FormControlLabel, InputLabel, Select, MenuItem } from '@material-ui/core';
import api from '../../services/api';

function Formulario() {

    const location = useLocation();

    const titles = ['Admissão','Acompanhamento','Desfecho']

    const [form, setForm] = useState({

    });

    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        async function loadForm() {
          const response = await api.get('/form/' + location.state.modulo);
          console.log(response.data);
          setQuestions(response.data);
        }
        loadForm();
    }, [])

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
            [name]: value,
        });
    }

    function checkTitle(index, question) {
        if(index-1 < 0) {
            return true;
        }
        if(typeof(questions[index - 1].dsc_qst_grp) == 'string') {
            if(question.dsc_qst_grp !== questions[index - 1].dsc_qst_grp) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    }


    function submit(e) {
        e.preventDefault();
        console.log(form);
    }

    return (
        <main className="container">
            <div>
                <header className="index">
                    HUGG > 189123492 > <b>{ titles[location.state.modulo-1] }</b>
                </header>
                <h2>Módulo { location.state.modulo } - { titles[location.state.modulo-1] }</h2>
                <form className="module" onSubmit={submit}>
                    <div>
                    { questions.length === 0 &&
                        <div className="loading">
                            <img src="assets/loading.svg" alt="Carregando"/>
                        </div>
                    }
                    {questions.map((question, index) => (
                        <div className="qst" key={question.qstId}>

                            {/* Se for um novo grupo de questões*/}
                            { (question.dsc_qst_grp !== "" && checkTitle(index, question)) &&
                            <h3>{question.dsc_qst_grp}</h3>
                            }

                            {/* Se for do tipo Date question*/}
                            { (question.qst_type === "Date question") && 
                                ( (question.sub_qst !== '' && (form[question['idsub_qst']] === 'Sim' || Number(form[question['idsub_qst']] + 1) > 0)) || question.sub_qst === '') &&
                            <div>
                                <TextField
                                    id="date"
                                    label={question.dsc_qst}
                                    type="date"
                                    name={String(question.qstId)}
                                    // defaultValue={getCurrentDate()}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    onChange={handleChange}
                                />
                            </div>
                            }

                            {/* Se for do tipo Number question*/}
                            { (question.qst_type === "Number question") && 
                                ( (question.sub_qst !== '' && (form[question['idsub_qst']] === 'Sim' || Number(form[question['idsub_qst']] + 1) > 0)) || question.sub_qst === '') &&
                            <TextField type="number" name={String(question.qstId)} label={question.dsc_qst} onChange={handleChange}/>
                            }

                            {/* Se for do tipo List question ou YNU_Question ou YNUN_Question e tenha menos de 6 opções */}
                            { (question.qst_type === "List question" || question.qst_type === "YNU_Question" || question.qst_type === "YNUN_Question") && ( (question.rsp_pad.split(' | ')).length < 6 ) &&
                                ( (question.sub_qst !== '' && (form[question['idsub_qst']] === 'Sim' || Number(form[question['idsub_qst']] + 1) > 0)) || question.sub_qst === '') &&
                            <div className="MuiTextField-root">
                                <FormLabel component="legend">{question.dsc_qst}</FormLabel>
                                <RadioGroup aria-label={question.dsc_qst} name={String(question.qstId)} onChange={handleChange}>
                                    {question.rsp_pad.split(' | ').map((item) => (
                                        <FormControlLabel key={item} value={item} control={<Radio />} label={item} />
                                    ))}
                                </RadioGroup>
                            </div>
                            } 

                            {/* Se for do tipo List question ou YNU_Question ou YNUN_Question e tenha 6 ou mais opções */}
                            { (question.qst_type === "List question" || question.qst_type === "YNU_Question" || question.qst_type === "YNUN_Question") && ( (question.rsp_pad.split(' | ')).length >= 6 ) &&
                                ( (question.sub_qst !== '' && (form[question['idsub_qst']] === 'Sim' || Number(form[question['idsub_qst']] + 1) > 0)) || question.sub_qst === '') &&
                            <div className="MuiTextField-root">
                                <InputLabel>{question.dsc_qst}</InputLabel>
                                <Select value={form[String(question.qstId)] || ''} aria-label={question.dsc_qst} name={String(question.qstId)} onChange={handleChange}>
                                        {question.rsp_pad.split(' | ').map((item) => (
                                            <MenuItem key={item} value={item}>{ item }</MenuItem>
                                        ))}
                                </Select>
                            </div>
                            } 

                            {/* Se for do tipo Text_Question ou Laboratory question ou Ventilation question*/}
                            { (question.qst_type === "Text_Question" || question.qst_type === "Laboratory question" || question.qst_type === "Ventilation question") && 
                                ( (question.sub_qst !== '' && (form[question['idsub_qst']] === 'Sim' || Number(form[question['idsub_qst']] + 1) > 0)) || question.sub_qst === '') &&
                            <TextField name={String(question.qstId)} label={question.dsc_qst} onChange={handleChange}/>
                            }

                            {/* Se for do tipo Boolean_Question*/}
                            { (question.qst_type === "Boolean_Question") && 
                                ( (question.sub_qst !== '' && (form[question['idsub_qst']] === 'Sim' || Number(form[question['idsub_qst']] + 1) > 0)) || question.sub_qst === '') &&
                            <div className="MuiTextField-root">
                                <FormLabel component="legend">{question.dsc_qst}</FormLabel>
                                <RadioGroup aria-label={question.dsc_qst} name={String(question.qstId)} onChange={handleChange}>
                                    <FormControlLabel value='true' control={<Radio />} label='Sim' />
                                    <FormControlLabel value='false' control={<Radio />} label='Não' />
                                </RadioGroup>
                            </div>
                            } 

                        </div>
                    ))}
                    </div>

                    <div className="form-submit">
                        <Button variant="contained" type="submit" color="primary">Enviar</Button>
                    </div>
                </form>
            </div>
        </main>
    );
}

export default Formulario;