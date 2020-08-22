const mongoose = require('mongoose');
// optional shortcut variable
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
  airport: {type: String, enum: ['ATL', 'DFW', 'DEN', 'LAX', 'SAN' ]},
  arrival: Date
}, {
  timestamps: true
});

const flightSchema = new Schema({
  airline: {
      type: String, enum: ['american', 'delta', 'southwest', 'united']
  },
  airport: {
      type: String, enum: ['ATL', 'DFW', 'DEN', 'LAX', 'SAN']
  },
  flightNo: {
      type: Number, required: true, max: 9999, min: 10
  },
  departs: {
      type: Date, default: function () {
          return new Date(new Date().setFullYear(new Date().getFullYear() + 1));
      }
  }, 
  destinations: [destinationSchema]
}
);


// Compile the schema into a model and export it
module.exports = mongoose.model('Flight', flightSchema);