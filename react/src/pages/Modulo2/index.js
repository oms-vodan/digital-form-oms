import React, { useState, useEffect } from 'react';
import './styles.css';
import api from '../../services/api';

function ModuloDois() {

    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        async function loadForm() {
          const response = await api.get('/form/2');
          console.log(response.data);
          setQuestions(response.data);
        }
    
        loadForm();
    }, [])

    function submit(e) {
        e.preventDefault();
        console.log(e);
    }

    return (
        <main className="container">
            <div>
                <header className="index">
                    HUGG > 189123492 > <b>Acompanhamento</b>
                </header>
                <h2>Módulo 2 - Acompanhamento</h2>
                <form className="module" onSubmit={submit}>
                    <div className="">
                    {questions.map((question, index) => (
                        <div key="question.qstId">

                            {/* Se for um novo grupo de questões e o index for ímpar*/}
                            { (question.dsc_qst_grp !== "" && question.dsc_qst_grp !== questions[index - 1].dsc_qst_grp && index%2===1) && 
                            <div> </div>
                            }

                            {/* Se for um novo grupo de questões*/}
                            { (question.dsc_qst_grp !== "" && question.dsc_qst_grp !== questions[index - 1].dsc_qst_grp) && 
                            <h3>{index} {question.dsc_qst_grp}</h3>
                            }

                            {/* Se for do tipo Date question*/}
                            { (question.qst_type === "Date question") && 
                            <div>{question.qst_type} - {question.dsc_qst}</div>
                            }

                            {/* Se for do tipo Number question*/}
                            { (question.qst_type === "Number question") && 
                            <div>{question.qst_type} - {question.dsc_qst}</div>
                            }  

                            {/* Se for do tipo YNU_Question*/}
                            { (question.qst_type === "YNU_Question") && 
                            <div>{question.qst_type} - {question.dsc_qst}</div>
                            } 

                            {/* Se for do tipo List question*/}
                            { (question.qst_type === "List question") && 
                            <div>{question.qst_type} - {question.dsc_qst}</div>
                            } 

                            {/* Se for do tipo Text_Question*/}
                            { (question.qst_type === "Text_Question") && 
                            <div>{question.qst_type} - {question.dsc_qst}</div>
                            } 

                            {/* Se for do tipo Laboratory question*/}
                            { (question.qst_type === "Laboratory question") && 
                            <div>{question.qst_type} - {question.dsc_qst}</div>
                            } 

                            {/* Se for do tipo YNUN_Question*/}
                            { (question.qst_type === "YNUN_Question") && 
                            <div>{question.qst_type} - {question.dsc_qst}</div>
                            } 

                            {/* Se for do tipo Ventilation question*/}
                            { (question.qst_type === "Ventilation question") && 
                            <div>{question.qst_type} - {question.dsc_qst}</div>
                            } 
                        </div>
                    ))}
                    </div>
                </form>
            </div>
        </main>
    );
}

export default ModuloDois;