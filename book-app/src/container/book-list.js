import React, { Component } from 'react';
import { connect } from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title}
        onClick={() =>this.props.selectBook(book)}

        className="list-group-item">{book.title}</li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

//Anythin returned from this finction will end up as props
// on the BookList container

function mapStateToProps(state) {
  // Whatever is returned will show up as props
  // inside of BookList
  return {
    books: state.books
  };
}

function mapDispatchToProps(dispatch){
  //Whenever selectBook is called, the result should be pased
  // to all of our reducers
  return bindActionCreators({selectBook:selectBook}, dispatch)
}

// promote boolist from a component to a conainer - it needs to know
// anpit this ne dispatch methid, selectBook. make it available
// as a prop
export default connect(mapStateToProps)(BookList);
