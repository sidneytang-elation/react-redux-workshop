import React, { PropTypes } from 'react';
import cn from 'classnames';
import styles from './Button.less';


export default function Button({ className, type, children, ...props }) {
  return <button className={cn(styles.button, className)} type={type} {...props}>{children}</button>;
}

Button.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.node
};
Button.defaultProps = {
  className: '',
  type: 'button',
  children: null
};
