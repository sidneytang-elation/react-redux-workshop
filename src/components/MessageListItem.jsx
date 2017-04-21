import React from 'react';
import styles from './MessageListItem.less';

import cn from 'classnames';


export default class MessageListItem extends React.Component {
  state = {
    active: false
  }

  toggleState = (event) => {
    this.setState({active: !this.state.active});
  }

  render() {
    return (
      <div className={cn(styles.container, this.state.active && styles.containerActive)} onClick={this.toggleState}>
        <div className={styles.header}><strong>{this.props.title}</strong> - {this.props.author}</div>
        <div className={styles.body}><em>{this.props.body}</em></div>
      </div>
    );
  }
}