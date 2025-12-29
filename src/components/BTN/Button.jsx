import React from 'react';
import './Button.css';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';

// function Button({ children, handleclick = () => {}, ...props }) {
//   return (<button onClick={handleclick} className="mybtn btn" {...props}>{children}</button>);
// }
function Buttoncomp({ children, handleclick = () => {}, ...props }) {
  return <Button variant="outlined" onClick={handleclick} className="mybtn btn" {...props}>{children}</Button>;
}

Button.propTypes = {
  handleclick: PropTypes.func.isRequired,
  children: PropTypes.element,
};

export default Buttoncomp;
