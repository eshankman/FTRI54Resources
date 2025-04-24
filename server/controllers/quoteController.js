import fetch from 'node-fetch';

const quoteController = {};

quoteController.getQuote = async (_req, res) => {
  try {
    const response = await fetch('https://zenquotes.io/api/random');
    const data = await response.json();

    const quote = data[0]?.q || 'No quote found';
    const author = data[0]?.a || 'Unknown';

    res.status(200).json([{ quote, author }]);
  } catch (err) {
    console.error('❌❌ Error fetching quote:', err);
    res.status(500).json({ error: 'Failed to fetch quote' });
  }
};

export default quoteController;
