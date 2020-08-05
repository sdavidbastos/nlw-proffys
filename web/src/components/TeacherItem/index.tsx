import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg"

import "./styles.css";

const TeacherItem = () => {
    return (
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
                Calculando o limite da minha paciência e derivando as funções
                mais cabulosas!
                <br></br>
                Tio Petros, um abraço!(referência: Tio Petros e a Conjectura de
                Goldbach)
            </p>
            <footer>
                <p>
                    Preço/Hora
                    <strong>R$ 500,00</strong>
                </p>

                <button type="button">
                    <img src={whatsappIcon} alt="WhatsApp" />
                    Entrar em Contato
                </button>
            </footer>
        </article>
    );
};

export default TeacherItem;