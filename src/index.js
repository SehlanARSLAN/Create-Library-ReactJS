import React from 'react'
import styles from './styles.module.css'
import PropTypes from 'prop-types';

const Button = ({ type = 'default', children, onClick }) => {
  return (
    <button className={`${styles.button} ${styles[`button--${type}`]}`} onClick={onClick}>
      {children}
    </button>
  )
}

Button.propTypes = {
  type: PropTypes.oneOf(['primary', 'default', 'dashed', 'text', 'link']),
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

export default Button;
