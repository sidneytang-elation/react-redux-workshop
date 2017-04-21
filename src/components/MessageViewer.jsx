import React from 'react';
import MessageList from './MessageList';
import MessagePane from './MessagePane';
import styles from './MessageViewer.less';

export default class MessageViewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {messages: [...props.messages]};
  }

  render() {
    return (
      <div className={styles.container}>
        <MessageList messages={this.state.messages}/>
        <MessagePane />
      </div>
    );
  }
}
