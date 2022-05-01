const mongoose = require('mongoose');
const {Schema} = require('mongoose');
const Vehicle = new mongoose.Schema({
    registrationNumber: {
      type: Number,
      primaryKey: true,
      unique: true
    },
    vehicleMake: {
      type: String,
    },
    vehicleModel: {
      type: String,
    },
    vehicleVariant: {
      type: String,
    },
    ragistrationDate: {
      type: String,
    },
    manufactureYear: {
      type: Number,
    },
    rtoCode: {
      type: String,
    },
    rtoLocation: {
      type: String,
    },
    fuelTyoe: {
      type: String,
    },
    engineNo: {
      type: String,
    },
    chasisNo: {
      type: String,
    },
    customer_id:{
        type:Schema.Types.ObjectId,
        ref:"Customer"
    },
    insurance_id:{
      type:Schema.Types.ObjectId,
      ref:"Insurance"
    }
  
  });
  module.exports = mongoose.model('Vehicle',Vehicle);

