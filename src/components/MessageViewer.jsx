import React from 'react';
import { connect } from 'react-redux';
import MessageList from './MessageList';
import MessagePane from './MessagePane';
import LoudMessagePane from './LoudMessagePane';
import styles from './MessageViewer.less';


const mapStateToProps = state => ({
  rightPaneIsLoud: state.messages.rightPaneIsLoud
});

class MessageViewer extends React.Component {
  render() {
    const { rightPaneIsLoud } = this.props;

    return (
      <div className={styles.container}>
        <MessageList />
        {rightPaneIsLoud ? <LoudMessagePane /> : <MessagePane />}
      </div>
    );
  }
}

export default connect(mapStateToProps)(MessageViewer);
