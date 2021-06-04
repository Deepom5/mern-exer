import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Order = props => (
  <tr>
  <td>{props.order.itemId}</td>
  <td>{props.order.price}</td>
  <td>{props.order.customerId}</td>
  <td>{props.order.deliveryVehicleId}</td>
  <td>
     <a href="#" onClick={() => { props.deleteOrder(props.order._id) }}>delete</a>
  </td>
</tr>
)

export default class OrdersList extends Component {
constructor(props) {
  super(props);

  this.deleteOrder = this.deleteOrder.bind(this)

  this.state = {orders: []};
}

componentDidMount() {
  axios.get('http://localhost:5000/orders/')
    .then(response => {
      this.setState({ orders: response.data })
    })
    .catch((error) => {
      console.log(error);
    })
}

deleteOrder(id) {
  axios.delete('http://localhost:5000/orders/'+id)
    .then(response => { console.log(response.data)});

  this.setState({
      orders: this.state.orders.filter(el => el._id !== id)
  })
}

orderList() {
  return this.state.orders.map(currentorder => {
    return <Order order={currentorder} deleteOrder={this.deleteOrder} key={currentorder._id}/>;
  })
}

render() {
  return (
    <div>
      <h3>Logged Orders</h3>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>Item Id</th>
            <th>Price</th>
            <th>Customer ID</th>
            <th>delivery Vehicle Id</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          { this.orderList() }
        </tbody>
      </table>
    </div>
  )
}
}