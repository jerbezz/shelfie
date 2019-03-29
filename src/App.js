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

  deleteProduct = id => {
    axios.delete(`/api/inventory/${id}`).then( res => {
        this.setState({
            products: res.data
        })
    }).catch(err => {
        console.log('delete error', err)
    })
}


  handleCreateProduct = product => {
    axios.post('/api/inventory', product).then( res => {
      console.log(2222, res.data)
      this.setState({
        products: res.data
      })
    }).catch(err => {
      console.log('adding error', err)
    })
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
        <Dashboard inventory={this.state.products} deleteProduct={this.deleteProduct}/>
        <Form handleCreateProduct={this.handleCreateProduct}/>
        </div>
      </div>
    );
  }
}

export default App;
