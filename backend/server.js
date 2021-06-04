const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');
const customerRouter = require('./routes/customers');
const itemsRouter = require('./routes/items');
const ordersRouter = require('./routes/orders');
const vehiclesRouter = require('./routes/vehicles');


app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);
app.use('/customers', customerRouter);
app.use('/items', itemsRouter);
app.use('/orders', ordersRouter);
app.use('/vehicles', vehiclesRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
