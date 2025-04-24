const quoteController = {};

quoteController.getQuote = async (_req, res) => {
  try {
    const response = await fetch('https://api.api-ninjas.com/v1/quotes', {
      headers: {
        'X-Api-Key': process.env.VITE_API_NINJAS,
      },
    });
    const data = await response.json();
    res.status(200).json(data); //! passes the data back to frontend
  } catch (err) {
    console.error(`❌❌ Error fetching quote:`, err);
    res.status(500).json({ error: 'Failed to fetch quote' });
  }
};

export default quoteController;
