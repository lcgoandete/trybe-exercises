import React from 'react';
import { shape, string, number } from 'prop-types';
import CompImagem from '../CompImagem/CompImagem';
import Texto from '../Texto/Texto';

import './Episodio.css';

class Episodio extends React.Component {
  render() {
    const { episodio } = this.props;
    const { image, name, season, summary } = episodio;
    return (
      <section>
        <CompImagem
          srcImage={ image.original }
          altName={ `imagem do episodio ${name}, da temporada ${season}` }
        />
        <Texto nome={ name } sumario={ summary } />
      </section>
    );
  }
}

Episodio.propTypes = {
  episodio: shape({
    image: shape({
      original: string,
    }),
    name: string,
    season: number,
    summary: string,
  }).isRequired,
};

export default Episodio;
