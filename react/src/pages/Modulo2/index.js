import React, { useState, useEffect } from 'react';
import './styles.css';
import { TextField, Button, FormLabel, RadioGroup, Radio, FormControlLabel } from '@material-ui/core';
import api from '../../services/api';

function ModuloDois() {

    const [form, setForm] = useState({
        168: getCurrentDate(),
    });

    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        async function loadForm() {
          const response = await api.get('/form/2');
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

    function submit(e) {
        e.preventDefault();
        console.log(form);
    }

    return (
        <main className="container">
            <div>
                <header className="index">
                    HUGG > 189123492 > <b>Acompanhamento</b>
                </header>
                <h2>Módulo 2 - Acompanhamento</h2>
                <form className="module" onSubmit={submit}>
                    <div>
                    {questions.map((question, index) => (
                        <div className="qst" key={question.qstId}>

                            { (question.sub_qst !== '') && 
                                <p>Essa qst depende da anterior - 
                                    {questions[index - 1].qstId} - 
                                    valor da anterior: {form[questions[index - 1].qstId]}
                                </p>
                            }

                            {/* Se for um novo grupo de questões*/}
                            { (question.dsc_qst_grp !== "" && question.dsc_qst_grp !== questions[index - 1].dsc_qst_grp) &&
                            <h3>{question.dsc_qst_grp}</h3>
                            }

                            {/* Se for do tipo Date question*/}
                            { (question.qst_type === "Date question") && 
                            <div>
                                <TextField
                                    id="date"
                                    label={question.dsc_qst}
                                    type="date"
                                    name={String(question.qstId)}
                                    defaultValue={getCurrentDate()}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    onChange={handleChange}
                                />
                            </div>
                            }

                            {/* Se for do tipo Number question*/}
                            { (question.qst_type === "Number question") && 
                            <TextField type="number" name={String(question.qstId)} label={question.dsc_qst} onChange={handleChange}/>
                            }

                            {/* Se for do tipo List question ou YNU_Question ou YNUN_Question*/}
                            { (question.qst_type === "List question" || question.qst_type === "YNU_Question" || question.qst_type === "YNUN_Question") && 
                            <div>
                                <FormLabel component="legend">{question.dsc_qst}</FormLabel>
                                <RadioGroup aria-label={question.dsc_qst} name={String(question.qstId)} onChange={handleChange}>
                                    {question.rsp_pad.split(' | ').map((item) => (
                                        <FormControlLabel key={item} value={item} control={<Radio />} label={item} />
                                    ))}
                                </RadioGroup>
                            </div>
                            } 

                            {/* Se for do tipo Text_Question ou Laboratory question ou Ventilation question*/}
                            { (question.qst_type === "Text_Question" || question.qst_type === "Laboratory question" || question.qst_type === "Ventilation question") && 
                            <TextField name={String(question.qstId)} label={question.dsc_qst} onChange={handleChange}/>
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

export default ModuloDois;