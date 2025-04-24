import express from 'express';
import Request from '../models/contactModel.js';

const router = express.Router();

router.post('/contact', async (req, res) => {
  try {
    const { name, email, message, contentRec } = req.body;

    const newRequest = new Request({ name, email, message, contentRec });
    await newRequest.save();

    res.redirect('/thank-you'); //=> thank you message page simple thank you for your request
  } catch (err) {
    console.error('Submission error', err);
    res.status(500).send('Server error');
  }
});

export default router;
