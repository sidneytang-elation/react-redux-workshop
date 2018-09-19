import React from 'react';
import cn from 'classnames';
import styles from './MessageListEntry.less';


export default class MessageListEntry extends React.Component {
    render() {
        return (
            <li className={cn(styles.listItem, this.props.selected && styles.activeItem)}
                onClick={this.props.onClick}>
                {this.props.message.title}
            </li>
        );
    }
}
