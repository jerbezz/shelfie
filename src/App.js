import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard'
import Form from './components/Form/Form'
import Header from './components/Header/Header'
import axios from 'axios';

class App extends Component {
  constructor(){
    super()
    this.state = {
      products: []
    }
  }

  componentDidMount(){
    axios.get('/api/inventory').then(res => {
      console.log(11111,res.data)
      this.setState({
        products: res.data
      })
    }).catch(err => console.log('did mount error', err))
  }



  render() {
    return (
      <div className="App">
       <Header/>
        <div>
        <Dashboard inventory={this.state.products}/>
        <Form/>
        </div>
      </div>
    );
  }
}

export default App;
