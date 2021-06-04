const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const vehicleSchema = new Schema({
    registrationNumber: { type: String, required: true ,unique: true},
    vehicleType: { type: String, required: true },
    city: { type: String, required: true },
});

const Vehicles = mongoose.model('vehicle', vehicleSchema);

module.exports = Vehicles;