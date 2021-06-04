import React, { Component } from 'react';
import axios from 'axios';



export default class CreateOrder extends Component {
  constructor(props) {
    super(props);

    this.onChangeItemId = this.onChangeItemId.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.onChangeCustomerId = this.onChangeCustomerId.bind(this);
    this.onChangeDeliveryVehicleId = this.onChangeDeliveryVehicleId.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      itemId: '',
      price: 0,
      customerId: '',
      deliveryVehicleId: '',
      items: [],
      customers: [],
      vehicles:[],
      itemsId: [],
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/items/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            items: response.data.map(item => item.price),
            price: response.data[0].price,
           
            
          })
        
        }
      })
      .catch((error) => {
        console.log(error);
      })
      axios.get('http://localhost:5000/items/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            itemsId: response.data.map(id => id._id),
            itemId: response.data[0]._id,
           
            
          })
        
        }
      })
      .catch((error) => {
        console.log(error);
      })
      axios.get('http://localhost:5000/customers/')
            .then(response => {
              if (response.data.length > 0) {
                this.setState({
                  customers: response.data.map(customer => customer._id),
                  customerId: response.data[0]._id
                })
              }
            })
            .catch((error) => {
              console.log(error);
            })

            axios.get('http://localhost:5000/vehicles/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            vehicles: response.data.map(vehicle => vehicle._id),
            deliveryVehicleId: response.data[0]._id
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })

  }
  
 

  onChangeItemId(e) {
    this.setState({
      itemId: e.target.value
    })
  }

  onChangePrice(e) {
    this.setState({
      price: e.target.value
    })
  }

  onChangeCustomerId(e) {
    this.setState({
      customerId: e.target.value
    })
  }

  onChangeDeliveryVehicleId(e) {
    this.setState({
      deliveryVehicleId: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const order = {
        price: this.state.price,
         itemId: this.state.itemId,
      
      customerId: this.state.customerId,
       deliveryVehicleId: this.state.deliveryVehicleId
    }

    console.log(order);

    axios.post('http://localhost:5000/orders/add', order)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
    <div>
      <h3>Create New Orders</h3>
      <form onSubmit={this.onSubmit}>
         <div className="form-group"> 
          <label>Item Id: </label>
          <select ref="userInput"
              required
              className="form-control"
              value={this.state.itemId}
              onChange={this.onChangeItemId}>
              {
                this.state.itemsId.map(function(id) {
                  return <option 
                    key={id}
                    value={id}>{id}
                    </option>;
                })
              }
          </select>
        </div> 
        <div className="form-group"> 
          <label>price: </label>
          <select ref="userInput"
              required
              className="form-control"
              value={this.state.price}
              onChange={this.onChangePrice}>
              {
                this.state.items.map(function(price) {
                  return <option 
                    key={price}
                    value={price}>{price}
                    </option>;
                })
              }
          </select>
        </div> 
      
        <div className="form-group"> 
          <label>customer Id: </label>
          <select ref="userInput"
              required
              className="form-control"
              value={this.state.customerId}
              onChange={this.onChangeCustomerId}>
              {
                this.state.customers.map(function(customer) {
                  return <option 
                    key={customer}
                    value={customer}>{customer}
                    </option>;
                })
              }
          </select>
        </div>
       <div className="form-group"> 
          <label>Deliver vehicle Id: </label>
          <select ref="userInput"
              required
              className="form-control"
              value={this.state.deliveryVehicleId}
              onChange={this.onChangeDeliveryVehicleId}>
              {
                this.state.vehicles.map(function(vehicle) {
                  return <option 
                    key={vehicle}
                    value={vehicle}>{vehicle}
                    </option>;
                })
              }
          </select>
        </div>
       

        <div className="form-group">
          <input type="submit" value="Create Order" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}