import React from 'react';

export default class Products extends React.Component {
    render() {
        return <tr>
                        <td>{this.props.index+1}</td>
                        <td>{this.props.prod.pid}</td>
                        <td><img className="productimage" style={{width:200,height:200}} src={this.props.prod.image} alt='images'/></td>
                        <td>{this.props.prod.pname}</td>
                        <td>{this.props.prod.company}</td>
                        <td>{this.props.prod.category}</td>
                        <td>{this.props.prod.price}</td>
                        <td>{this.props.prod.discount}</td>
                        {this.props.msg==="cart"?'':<td><button onClick={()=>this.props.addtocart(this.props.prod.pid)}>add to cart</button></td>}
                        
                </tr>
                
    }
}