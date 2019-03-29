import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard'
import Product from './components/Product/Product'
import Form from './components/Form/Form'
import Header from './components/Header/Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Dashboard/>
        <Form/>
      </div>
    );
  }
}

export default App;
