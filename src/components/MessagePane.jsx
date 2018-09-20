import React from 'react';
import { connect } from 'react-redux';
import shortid from 'shortid';
import { createMessage, setLoudMode } from '../modules/messages/messagesActions';
import styles from './MessagePane.less';

const mapDispatchToProps = (dispatch, ownProps) => ({
    createMessage: (id, title, author, body) => {
        dispatch(createMessage(id, title, author, body));
    },
    getLoud: () => {
        dispatch(setLoudMode(true));
    },
});

class MessagePane extends React.Component {

    static propTypes = {
    }

    constructor(props) {
        super(props);
        this.state = MessagePane.getInitialState();
    }

    static getInitialState() {
        return {
          title: '',
          author: '',
          body: '',
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    clearFields = () => {
        this.setState(MessagePane.getInitialState());
    }

    saveMessage = () => {
        this.props.createMessage(
            shortid.generate(),
            this.state.title,
            this.state.author,
            this.state.body,
        )
    }

    getLoud = () => {
        this.props.getLoud();
    }

    render() {
        const {title, author, body} = this.state;
        return (
            <div className={styles.container}>
                <p>Title</p>
                <input
                    name="title"
                    type="text"
                    value={title}
                    onChange={this.handleChange}/><br/>
                <p>Author</p>
                <input
                    name="author"
                    type="text"
                    value={author}
                    onChange={this.handleChange}/><br/>
                <p>Body</p>
                <input
                    name="body"
                    type="text"
                    value={body}
                    onChange={this.handleChange}/><br/>

                <div className={styles.actionsContainer}>
                    <button onClick={this.saveMessage}>Save</button>
                    <button onClick={this.clearFields}>Reset</button>
                    <button onClick={this.getLoud}>GET LOUD</button>
                </div>
            </div>
        );
    }
}

export default connect(null, mapDispatchToProps)(MessagePane);
