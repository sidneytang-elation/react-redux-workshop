import React from 'react';
import PropTypes from 'prop-types';
import MessageListEntry from './MessageListEntry';
import styles from './MessageList.less';


export default class MessageList extends React.Component {

    static propTypes = {
        /**
         * A list of all of the messages we'll render
         */
        messages: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string,
            title: PropTypes.string,
            author: PropTypes.string,
            body: PropTypes.string,
        })),
    }

    render() {
        return (
            <div className={styles.container}>
                <ol>
                {this.props.messages.map(message => (
                    <MessageListEntry
                        key={message.id}
                        message={message}/>
                ))}
                </ol>
            </div>
        );
    }
}
