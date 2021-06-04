const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderSchema = new Schema({
    
    itemId: { type: Number, required: true },
    price: { type: Number, required: true },
    customerId: { type: Number, required: true },
    deliveryVehicleId: { type: Number, required: true },
    });

const Orders = mongoose.model('order', orderSchema);

module.exports = Orders;