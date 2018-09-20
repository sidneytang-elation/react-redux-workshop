import React from 'react';
import { connect } from 'react-redux';
import { setLoudMode } from '../modules/messages/messagesActions';
import { getCurrentMessage } from '../modules/messages/messagesSelectors';
import styles from './LoudMessagePane.less';


/**
 * This function is used by react-redux to map relevant parts of the redux store's
 * state into props this component should receive. For example, if a component wants
 * an isHighlighted boolean prop so it can add highlighting styles if necessary,
 * you might do something like this:
 *   const mapStateToProps = (state, ownProps) => ({
 *     isHighlighted: ownProps.id === state.foo.highlightedObjectId
 *   });
 *
 * The component would then receive an `isHighlighted` prop.
 * - the `state` parameter is the redux store state
 * - the `ownProps` parameter is the set of props passed into the component via JSX
 *   For example, <SomeComponent id={389} /> --> ownProps.id === 389
 */
const mapStateToProps = (state, ownProps) => ({
    message: getCurrentMessage(state),
});

/**
 * This function is used by react-redux to provide action dispatching capabilities
 * to this component via props. For example, if a component wants to be able to
 * create a new `coolThing` by dispatching the `createCoolThing` action, you might
 * do something like this:
 *   const mapDispatchToProps = (dispatch, ownProps) => ({
 *     create: (coolThing) => {
 *       dispatch(createCoolThing(coolThing));
 *     }
 *   });
 *
 * The component would then receive a 'create' prop, and can create `coolThing`s
 * by calling `this.props.create({ id: 389235, name: 'My new coolThing' })`.
 * - the `dispatch` parameter is the redux store's dispatch function
 * - the `ownProps` parameter is the same as the `ownProps` parameter for `mapStateToProps` above.
 */
const mapDispatchToProps = (dispatch, ownProps) => ({
    quietDown: () => {
        dispatch(setLoudMode(false));
    },
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

    quietDown = () => {
        this.props.quietDown();
    }

    render() {
        const messageBody = this.props.message ? this.props.message.body : "(choose a message)";
        return (
            <div className={styles.container}>
                {messageBody}<br/>
                <button onClick={this.quietDown}>quiet down please</button>
            </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoudMessagePane);
