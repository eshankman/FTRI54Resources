import Contact from '../models/contactModel.js';

const contactController = {};

//*get all requests

contactController.getAllRequests = async (req, res) => {
  try {
    const contact = await Contact.find({});
    res.status(200).json(contact);
  } catch (err) {
    console.log('Error in getting all requests back', err.message);
    return res.status(500).json({ error: 'failed to get contact forms' });
  }
};

//*create a submittal
contactController.createContact = async (req, res) => {
  try {
    const { name, email, message, referrer } = req.body;

    console.log({ name, email, message, referrer })
  }
}
