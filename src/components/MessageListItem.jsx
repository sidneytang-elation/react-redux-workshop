import React from 'react';
import { connect } from 'react-redux';

import { selectMessage } from '../modules/messages/messagesActions';

import styles from './MessageListItem.less';

import cn from 'classnames';


class MessageListItem extends React.Component {
  toggleState = (event) => {
    this.props.select(this.props.id === this.props.selectedId? null : this.props.id);
  }

  render() {
    console.log(this.props.id);
    return (
      <div className={cn(styles.container, (this.props.selectedId === this.props.id) && styles.containerActive)} onClick={this.toggleState}>
        <div className={styles.header}><strong>{this.props.title}</strong> - {this.props.author}</div>
        <div className={styles.body}><em>{this.props.body}</em></div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  select: (id) => {
    dispatch(selectMessage(id));
  }
});

const mapStateToProps = (state, ownProps) => ({
    selectedId: state.messages.selectedId
});

export default connect(mapStateToProps, mapDispatchToProps)(MessageListItem);
