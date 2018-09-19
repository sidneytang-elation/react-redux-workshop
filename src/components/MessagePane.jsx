import React from 'react';
import styles from './MessagePane.less';

const initialState = {
    title: '',
    author: '',
    body: '',
}

export default class MessagePane extends React.Component {
    constructor(props) {
        super(props);
        this.state = {...initialState};
    }

    handleChange = (changeEvent) => {
        this.setState({
            [changeEvent.target.name]: changeEvent.target.value,
        })
    }

    clearFields = () => {
        this.setState({...initialState});
    }

    render() {
        return (
            <div className={styles.container}>
                <p>Title</p>
                <input
                    name="title"
                    type="text"
                    value={this.state.title}
                    onChange={this.handleChange}/><br/>
                <p>Author</p>
                <input
                    name="author"
                    type="text"
                    value={this.state.author}
                    onChange={this.handleChange}/><br/>
                <p>Body</p>
                <input
                    name="body"
                    type="text"
                    value={this.state.body}
                    onChange={this.handleChange}/><br/>

                <button
                    onClick={() => this.props.onSave({...this.state,})}>Save</button>

                <button
                    onClick={this.clearFields}>Reset</button>
            </div>
        );
    }
}
