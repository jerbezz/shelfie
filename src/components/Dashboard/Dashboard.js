import React, {Component} from 'react'
import Product from '../Product/Product';

class Dashboard extends Component{
    constructor(){
        super()
        
    }

render(){
    
    
    return(
        <div>
            Dashboard
            {this.props.inventory.map((item, i) => {
                return <Product
                key={i} product={item}/>
                
            })}
        </div>
    )
}

}
export default Dashboard