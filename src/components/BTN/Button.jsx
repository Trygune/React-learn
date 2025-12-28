import React from 'react';
import './Button.css';
import PropTypes from 'prop-types';

function Button({ children, handleclick = () => {}, ...props }) {
  return (<button onClick={handleclick} className="mybtn btn" {...props}>{children}</button>);
}

Button.propTypes = {
  handleclick: PropTypes.func.isRequired,
  children: PropTypes.element,
};

export default Button;
