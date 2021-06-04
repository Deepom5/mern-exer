const router = require('express').Router();
let Order = require('../models/order.model');

router.route('/').get((req, res) => {
  Order.find()
    .then(order => res.json(order))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  
  const itemId = Number(req.body.itemId);
  const price = Number(req.body.price);
  const customerId = Number(req.body.customerId);
  const deliveryVehicleId = Number(req.body.deliveryVehicleId);

  const newOrder = new Order({
    itemId,
    price,
    customerId,
    deliveryVehicleId,
  });

  newOrder.save()
  .then(() => res.json('Order added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Order.findById(req.params.id)
    .then(order => res.json(order))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Order.findByIdAndDelete(req.params.id)
    .then(() => res.json('Order deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Order.findById(req.params.id)
    .then(order => {
        order.username = req.body.username;
        order.description = req.body.description;
        order.duration = Number(req.body.duration);
        order.date = Date.parse(req.body.date);

        order.save()
        .then(() => res.json('Order updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;