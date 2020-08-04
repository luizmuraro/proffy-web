import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/42557783?s=460&u=e01b4e59ef47c49c214efe5a58d29a939453c7a9&v=4" alt="Muraro" />
                <div>
                    <strong>Luiz Guilherme Muraro</strong>
                    <span>Química</span>
                </div>
            </header>
            <p>
                Entusiasta das melhores tecnologia de química avançada.
                        <br /><br />
                        Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências.
                    </p>

            <footer>
                <p>
                    Preço/hora
                            <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                            Entrar em contato
                        </button>
            </footer>
        </article>
    )
}

export default TeacherItem