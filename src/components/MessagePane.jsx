import React from 'react';
import { connect } from 'react-redux';

import { createMessage } from '../modules/messages/messagesActions'

import styles from './MessagePane.less';

class MessagePane extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: '', author: '', body: ''};
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
    this.props.create({...this.state});
  }

  render() {
    return (
      <div className={styles.container}>
        <h2><span className={styles.closeButton}>×</span>Create Message</h2>
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
            <button onClick={this.handleSave}>Save</button> <button onClick={this.handleReset}>Reset</button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  create: (data) => {
    dispatch(createMessage(data));
  }
});

const mapStateToProps = (state, ownProps) => ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(MessagePane);
