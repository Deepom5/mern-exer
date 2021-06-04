const router = require('express').Router();
let Vehicle = require('../models/vehicle.model');

router.route('/').get((req, res) => {
    Vehicle.find()
    .then(vehicle => res.json(vehicle))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const registrationNumber = req.body.registrationNumber;
    const vehicleType = req.body.vehicleType;
    const city = req.body.city;
  
    const newVehicle= new Vehicle({
        registrationNumber,
        vehicleType,
      city,
    });
  
    newVehicle.save()
    .then(() => res.json('Delivery Vehicle added!'))
    .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;