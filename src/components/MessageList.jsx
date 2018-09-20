import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getMessages } from '../modules/messages/messagesSelectors';
import { messagePropType } from '../proptypes/messagesPropTypes';
import MessageListEntry from './MessageListEntry';
import styles from './MessageList.less';

const mapStateToProps = (state, ownProps) => ({
    messages: getMessages(state),
});

class MessageList extends React.Component {

    static propTypes = {
        messages: PropTypes.arrayOf(messagePropType).isRequired,
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
