import React, {Component} from 'react'

class Product extends Component{
    constructor(){
        super()
    }

render(){
    const {product} = this.props
    console.log(this.props, "-----------------------product")
    return(
        <div>
            <img src={this.props.product.product_img} alt='' height='200' width='200'/>
            {this.props.product.product_name}
            {this.props.product.product_price}
            <button onClick={() => this.props.handleUpdateClick(product)}>Update</button>
            <button onClick={()=>this.props.handleDeleteClick(product.product_id)}>Delete</button>
        </div>
    )
}

}
export default Product