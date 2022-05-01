const mongoose = require('mongoose');
const {Schema} = require('mongoose');
const Insurance = new mongoose.Schema({
    insuranceProvider: {
      type: String,
      
    },
    policyNumber: {
      type: String,
    },
    policyType: {
      type: String,
    },
    policyTerm: {
      type: String,
    },
    riskStartDate: {
      type: String,
    },
    riskEndDate: {
      type: String,
    },

   
    vehicle_id:{
        type:Schema.Types.ObjectId,
        ref:"Vehicle"
    }
  
  });

  module.exports = mongoose.model("Insurance", Insurance);