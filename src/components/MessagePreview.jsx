import React, { PropTypes } from 'react';
import cn from 'classnames';
import styles from './MessagePreview.less';


export default class MessagePreview extends React.Component {

  static propTypes = {
    message: PropTypes.object.isRequired
  }

  state = { selected: false }

  handleClick = () => {
    this.setState({ selected: !this.state.selected });
  }

  render() {
    const { message } = this.props;
    const { selected } = this.state;

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
