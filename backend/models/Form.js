const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  date: { type: Date, required: true },
  planet: { type: String, required: true },
  numPersons: { type: Number, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  price: { type: Number, required: true },
  idVerification: { type: String }, // Can store file paths or base64
  passportPhoto: { type: String },  // Can store file paths or base64
}, { timestamps: true });

module.exports = mongoose.model('Form', formSchema);