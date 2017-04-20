import React from 'react';
import MessagePreview from './MessagePreview';
import styles from './MessageList.less';


export default class MessageList extends React.Component {

  render() {
    const { messages } = this.props;

    return (
      <div className={styles.container}>
        {messages.map(message => <MessagePreview key={message.id} message={message} />)}
      </div>
    );
  }
}
