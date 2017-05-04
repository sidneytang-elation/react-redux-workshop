import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import cn from 'classnames';
import styles from './MessagePreview.less';
import { setSelectedMessageId } from '../modules/messages';


const mapStateToProps = (state, ownProps) => ({
  message: state.messages.byId[ownProps.messageId],
  selected: ownProps.messageId === state.messages.selectedMessageId
});

const mapDispatchToProps = dispatch => ({
  selectMessage: (id) => {
    dispatch(setSelectedMessageId(id));
  }
})

class MessagePreview extends React.Component {

  static propTypes = {
    message: PropTypes.object.isRequired
  }

  handleClick = () => {
    const { message, selected, selectMessage } = this.props;

    selectMessage(selected ? null : message.id);
  }

  render() {
    const { message, selected } = this.props;

    return (
      <div className={cn(styles.container, selected && styles.selected)} onClick={this.handleClick}>
        <div className={styles.header}>
          <span className={styles.title}>{message.title}</span> - {message.author}
        </div>
        <div className={styles.body}>{message.body}</div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessagePreview);
