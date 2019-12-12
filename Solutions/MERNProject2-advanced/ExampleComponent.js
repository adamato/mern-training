import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const ExampleComponent = ({ books, onInit }) => {
  onInit();
  return (
  <div id='Example' >
    <h4>Example Component</h4>
      <ul>
        <li>one</li>
		<li>two</li>
		<li>three</li>
      </ul>
  </div>
)}

ExampleComponent.propTypes = {
}

const mapStateToProps = (state) => {
  return {
    books: state.books,
    appState: state.appState
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onInit: () => {
      console.log('in ExampleComponent.onInit:');
    }
  }
}

const VisibleComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(ExampleComponent)

export default VisibleComponent