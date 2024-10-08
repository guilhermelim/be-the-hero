import React from 'react';
import './styles.css';

import LogoImg from '../../assets/logo.svg';
import { FiArrowLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom';

export default function Profile(props) {
  return (
    <div className="new-incident-conteiner">
    <div className="content">
      <section>
        <img src={LogoImg} alt="Be The Hero" />
        <h1>Cadastrar novo caso</h1>
        <p>Descreva o caso detalhadamente para encontrar um heróe para resolver isso.</p>

        <Link className="back-link" to="/profile">
          <FiArrowLeft size={16} color="#e02041" />
          Voltar para home
          </Link>

      </section>
      <form>
        <input placeholder="Título do caso" />
        <textarea placeholder="Descrição" />
        <input placeholder="Valor em reais" />

        <button className="button" type="submit">Cadastrar</button>

      </form>
    </div>
  </div>
  );
}