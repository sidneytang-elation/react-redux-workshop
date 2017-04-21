import React from 'react';
import MessageList from './MessageList';
import MessagePane from './MessagePane';
import styles from './MessageViewer.less';

import shortid from 'shortid';


export default class MessageViewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }

    this.addBook = this.addBook.bind(this)
  }

  addBook(book) {
    book.key = shortid.generate();
    this.setState({items: this.state.items.concat([book])})
  }

  render() {
    return (
      <div className={styles.container}>
        <MessageList items={this.state.items} />
        <MessagePane action={this.addBook} />
      </div>
    );
  }
}
