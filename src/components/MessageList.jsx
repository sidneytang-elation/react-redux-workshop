import React from 'react';
import styles from './MessageList.less';

import MessageListItem from './MessageListItem';


export default class MessageList extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        {this.props.messages.map(message => 
            <MessageListItem key={message.id} title={message.title} author={message.author} body={message.body}></MessageListItem>
        )}
      </div>
    );
  }
}
