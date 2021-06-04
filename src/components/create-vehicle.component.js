import React, { Component } from 'react';
import axios from 'axios';

export default class CreateVehicle extends Component {
  constructor(props) {
    super(props);

    this.onChangeRegistration = this.onChangeRegistration.bind(this);
    this.onChangeCity = this.onChangeCity.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      registrationNumber: '',
      vehicleType:'',
      city: '',
    }
  }

  onChangeRegistration(e) {
    this.setState({
      registrationNumber: e.target.value
    })
  }

  onChangeCity(e) {
    this.setState({
      city: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const vehicle = {
      registrationNumber: this.state.registrationNumber,
      vehicleType:this.state.vehicleType,
      city: this.state.city
    }

    console.log(vehicle);

    axios.post('http://localhost:5000/vehicles/add', vehicle)
      .then(res => console.log(res.data));

    this.setState({
      registrationNumber: '',
      vehicleType: '',
      city: ''
    })
  }

  render() {
    return (
      <div>
        <h3>Create New Delivery Vehicle</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Vehicle Registration number: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.registrationNumber}
                onChange={this.onChangeRegistration}
                /><br/>
                 <label>Delivery Vehicle type: </label><br/>
                 <select
                 onChange={(e)=> this.setState({
                    vehicleType: e.target.value
                  })}
                 >
                     <option value="bike">Bike</option>
                     <option value="truck">Truck</option>
                 </select><br/><br/>
                 <label>Delivery Vehicle city: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.city}
                onChange={this.onChangeCity}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="Create Delivery Vehicle" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}