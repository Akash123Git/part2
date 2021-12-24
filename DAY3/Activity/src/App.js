import React from 'react';
import Category from './category/Category';
import Products from './products/Products';

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      products: [
        {
          pid: 101,
          pname: 'sports shoes',
          company: 'sparks shoes',
          category: 'shoes',
          price: 2000,
          discount: 18,
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZn_LduOz9ZeilcfESMc72UBgcevhnaQZ-Bw&usqp=CAU',
        },
        {
          pid: 102,
          pname: 'watches',
          company: 'Twatch',
          category: 'watches',
          price: 3500,
          discount: 12,
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWW_THgGc44EYW3GWm0sSIQmNeSJr25XPTLQ&usqp=CAU',
        },
        {
          pid: 103,
          pname: 'tchalla watches',
          company: 'Awatch',
          category: 'watches',
          price: 3600,
          discount: 14,
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7L7lBkUKUnGWw-DXLl1FPPhYEp_77V5PAPQ&usqp=CAU',
        },
        {
          pid: 104,
          pname: 'robert dj watches',
          company: 'Awatch',
          category: 'watches',
          price: 4300,
          discount: 14,
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ67a81lE4dFrHkeSEuN37fMlVCYfdJ3mjr6w&usqp=CAU',
        },
        {
          pid: 105,
          pname: 'robert dj shoes',
          company: 'Ashoes',
          category: 'shoes',
          price: 5000,
          discount: 14,
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbFErx5Uo9wtKF6l7d8nCtATlezzFysbhRgg&usqp=CAU',
        }
      ],
      temp: [],
      cart: [],
      numberofcartitems: 0,
      msg: ''
    }
  }

  showproducts = () => {
    this.setState({ msg: '' })
  }

  categorywatches = () => {
    let d = this.state.products.filter((p) => p.category === "watches")
    this.setState({ temp: d })
    this.setState({ msg: "watches" })
  }
  categoryshoes = () => {
    let d = this.state.products.filter((p) => p.category === "shoes")
    this.setState({ temp: d })
    this.setState({ msg: "shoes" })
  }

  sendcartItems = () => {
    this.setState({ msg: "cart" })
  }

  addtocart = (pid) => {
    let d = 1;
    let p = this.state.products.find((pro) => pro.pid === pid)
    this.setState({ cart: [...this.state.cart, p] })
    this.state.cart.map((p) => d += 1)
    this.setState({ numberofcartitems: d })
  }

  render() {
    return <div className="firstcomponent">
      <div style={{marginTop:20}} align="center">
        <button onClick={this.sendcartItems}>show cart </button>&ensp;&ensp;&ensp;
        <button onClick={this.showproducts}>home</button></div>
      <div className="first" style={{margin:20}} align="center">
        <button type="button" class="btn btn-primary position-relative">
          mycart
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {this.state.numberofcartitems}
            <span class="visually-hidden">unread messages</span>
          </span>
        </button>
      </div>
      <div className="componentholder">
        <div className="secondcomponent">
          <table border='1' align='center' style={{textAlign:"center"}} cellPadding="10" cellSpacing="5">
            <thead>
              <tr>
                <td>sl no:</td>
                <td>pid</td>
                <td>Product image</td>
                <td>Product name</td>
                <td>Product company</td>
                <td>Product category</td>
                <td>Product price</td>
                <td>Product discount</td>
                {this.state.msg === "cart" ? '' :
                  <td>operatons</td>}
              </tr>
            </thead>
            <tbody>
              {this.state.msg === "watches" || this.state.msg === "shoes" ? this.state.temp.map((prod, index) => {
                return <Products key={index} addtocart={this.addtocart} prod={prod}
                  index={index} msg={this.state.msg} />
              }) : this.state.msg === "cart" ? this.state.cart.map((prod, index) => {
                return <Products key={index} addtocart={this.addtocart} prod={prod}
                  index={index} msg={this.state.msg} />
              }) : this.state.products.map((prod, index) => {
                return <Products key={index} addtocart={this.addtocart} prod={prod}
                  index={index} msg={this.state.msg} />
              })}
            </tbody>
          </table>

        </div>
        <div className="thirdcomponent"><Category categoryshoes={this.categoryshoes} categorywatches={this.categorywatches} /></div>
      </div>
    </div>
  }

}

export default App;