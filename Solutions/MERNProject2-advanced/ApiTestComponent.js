import React, { Component } from 'react';

class ApiTest extends Component {

  state = {books: "empty"};
 
  constructor(){
    super();
    this.testRestAPI = this.testRestAPI.bind(this);
    this.responseHandler = this.responseHandler.bind(this);
  }

  testRestAPI() {
    let myHeaders = new Headers({ "Content-Type": "application/json" });
    var myInit = { method: 'GET', headers: myHeaders, mode: 'cors' };
    let promise = fetch("/books", myInit);
    promise.then((response) => {
      return response.text();
    }).then(this.responseHandler);
  }

  responseHandler(text) {
      console.log('Request successful: ', text);
      let books = JSON.parse(text);
      this.setState({books: books});
  }

  render() {
    return (
      <div>
        <input type='button' value='test api' onClick={this.testRestAPI} />
        { JSON.stringify(this.state.books) }
      </div>
    );
  }
}

export default ApiTest;
