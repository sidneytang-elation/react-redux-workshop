import React from 'react';
import MessageList from './MessageList';
import MessagePane from './MessagePane';
import styles from './MessageViewer.less';


export default class MessageViewer extends React.Component {

  state = {
    /* fill me in */
  }

  render() {
    return (
      <div className={styles.container}>
        <MessageList />
        <MessagePane />
      </div>
    );
  }
}
