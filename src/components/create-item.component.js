import React, { Component } from 'react';
import axios from 'axios';

export default class CreateItem extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: '',
      price:0,
    }
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    })
  }

  onChangePrice(e) {
    this.setState({
      price: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const item = {
      name: this.state.name,
      price: this.state.price
    }

    console.log(item);

    axios.post('http://localhost:5000/items/add', item)
      .then(res => console.log(res.data));

    this.setState({
      name: '',
      price: 0
    })
  }

  render() {
    return (
      <div>
        <h3>Create New Item</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Item name: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.name}
                onChange={this.onChangeName}
                />
                 <label>Item price: </label>
            <input  type="number"
                required
                className="form-control"
                value={this.state.price}
                onChange={this.onChangePrice}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="Create Item" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}