import React from 'react';
import { connect } from 'react-redux';
import shortid from 'shortid';
import Button from './Button';
import Input from './Input';
import styles from './MessagePane.less';
import { createMessage, setRightPaneIsLoud } from '../modules/messages';


const mapDispatchToProps = dispatch => ({
  save: (message) => {
    dispatch(createMessage(message));
  },
  switchPane: () => {
    dispatch(setRightPaneIsLoud(true));
  }
});

class MessagePane extends React.Component {

  state = {
    title: '',
    author: '',
    body: ''
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSave = () => {
    const { save } = this.props;
    const { title, author, body } = this.state;

    save({
      id: shortid.generate(),
      title,
      author,
      body
    });
  }

  handleReset = () => {
    this.setState({ title: '', author: '', body: '' });
  }

  handlePaneSwitch = () => {
    this.props.switchPane();
  }

  render() {
    const { title, author, body } = this.state;

    return (
      <div className={styles.container}>
        <div className={styles.header}>Create Message</div>
        <label className={styles.label}>Title</label>
        <Input value={title} name="title" onChange={this.handleChange} />
        <label className={styles.label}>Author</label>
        <Input value={author} name="author" onChange={this.handleChange} />
        <label className={styles.label}>Body</label>
        <Input value={body} name="body" onChange={this.handleChange} />
        <div className={styles.buttonContainer}>
          <Button className={styles.save} onClick={this.handleSave}>Save</Button>
          <Button onClick={this.handleReset}>Reset</Button>
          <Button className={styles.getLoud} onClick={this.handlePaneSwitch}>Get Loud</Button>
        </div>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(MessagePane);
