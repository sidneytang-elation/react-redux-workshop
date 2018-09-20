import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './MessageListEntry.less';


export default class MessageListEntry extends React.Component {

    static propTypes = {
        /**
         * The message we'll render
         */
        message: PropTypes.shape({
            id: PropTypes.string,
            title: PropTypes.string,
            author: PropTypes.string,
            body: PropTypes.string,
        }),
    }

    constructor(props) {
        super(props);
        this.state = {selected: false};
    }

    onClick = () => {
        this.setState({selected: !this.state.selected});
    }

    render() {
        return (
            <li className={cn(styles.listItem, this.state.selected && styles.activeItem)}
                onClick={this.onClick}>
                <b>{this.props.message.title}</b> - {this.props.message.author}<br/>
                <i>{this.props.message.body}</i>
            </li>
        );
    }
}
