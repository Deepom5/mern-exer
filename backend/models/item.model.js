const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const itemSchema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
});

const Items = mongoose.model('item', itemSchema);

module.exports = Items;