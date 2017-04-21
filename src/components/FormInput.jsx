import React from 'react';
import styles from './FormInput.less';


export default class FormInput extends React.Component {
  render() {
     return (
      <div className={styles.container}>
        <label>{this.props.label}:</label>
        <input type="text" name={this.props.name} value={this.props.value} onChange={this.props.onChange}/>
      </div>
    );
  }
}


