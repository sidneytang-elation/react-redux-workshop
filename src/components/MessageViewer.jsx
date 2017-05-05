import React from 'react';
import MessageList from './MessageList';
import MessagePane from './MessagePane';
import styles from './MessageViewer.less';
import messages from '../data/messages';
import shortid from 'shortid';


export default class MessageViewer extends React.Component {

  state = {
    messages: [],
    highlightIds: [],
  }

  componentDidMount = () => {
    this.setState({ messages });
  }

  handleSubmitMessage = (message) => {
    this.setState({
      messages: [...this.state.messages, ...[message]],
    });
  }

  handleMessageClick = (messageId) => {
    if (this.state.highlightIds.includes(messageId)) {
      const highlightIds = this.state.highlightIds.filter(id => id !== messageId);
      this.setState({ highlightIds });
    } else {
      this.setState({ highlightIds: [...this.state.highlightIds, ...[messageId]] });
    }
  }

  render() {
    const { messages, highlightIds } = this.state;
    return (
      <div className={styles.container}>
        <MessageList messages={messages} highlightIds={highlightIds} onMessageClick={this.handleMessageClick} />
        <MessagePane onSubmitMessage={this.handleSubmitMessage} />
      </div>
    );
  }
}
