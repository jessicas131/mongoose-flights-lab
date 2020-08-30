const Flight = require('../models/flight');

 
 module.exports = {
   create,
   delete: deleteDest
 };


 function create(req, res) {
  //  console.log(req.body);
    Flight.findById(req.params.id, function(err, flight) {
       console.log('HELLO',flight)
      // console.log(req.body, 'this is req.body')
      flight.destinations.push(req.body);
      flight.save(function(err) {
        console.log(err);
        res.redirect(`/flights/${flight._id}`);
      });
    });
  }

  function deleteDest(req,res) {
    Flight.findById(req.params.flight, function(err, flight) {
      const index = flight.destinations.findIndex(dest => dest._id == req.params.dest)
      flight.destinations.splice(index, 1)
      flight.save(function(err){
        res.redirect(`/flights/${flight._id}`)
      })
    })
  }