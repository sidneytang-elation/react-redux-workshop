import React from 'react';
import MessageList from './MessageList';
import MessagePane from './MessagePane';
import shortid from 'shortid';
import styles from './MessageViewer.less';


export default class MessageViewer extends React.Component {

    state = {
        messageSequence: [289103, 122019, 938900],
        messagesById: {
            289103: { id: 289103, title: 'Forrest Gump', author: 'Tom Hanks', body: 'My mama always said life was like a box of chocolates. You never know what you\'re gonna get.' },
            122019: { id: 122019, title: 'The Godfather', author: 'Marlon Brando', body: 'I\'m gonna make him an offer he can\'t refuse.' },
            938900: { id: 938900, title: 'The Terminator', author: 'Arnold Schwarzenegger', body: 'I\'ll be back.' },
        },
        currentMessageId: 289103,
    }

    getMessagesInSequence = () => {
        const messagesById = this.state.messagesById;
        return this.state.messageSequence.map(
            function(messageId) {
                return messagesById[messageId];
            }
        );
    }

    selectMessage = (messageId) => {
        this.setState({
            currentMessageId: messageId,
        });
        console.log("Set current message to " + messageId);
    }

    createMessage = (messageContents) => {
        const newMessageId = shortid.generate();

        // omg surely there's a nicer way to do this.
        this.setState({
            messageSequence: this.state.messageSequence.concat(newMessageId),
            messagesById: {
                ...this.state.messagesById,
                [newMessageId]: {
                    id: newMessageId,
                    ...messageContents
                }
            }
        });
        console.log("Created message " + newMessageId);
    }

    render() {

        return (
            <div className={styles.container}>
                <MessageList
                    messages={this.getMessagesInSequence()}
                    currentMessageId={this.state.currentMessageId}
                    onClick={(messageId) => this.selectMessage(messageId)}/>
                <MessagePane
                    onSave={(messageContents) => this.createMessage(messageContents)}/>
            </div>
        );
    }
}
