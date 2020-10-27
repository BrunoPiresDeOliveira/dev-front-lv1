import React from 'react';
import { Link } from 'react-router-dom';
import logoAws from '../../assets/images/aws-logo.png'

import './styles.css';

function Home() {
  return (
    <div id="page-home">
      <div className="page-home-content">
        <div>
          <img src={logoAws} alt="Logo AWS" />
        </div>
        <div className="buttons-container">
          <Link to="/members" className="members">
            Membros
          </Link>
          <Link to="/about" className="about">
            Sobre
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home;
