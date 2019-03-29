import React, {Component} from 'react'

class Product extends Component{
    constructor(){
        super()
        
    }

    handleDeleteClick = () => {
        this.props.deleteProduct(this.state.id)
    }


render(){
    return(
        <div>
            
            <img src={this.props.product.product_img} alt='' height='200' width='200'/>
            {this.props.product.product_name}
            {this.props.product.product_price}
            <button onClick={this.handleDeleteClick}>Delete</button>
        </div>
    )
}

}
export default Product