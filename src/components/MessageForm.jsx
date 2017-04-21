import React from 'react';
import styles from './MessageForm.less';

import FormInput from './FormInput.jsx';
import FormButton from './FormButton.jsx';

import cn from 'classnames';


export default class MessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      author: "",
      body: "",
      error: ""
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
      error: ''
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    if(this.state.title == '') {
      this.setState({error: 'Please fill in a title'});
      return;
    }
   if(this.state.author == '') {
      this.setState({error: 'Please fill in an author'});
      return;
    }
    if(this.state.body == '') {
      this.setState({error: 'Please fill in a body'});
      return;
    }
   
    this.props.action({
      title: this.state.title,
      author: this.state.author,
      body: this.state.body
    })

    this.resetForm(event);
  }

  resetForm(event) {
    event.preventDefault();
    this.setState({
      title: '', 
      author: '',
      body: '',
      error: ''
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Create a new book</h2>
        <div className={cn(styles.error, { [styles.visible]: this.state.error != ''})}>{this.state.error}</div>
        <FormInput name="title" label="Title" value={this.state.title} onChange={this.handleChange} /> 
        <FormInput name="author" label="Author" value={this.state.author} onChange={this.handleChange} /> 
        <FormInput name="body" label="Description" value={this.state.body} onChange={this.handleChange} /> 
        <FormButton value="Add book" onClick={this.handleSubmit} />
        <FormButton value="Reset" onClick={this.resetForm} />
      </form>
    );
  }
}

