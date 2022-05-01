const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const Customer = new mongoose.Schema({
  individualOrOrganisation: {
    type: String,
  },
  individual: {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
  },
  organisation: {
    organisationName: {
      type: String,
    },
  },
  permanentAddress: {
    type: String,
  },
  communicationAddress: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },

  emailAddress: {
    type: String,
  },
  dateOfBirth: {
    type: String,
  },
  nomineeName: {
    type: String,
  },
  nomineeAge: {
    type: String,
  },
  nomineeRelationship: {
    type: String,
  },
  vehicles: [
    {
      type: Schema.Types.ObjectId,
      ref: "Vehicle",
    },
  ],
});
module.exports = mongoose.model("Customer", Customer);
