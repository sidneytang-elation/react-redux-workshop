import React from 'react';
import { connect } from 'react-redux';
import cn from 'classnames';
import { selectMessage } from '../modules/messages/messagesActions';
import { messagePropType } from '../proptypes/messagesPropTypes';
import styles from './MessageListEntry.less';

const mapDispatchToProps = (dispatch, ownProps) => ({
    setCurrent: () => {
        dispatch(selectMessage(ownProps.message.id));
    }
});

class MessageListEntry extends React.Component {

    static propTypes = {
        message: messagePropType.isRequired,
    }

    handleClick = () => {
        this.props.setCurrent();
    }

    render() {
        const message = this.props.message;
        return (
            <li className={cn(styles.listItem, message.current && styles.activeItem)}
                onClick={this.handleClick}>
                <b>{message.title}</b> - {message.author}<br/>
                <i>{message.body}</i>
            </li>
        );
    }
}

export default connect(null, mapDispatchToProps)(MessageListEntry);
