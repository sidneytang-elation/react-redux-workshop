import React from 'react';
import styles from './MessagePane.less';
import shortid from 'shortid';
import cn from 'classnames';


export default class MessagePane extends React.Component {
  state = {
    title: '',
    author: '',
    body: '',
  }

  handleTitleChange = (e) => {
    this.setState({ title: e.currentTarget.value });
  }

  handleAuthorChange = (e) => {
    this.setState({ author: e.currentTarget.value });
  }

  handleBodyChange = (e) => {
    this.setState({ body: e.currentTarget.value });
  }

  handleSubmit = () => {
    const message = Object.assign({}, this.state);
    const id = shortid.generate();
    message.id = id;
    this.props.onSubmitMessage(message);
  }

  handleReset = () => {
    this.setState({
      title: '',
      author: '',
      body: '',
    });
  }

  render() {
    const { onSubmitMessage } = this.props;
    const { title, author, body } = this.state;
    return (
      <div className={styles.container}>
        <label htmlFor="title">Title</label>
        <input name="title" type="text" value={title} onChange={this.handleTitleChange} /><br />
        <label htmlFor="author">Author</label>
        <input name="author" type="text" value={author} onChange={this.handleAuthorChange} /><br />
        <label htmlFor="body">Body</label>
        <input name="body" type="text" value={body} onChange={this.handleBodyChange} /><br /><br />
        <button type="submit" className={cn(styles.submitButton)} onClick={this.handleSubmit}>Submit</button>
        <button className={styles.button} onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}
