import React from 'react';
import { connect } from 'react-redux'
import { getIsLoud } from '../modules/messages/messagesSelectors'
import LoudMessagePane from './LoudMessagePane';
import MessageList from './MessageList';
import MessagePane from './MessagePane';
import styles from './MessageViewer.less';

const mapStateToProps = (state, ownProps) => ({
    currentlyLoud: getIsLoud(state),
});

class MessageViewer extends React.Component {

    render() {

        // QUESTION - Is there a nicer way to nest this condition below?
        let messagePane;
        if (this.props.currentlyLoud) {
            messagePane = <LoudMessagePane/>
        }
        else {
            messagePane = <MessagePane/>
        }

        return (
            <div className={styles.container}>
                <MessageList/>
                {messagePane}
            </div>
        );
    }
}

export default connect(mapStateToProps)(MessageViewer);
