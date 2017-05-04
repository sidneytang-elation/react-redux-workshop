import React from 'react';
import { connect } from 'react-redux';
import MessagePreview from './MessagePreview';
import styles from './MessageList.less';
import { getMessages } from '../modules/messages';


const mapStateToProps = state => ({
  messages: getMessages(state)
});

class MessageList extends React.Component {
  render() {
    const { messages } = this.props;

    return (
      <div className={styles.container}>
        {messages.map(message => <MessagePreview key={message.id} messageId={message.id} />)}
      </div>
    );
  }
}

export default connect(mapStateToProps)(MessageList);
