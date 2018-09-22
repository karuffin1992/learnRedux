import React, { Component } from 'react';

// Container - react component that has direct connection
// to state managed by Redux.

// Containers are known as "smart components".
// Smart component = direct connection to Redux.

// Separting containers from components.

export default class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={ book.title } className="list-group-item">{ book.title }</li>
      );
    });
  }

  render() {
    return {
      <ul className="list-group col-sm-4">
        { this.renderList() }
      </ul>
    }
  }
}
