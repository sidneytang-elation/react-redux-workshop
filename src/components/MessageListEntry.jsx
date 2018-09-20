import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { selectMessage } from '../modules/messages/messagesActions';
import styles from './MessageListEntry.less';

const mapDispatchToProps = (dispatch, ownProps) => ({
    setCurrent: () => {
        dispatch(selectMessage(ownProps.message.id));
    }
});

class MessageListEntry extends React.Component {

    static propTypes = {
        /**
         * The message we'll render
         */
        message: PropTypes.shape({
            id: PropTypes.string,
            title: PropTypes.string,
            author: PropTypes.string,
            body: PropTypes.string,
            current: PropTypes.bool
        }),
    }

    onClick = () => {
        this.props.setCurrent();
    }

    render() {
        const message = this.props.message;
        return (
            <li className={cn(styles.listItem, message.current && styles.activeItem)}
                onClick={this.onClick}>
                <b>{message.title}</b> - {message.author}<br/>
                <i>{message.body}</i>
            </li>
        );
    }
}

export default connect(null, mapDispatchToProps)(MessageListEntry);
