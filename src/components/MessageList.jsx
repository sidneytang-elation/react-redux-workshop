import React from 'react';
import styles from './MessageList.less';


export default class MessageList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.container}>
        <ul>
          {this.props.items.map((props) =>
          <li key={props.key.toString()}>
            <span className={styles.title}>{props.title}</span>-<span className={styles.author}>{props.author}</span>
            <div className={styles.description}>{props.body}</div>
          </li>
          )}
        </ul>
      </div>
    );
  }
}
