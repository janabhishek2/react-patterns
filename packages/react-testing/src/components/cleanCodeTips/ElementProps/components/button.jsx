import styles from "./button.module.css";
import React from 'react';
const Button = ({ Name = "button", size = "m", className = "", ...otherProps }) => {
  return (
    <Name
      {...otherProps}
      className={`${styles.button} ${styles[size]} ${className}`}
    />
  );
};

export default Button;
