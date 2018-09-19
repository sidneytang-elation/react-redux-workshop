import React from 'react';
import MessageListEntry from './MessageListEntry';
import styles from './MessageList.less';


export default class MessageList extends React.Component {
    render() {
        const messagesList = this.props.messages.map(message => (
            <MessageListEntry
                key={message.id}
                message={message}
                selected={this.props.currentMessageId === message.id}
                onClick={() => this.props.onClick(message.id)}/>
        ));

        return (
            <div className={styles.container}>
                <ol>{messagesList}</ol>
            </div>
        );
    }
}
