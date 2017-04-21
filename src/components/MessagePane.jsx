import React from 'react';
import styles from './MessagePane.less';


export default class MessagePane extends React.Component {
  constructor(props) {
    super(props);
    this.state = {id: null, title: '', author: '', body: ''};
    this.saveCallback = props.saveCallback || undefined;
  }

  handleChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value
    });
  }

  handleReset = (event) => {
    this.setState({title: '', author: '', body: ''});
  }

  handleSave = (event) => {
    if (this.saveCallback) {
        this.saveCallback({...this.state});
    }
  }

  render() {
    return (
      <div className={styles.container}>
        <h2>Create Message</h2>
        <div className={styles.formRowHorizontal}>
            <label>
                Title: <input name="title" value={this.state.title} onChange={this.handleChange}></input>
            </label>
        </div>
        <div className={styles.formRowHorizontal}>
            <label>
                Author: <input name="author" value={this.state.author} onChange={this.handleChange}></input>
            </label>
        </div>
        <div className={styles.formRowHorizontal}>
            <label>
                Body:<br />
                <textarea name="body" value={this.state.body} onChange={this.handleChange}></textarea>
            </label>
        </div>
        <div className={styles.formRowHorizontal}>
            <button>Save</button> <button onClick={this.handleReset}>Reset</button>
        </div>
      </div>
    );
  }
}
