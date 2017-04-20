import React, { PropTypes } from 'react';
import cn from 'classnames';
import styles from './Input.less';


export default function Input({ className, type, ...props }) {
  return (
    <input className={cn(styles.input, className)} type={type} {...props} />
  );
}

Input.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string.isRequired
};
Input.defaultProps = {
  className: '',
  type: 'text'
}
