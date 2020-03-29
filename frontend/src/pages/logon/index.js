import React from 'react';
import './styles.css';

import { FiLogIn } from 'react-icons/fi'
import LogoImg from '../../assets/logo.svg';
import HeroesImg from '../../assets/heroes.png';
import { Link } from 'react-router-dom';

export default function Logon(props){
  return(
    <div className="logon-container">
      <section className="form">
        <img src={LogoImg} alt="Be The Hero"/>
        <form>
          <h1>Faça o seu logon</h1>
          <input placeholder="Sua ID"/>
          <button className="button" type="submit">Entrar</button>
          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#e02041"/>
            Não tenho cadastro
            </Link>
        </form>
      </section>
      
      <img src={HeroesImg} alt="Heroes"/>
    </div>
  );
}