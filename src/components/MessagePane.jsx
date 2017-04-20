import React, { PropTypes } from 'react';
import Button from './Button';
import Input from './Input';
import styles from './MessagePane.less';


export default class MessagePane extends React.Component {

  static propTypes = {
    onSave: PropTypes.func.isRequired
  }

  state = {
    title: '',
    author: '',
    body: ''
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSave = () => {
    const { onSave } = this.props;
    const { title, author, body } = this.state;

    onSave({
      title,
      author,
      body
    });
  }

  handleReset = () => {
    this.setState({ title: '', author: '', body: '' });
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
        <Button className={styles.save} onClick={this.handleSave}>Save</Button>
        <Button onClick={this.handleReset}>Reset</Button>
      </div>
    );
  }
}
