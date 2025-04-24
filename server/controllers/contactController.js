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

    console.log({ name, email, message, referrer });

    const newContact = new Contact({
      name,
      email,
      message,
      referrer,
    });

    await newContact.save();

    res.redirect('/thank-you');
  } catch (err) {
    console.error('Error creating contact:', err.message);
    res.status(500).json({ error: 'Failed to create contact submittal' });
  }
};

export default contactController;
