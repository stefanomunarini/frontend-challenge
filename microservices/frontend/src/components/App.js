import React, { Component } from 'react';
import logo from '../static/images/logo.png';
import '../static/css/App.css';
import CountryList from './CountryList';

class App extends Component {

  render() {
    return (
    	<div className="App">
	      <header className="App-header">
	        <img src={logo} className="App-logo" alt="logo" />
	        <p className="title">ELSA Frontend Challenge</p>
	      </header>
      	<CountryList/>
      </div>
    );
  }
}

export default App;
