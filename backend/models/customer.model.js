const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const customerSchema = new Schema({
    name: { type: String, required: true },
    city: { type: String, required: true },
});

const Customers = mongoose.model('customer', customerSchema);

module.exports = Customers;