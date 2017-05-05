import React from 'react';
import { connect } from 'react-redux';

import styles from './MessageList.less';

import MessageListItem from './MessageListItem';


class MessageList extends React.Component {
  render() {
    let sortedMessages = Object.values(this.props.messages);
    sortedMessages.sort((a, b) => {
        a = a.title.toLowerCase();
        b = b.title.toLowerCase();
        return a < b? -1 : a > b? 1 : 0
    });
    return (
      <div className={styles.container}>
        {sortedMessages.map(message => 
            <MessageListItem key={message.id} id={message.id} title={message.title} author={message.author} body={message.body}></MessageListItem>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
});

const mapStateToProps = (state, ownProps) => ({
    messages: state.messages.byId
});

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
