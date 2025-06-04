const express = require('express');
const Order = require('../models/order');
const Feedback = require('../models/Feedback');
const router = express.Router();

// Place an order

 router.post('/place-order', async (req, res) => {
  try {
    const { upiPin, ...safeOrderData } = req.body;

    // ✅ Save only safe data to MongoDB
    const order = await Order.create(safeOrderData);
    // const order = new Order(req.body);
    //await order.save();
    res.status(201).json({ message: 'Order placed successfully', order });
  } catch (error) {
    console.error('Error placing order:', error);
    res.status(500).json({ message: 'Failed to place order' });
  }
});

// Delete a specific order by ID
// Cancel an order
router.delete('/cancel-order/:id', async (req, res) => {
  try {
    const orderId = req.params.id;
    const result = await Order.findByIdAndUpdate(orderId, { status: 'Cancelled' });

    if (!result) {
      return res.status(404).json({ message: 'Order not found' });
    }

    res.json({ message: 'Order cancelled successfully' });
  } catch (error) {
    console.error('Cancel error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Submit feedback
router.post('/feedback', async (req, res) => {
  try {
    const feedback = new Feedback(req.body);
    await feedback.save();
    res.json({ message: 'Feedback saved' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error saving feedback' });
  }
});


module.exports = router;
