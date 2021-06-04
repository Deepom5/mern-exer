import React, { Component } from 'react';
import axios from 'axios';

export default class CreateCustomer extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeCity = this.onChangeCity.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: '',
      city: '',
    }
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    })
  }

  onChangeCity(e) {
    this.setState({
      city: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const customer = {
      name: this.state.name,
      city: this.state.city
    }

    console.log(customer);

    axios.post('http://localhost:5000/customers/add', customer)
      .then(res => console.log(res.data));

    this.setState({
      name: '',
      city: ''
    })
  }

  render() {
    return (
      <div>
        <h3>Create New Customer</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Customer name: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.name}
                onChange={this.onChangeName}
                />
                 <label>Customer city: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.city}
                onChange={this.onChangeCity}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="Create Customer" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}