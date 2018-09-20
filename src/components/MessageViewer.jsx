import React from 'react';
import MessageList from './MessageList';
import MessagePane from './MessagePane';
import shortid from 'shortid';
import styles from './MessageViewer.less';


export default class MessageViewer extends React.Component {

    state = {
        messages: [
            { id: shortid.generate(), title: 'Forrest Gump', author: 'Tom Hanks', body: 'My mama always said life was like a box of chocolates. You never know what you\'re gonna get.' },
            { id: shortid.generate(), title: 'The Godfather', author: 'Marlon Brando', body: 'I\'m gonna make him an offer he can\'t refuse.' },
            { id: shortid.generate(), title: 'The Terminator', author: 'Arnold Schwarzenegger', body: 'I\'ll be back.' },
        ]
    }

    createMessage = (messageContent) => {
        const {title, author, body} = messageContent;
        this.setState({
            messages: this.state.messages.concat({
                    id: shortid.generate(),
                    ...{title, author, body},
                }
            ),
        });
    }

    render() {

        return (
            <div className={styles.container}>
                <MessageList messages={this.state.messages}/>
                <MessagePane
                    onSave={(messageContents) => this.createMessage(messageContents)}/>
            </div>
        );
    }
}
