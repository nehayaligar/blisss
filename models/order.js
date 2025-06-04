const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  name: String,
  phone: String,
  address: String,
  paymentMethod: String,
  upiId: String,
  bank: String,
  upiPin: String,
  productName: String,
  productCode: String,
  productPrice: Number,
  productImage: String,
  deliveryDate: Date,
  orderDate: Date,
  status: { type: String, enum: ['Placed', 'Cancelled'], default: 'Placed' },
  // Other fields...
});

module.exports = mongoose.model('Order', orderSchema);