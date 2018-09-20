import React from 'react';
import PropTypes from 'prop-types';
import styles from './MessagePane.less';

export default class MessagePane extends React.Component {

    static propTypes = {
        /**
         * A function that takes title, author, body for us to create a new
         * message with.
         */
        onSave: PropTypes.func.isRequired,
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
                    <button
                        onClick={() => this.props.onSave({title, author, body})}>Save</button>

                    <button
                        onClick={this.clearFields}>Reset</button>
                </div>
            </div>
        );
    }
}
