import React from 'react';
import { string } from 'prop-types';
import './CompImagem.css';

const CompImagem = ({ srcImage, altName }) => (
  <img className="CompImagem-image" src={ srcImage } alt={ altName } />
);

// class CompImagem extends React.Component {
//   render() {
//     const { srcImage, altName } = this.props;
//     return (
//       <img src={ srcImage } alt={ altName } />
//     );
//   }
// }

CompImagem.propTypes = {
  srcImage: string.isRequired,
  altName: string.isRequired,
};

export default CompImagem;
