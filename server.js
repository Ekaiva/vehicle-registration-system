const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const Vehicle = require("./models/Vehicle");

const mongoose = require("mongoose");
const Customer = require("./models/Customer");
const Insurance = require("./models/Insurance");
var corsOptions = {
  origin: "http://localhost:8080",
};
app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to express" });
});

app.post("/customer", async (req, res) => {
  console.log(req.body);
  let customer = new Customer(req.body);
  let temp = await customer.save();
  res.json(temp)
});
app.post("/vehicle", async (req, res) => {

  let vehicle = new Vehicle(req.body);

var conditions = { _id: req.body.customer_id } 
  , update = { $inc: { visits: 1 }}


 await vehicle.save()
 .then((response)=>{
  res.json(response)
  Customer.updateOne(conditions, {$push:{vehicles:vehicle._id,  multi: true }}).then(updatedRows=>{
    
    
  }).catch(err=>{
    console.log(err)
    
  })


 }).catch(err=>{
   res.json(err.message)
 })
  
});

app.post("/insurance", async (req, res) => {
  let insurance = new Insurance(req.body);
  console.log("insurance id ",insurance._id)
  var conditions = { _id: req.body.vehicle_id } 
  , update = { $inc: { visits: 1 }}

Vehicle.updateOne(conditions, {insurance_id:insurance._id}, { multi: true }).then(updatedRows=>{
  console.log("update",updatedRows)
  
}).catch(err=>{
  console.log(err)
  
})

  let temp = await insurance.save(insurance);
  res.json(temp)
});

app.post("/vehicle-details", (req, res) => {
  var data = {}
  console.log("registrationNumber:",req.body.registrationNumber)
  Vehicle.find({registrationNumber:req.body.registrationNumber}, function(err, listing) {
    if (err) {
      res.status(404).send(err);
    } else {
      data.vehicle=listing;
       
      Customer.find({_id:data.vehicle[0].customer_id}, function(err, listing) {
        if (err) {
          res.status(404).send(err);
        } else {
          data.customer=listing;
          Insurance.find({_id:data.vehicle[0].insurance_id}, function(err, listing) {
            if (err) {
              res.status(404).send(err);
            } else {
              data.insurance=listing;
              res.json(data)
              
            }
          })
        
          
        }
      })

    }
  })
 
});





try {
  // Connect to the MongoDB cluster
  mongoose
    .connect(
      "mongodb+srv://pramod:Pramod090@cluster0.bklgm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
      { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => console.log("Database connected!"))
    .catch((err) => console.log(err));
} catch (e) {
  console.log("could not connect");
}

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
