var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights');
const flights= require('../controllers/flights.js')

//GET /flights
router.get('/', flightsCtrl.index);
// GET /flights/new
router.get('/new', flightsCtrl.new);
router.get('/:id', flightsCtrl.show);
//POST /flights
router.post('/', flightsCtrl.create);





module.exports = router;
