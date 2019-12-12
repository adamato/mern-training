import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Book from './Book'

const BookList = ({ books, onInit }) => {
  onInit();
  return (
  <div id='book-list' >
    <h4>Book List </h4>
      <ul>
        {books.map(book =>
          <Book
            key = {book.isbn}  
            book={book} 
          />
        )}
      </ul>
  </div>
)}

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    isbn: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired
  }).isRequired).isRequired
}

const mapStateToProps = (state) => {
  const temp2 = state.appState;
  return {
    books: state.books,
    appState: temp2
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onInit: () => {
      console.log('in BookList.onInit:');
    }
  }
}

const VisibleBookList = connect(
  mapStateToProps,
  mapDispatchToProps
)(BookList)

export default VisibleBookList