import React, { Component } from 'react';
import { connect } from 'react-redux';

// Container - react component that has direct connection
// to state managed by Redux.

// Containers are known as "smart components".
// Smart component = direct connection to Redux.

// Separting containers from components.

// Import connect from react-redux (note the lowercase 'c')

// Whenever the application state changes, this container is rerendered
// with a new set of books.

class BookList extends Component {
  renderList() {
    // Want to get list of books
    return this.props.books.map((book) => {
      return (
        <li
          key={ book.title }
          className="list-group-item"
        >{ book.title }</li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        { this.renderList() }
      </ul>
    )
  }
}

// Take app state and whatever is returned
// will show up as props inside of BookList
//    return {
//      asdf: '123'
//    }
//    console.log(this.props.asdf); ----> '123'

// The object returns an object that is used in the BookList component
function mapStateToProps(state) {
  return {
    books: state.books // == this.state.props;
  }
}

// connect (from react-redux) takes a function and a component and creates a container
export default connect(mapStateToProps)(BookList);
