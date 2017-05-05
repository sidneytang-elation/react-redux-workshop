import React from 'react';
import styles from './MessageList.less';
import cn from 'classnames';


export default class MessageList extends React.Component {
  render() {
    const { messages, highlightIds, onMessageClick } = this.props;
    const listItems = messages.map(message => (
      <li
        key={message.id}
        className={cn(highlightIds.includes(message.id) && styles.highlight)}
        onClick={() => onMessageClick(message.id)}
      >
        <strong>{`${message.title} - ${message.author}`}</strong><br /><span>{message.body}</span>
      </li>
    ));

    return (
      <div className={styles.container}>
        <ul className={styles.ul}>
          {listItems}
        </ul>
      </div>
    );
  }
}
