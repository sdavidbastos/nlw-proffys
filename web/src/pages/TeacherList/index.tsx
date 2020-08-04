import React from "react";

import PageHeader from "../../components/PageHeader";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg"

import "./styles.css";

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis.">
                <form id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Matéria</label>
                        <input type="text" id="subject" />
                    </div>
                    <div className="input-block">
                        <label htmlFor="week_day">Dia da Semana</label>
                        <input type="text" id="week_day" />
                    </div>
                    <div className="input-block">
                        <label htmlFor="time">Hora</label>
                        <input type="text" id="time" />
                    </div>
                </form>
            </PageHeader>
            <main>
                <article className="teacher-item">
                    <header>
                        <img
                            src="https://avatars0.githubusercontent.com/u/52141166?s=460&u=87c8afe37d467a2a5ba8c37abafc2fdad44e713b&v=4"
                            alt="David Tavares"
                        />
                        <div>
                            <strong>David Tavares</strong>
                            <span>Calculo II</span>
                        </div>
                    </header>
                    <p>
                        Calculando o limite da minha paciência e derivando as funções mais cabulosas!
                        <br></br>
                        Tio Petros, um abraço!(referência: Tio Petros e a Conjectura de Goldbach)
                    </p>
                    <footer>
                        <p>Preço/Hora
                            <strong>R$ 500,00</strong>
                            <span>(Corre que o preço ta fino)</span>
                        </p>

                        <button type="button">
                            <img src={whatsappIcon} alt="WhatsApp"/>
                            Entrar em Contato
                        </button>

                    </footer>
                </article>
            </main>
        </div>
    );
}

export default TeacherList;
