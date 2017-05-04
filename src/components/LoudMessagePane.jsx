import React from 'react';
import { connect } from 'react-redux';
import Button from './Button';
import styles from './LoudMessagePane.less';
import { setRightPaneIsLoud } from '../modules/messages';


const mapStateToProps = state => ({
  message: state.messages.byId[state.messages.selectedMessageId] || null
});

const mapDispatchToProps = dispatch => ({
  switchPane: () => {
    dispatch(setRightPaneIsLoud(false));
  }
});

/**
 * This pane should show the body of the currently selected message, and
 * have a button that the user can click to switch the right pane from this
 * LoudMessagePane into the regular MessagePane (the create message form we
 * wrote in part 1 of the workshop).
 *
 * Hint: the handling of choosing which pane to display should be done in MessageViewer,
 * not here, but the button to trigger toggling to MessagePane can live here.
 * Redux makes this a lot simpler.
 */
class LoudMessagePane extends React.Component {
  handleClick = () => {
    this.props.switchPane();
  }

  render() {
    const { message } = this.props;

    return (
      <div className={styles.container}>
        {message && message.body}
        {!message && 'No message selected.'}
        <br />
        <Button onClick={this.handleClick}>Back</Button>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoudMessagePane);
