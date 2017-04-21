import React from 'react';
import styles from './FormButton.less';

export default class FormButton extends React.Component {
  render() {
    return (
      <button className={styles.btn} onClick={this.props.onClick}>{this.props.value}</button>
    );
  }
}


