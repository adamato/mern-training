import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { updateFormObject } from '../actions'

const BookForm = ({ book, usage, handleChange }) => (
    <div id='book-form' >
        <div>
            <h4>Book Form</h4>
            <form >
                <table><tbody>
                    <tr>
                        <td>Isbn:</td>
                        <td><input type={'text'} name={'isbn'} onChange={handleChange} 
                             placeholder={'Unique ISBN #'}
                             value={book.isbn} disabled={usage==='none'||usage==='view'} /></td>
                    </tr>
                    <tr>
                        <td>Title:</td>
                        <td><input type={'text'} name={'title'} onChange={handleChange} 
                             placeholder={'Book title'}
                             value={book.title} disabled={usage==='none'||usage==='view'} /></td>
                    </tr>
                    <tr>
                        <td>Price:</td>
                        <td><input type={'number'} name={'price'} onChange={handleChange} 
                             placeholder={'Price'}
                             value={book.price} disabled={usage==='none'||usage==='view'} /></td>
                    </tr>
                </tbody></table>
            </form>
        </div>  
    </div>
)

BookForm.propTypes = {
  book:  PropTypes.shape({
    isbn: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired
  }).isRequired
}

const mapStateToProps = (state) => {
  return {
    book: state.formState.book,
    isbn: state.formState.book.isbn,
    usage: state.formState.usage,
    appState: state.appState
  }
}

const mapDispatchToProps = (dispatch) => {
  return { 
    handleChange: (e) => {
        const field_name = e.currentTarget.name;
        const field_value = e.currentTarget.value;
        dispatch( updateFormObject( field_name, field_value ));
    } 
  }
}

const VisibleBookForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(BookForm)

export default VisibleBookForm