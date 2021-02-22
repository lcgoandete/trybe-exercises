import { Component } from 'react';
import data from '../../data';
import Episodio from '../Episodio/Episodio';

class Dados extends Component {
  render() {
    return data.map((element) => (
      <Episodio key={ element.id } episodio={ element } />
    ));
  }
}

export default Dados;
