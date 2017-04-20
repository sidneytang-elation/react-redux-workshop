import React from 'react';
import shortid from 'shortid';
import MessageList from './MessageList';
import MessagePane from './MessagePane';
import styles from './MessageViewer.less';
import { default as messageData } from '../data/messages';


export default class MessageViewer extends React.Component {

  state = {
    messages: messageData
  }

  saveMessage = ({ title, author, body }) => {
    const { messages } = this.state;
    const newMessages = [
      ...messages,
      {
        id: shortid.generate(),
        title,
        author,
        body
      }
    ]
    this.setState({ messages: newMessages });
  }

  render() {
    const { messages } = this.state;

    return (
      <div className={styles.container}>
        <MessageList messages={messages} />
        <MessagePane onSave={this.saveMessage} />
      </div>
    );
  }
}
