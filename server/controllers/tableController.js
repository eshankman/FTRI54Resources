// server/controllers/tableController.js
import DocumentationModel from '../models/DocumentationModel.js';

export const getTableData = async (req, res) => {
  try {
    const data = await DocumentationModel.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch data', err });
  }
};
