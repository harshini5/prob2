import React, { Component } from 'react';
import API from './services/dateAPI';
import DateButton from './components/DateButton';
import DateDisplay from './components/DateDisplay';

class App extends Component {
  constructor() {
    super();
    this.state= {
      'apiResponse': ''
    };
  }

  handleButtonClick = () => {
    API.getAPIResponse().then((res) => {
    });
  }
  handleClick = () => {
    axios.get(`https://jsonmock.hackerrank.com/datetime`).then( resp => {
     const getAPIDate = new Date(resp.data.date);
     const getYear = getAPIDate.getFullYear();
     const getMonth = getAPIDate.getMonth();
     const getDay = getAPIDate.getDay();
     this.setState({
      getYear,
      getMonth,
      getDay
     });
    });
  };

  
  render() {
    return (
      <div>
        <center><h1>Date API</h1></center>
        <center><DateButton handleClick={this.handleClick}></DateButton></center>
        <DateDisplay></DateDisplay>
      </div>
    );
  }
}

export default App;
