import React from 'react'
import classNames from 'classnames'

const Button = ({children, onClick, outline, className}) => {
  const classes = classNames('button', className, {
    'button--outline': outline,
  });

  return (
    <button
      className={classes}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
