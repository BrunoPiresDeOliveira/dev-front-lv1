import React from 'react';
import { Link } from 'react-router-dom';
import arrowLeft from '../../assets/images/left-arrow.png';
import awsLogo from '../../assets/images/aws-logo.png';

import './styles.css';

const PageHeader = (props) => {
  return (
    <header className="page-header">
      <div className="title">
        <Link to="/">
          <img src={arrowLeft} alt="Voltar" />
        </Link>
        <strong>{props.title}</strong>
        <Link to="/">
          <img src={awsLogo} alt="Logo AWS" />
        </Link>
      </div>
    </header>
  )
}

export default PageHeader;
