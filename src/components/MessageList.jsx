import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getMessages } from '../modules/messages/messagesSelectors';
import MessageListEntry from './MessageListEntry';
import styles from './MessageList.less';

const mapStateToProps = (state, ownProps) => ({
    messages: getMessages(state),
});

class MessageList extends React.Component {

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

export default connect(mapStateToProps)(MessageList);
