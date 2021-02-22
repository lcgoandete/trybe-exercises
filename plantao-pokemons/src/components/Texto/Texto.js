import React from 'react';
import { string } from 'prop-types';
import './Texto.css';

const Texto = ({ nome, sumario }) => (
  <div>
    <h2>{ nome }</h2>
    <p>{ sumario }</p>
  </div>
);

Texto.propTypes = {
  nome: string.isRequired,
  sumario: string.isRequired,
};

export default Texto;
