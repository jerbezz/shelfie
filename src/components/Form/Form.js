import React, {Component} from 'react'

class Form extends Component{
    constructor(){
        super()
        this.state = {
            product_img: '',
            product_name: '',
            product_price: ''
        }  
    }

    handleChange = e => {
        let {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    handleCancel = () => {
        this.setState({
            product_img: '',
            product_name: '',
            product_price: '',
        })
    }

    handleAddClick = () => {
        let {product_img, product_name, product_price} = this.state
        this.props.handleCreateProduct({
            product_img,
            product_name,
            product_price
        })
    }


render() {
return (
        <div>
            <input name='product_img' value={this.state.product_img} onChange={this.handleChange}></input>
            <input name='product_name' value={this.state.product_name} onChange={this.handleChange}></input>
            <input name='product_price' value={this.state.product_price} onChange={this.handleChange}></input>
            <button onClick={this.handleCancel}>Cancel</button>
            <button onClick={this.handleAddClick}>Add to Inventory</button>
            { this.props.selectedProduct && (
                    <button onClick={this.handleAddClick}>Save</button>
                )
            }
        </div>
        )
    }

}
export default Form