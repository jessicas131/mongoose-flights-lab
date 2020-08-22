const Flight = require('../models/flight');


module.exports = {
  index,
  show,
  new: newFlight,
  create
};

function index(req, res) {
  Flight.find({}, function(err, flights) {
    res.render('flights/index', { flights });
  });
}

function show(req, res) {
  Flight.findById(req.params.id, function(err, flight) {
    console.log(flight)
    res.render('flights/show', { title: 'Flight Details', flight });
  });
}

function create(req, res) {
  for (let key in req.body) {
    if(req.body[key].length < 2) delete req.body[key];
  }
  const flight = new Flight(req.body);
  flight.save(function(err) {
    // one way to handle errors
    if (err) return res.render('flights/new');
    // for now, redirect right back to new.ejs
    res.redirect('/flights');
  });
}


function newFlight(req, res) {
  res.render('flights/new')
}