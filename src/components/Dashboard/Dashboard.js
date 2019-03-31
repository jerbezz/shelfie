import React, {Component} from 'react'
import Product from '../Product/Product';

class Dashboard extends Component{
    constructor(){
        super()
        
    }

render(){
    console.log(this.props.inventory)
    console.log(this.props,"---------------dashaboard")
    
    
    return(
        <div>
            Dashboard
            {this.props.inventory.map((item, i) => {
                return <Product
                key={i} product={item} id={item.id}
                     handleDeleteClick={this.props.handleDeleteClick} handleUpdateClick={this.props.handleUpdateClick} />
                
            })}
        </div>
    )
}

}
export default Dashboard