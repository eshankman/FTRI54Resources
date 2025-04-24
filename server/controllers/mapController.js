import { getModel } from '../models/MapModel.js';

export const getCollectionData = async (req, res) => {
  try {
    const { collection } = req.params;
    const Model = getModel(collection);
    const data = await Model.find({});
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: `Error fetching from ${req.params.collection}`, details: err });
  }
};
