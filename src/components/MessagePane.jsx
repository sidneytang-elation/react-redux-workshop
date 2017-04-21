import React from 'react';
import styles from './MessagePane.less';
import MessageForm from './MessageForm.jsx';


export default class MessagePane extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.container}>
        <MessageForm action={this.props.action} />
      </div>
    );
  }
}
