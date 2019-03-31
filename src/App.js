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
      products: [],
      selectedProduct: null,
    }
  }


  handleDeleteClick = id => {
    console.log(68675, id)
    this.deleteProduct(id)
  }

  handleUpdateClick = e => {
    console.log(e)
    // console.log("This was clicked")
  }
  
  updateProduct = product =>{
    this.setState({selectedProduct:product})

    const { product_id } = product

    //TODO 1. edit the items 2. send items to db in body

  // 1. send the product to the edit form
  // 2. check if the data has changed or not
      // if it hassn't save button is grey
      // if it has save button should be green
  //3. send the new updated product to the backend

    const body = product
    axios.put(`/api/inventory/${product_id}`).then(res => {
      // this.setState({
      //   products: res.data
      // })
    }).catch(err => {
      console.log('edit error', err)
    })
  }

  deleteProduct = id => {
    // todo if response from database contains all products set state to res.data
    axios.delete(`/api/inventory/${id}`).then(res => {
      console.log(res.data,"sdkajflskjladskfjlkaj")
      let productsCopy = this.state.products.slice()
      console.log(productsCopy)
      const finalCopy = productsCopy.filter(val => {
        if(val.product_id !== id) {
          return val
        }
      })
      console.log(finalCopy)
        this.setState({
            products: finalCopy
        })
    }).catch(err => {
        console.log('delete error', err)
    })
}


  handleCreateProduct = product => {
    axios.post('/api/inventory', product).then(res => {
      console.log(2222, res.data[0])
      this.setState({
        products: [...this.state.products, res.data[0]]
      })
    }).catch(err => {
      console.log('adding error', err)
    })
}
      // axios.post('/api/inventory', product).then(res=> {
      //   this.setState({products:res.data})
      // }).then((res)=> {

      // }).catch((err)=>{ console.log(err)
      //   return err})
      // }


  componentDidMount(){
    axios.get('/api/inventory').then(res => {
      console.log(11111,res.data, this.state.products)
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
          <Dashboard inventory={this.state.products} deleteProduct={this.deleteProduct} handleUpdateClick={this.handleUpdateClick} updateProduct={this.updateProduct} handleDeleteClick={this.handleDeleteClick}/>
        <Form handleCreateProduct={this.handleCreateProduct} selectedProduct={this.state.selectedProduct}/>
        </div>
      </div>
    );
  }
}

export default App;
