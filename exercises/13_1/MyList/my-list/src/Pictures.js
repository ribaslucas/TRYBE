import React from 'react';
import PropTypes from 'prop-types'
const Pictures = props => {
  // const { src, alt, legenda, height } = props;
  return (
    <div>
      <img src="https://course.betrybe.com/images/logo_white.png" alt="Logo da Trybe"
      height="200" legenda="Lista feita na Trybe" />
    </div>
  );
};
export default Pictures;

Pictures.propTypes = {
  alt: PropTypes.string
  height: PropTypes.number
  required: PropC
}