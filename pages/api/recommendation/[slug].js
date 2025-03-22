import socialnetwork from '../../../data/socialnetwork';

export default async (req, res) => {
  const filtered = socialnetwork.filter(item => item.slug === req.query.slug);

  if (filtered.length > 0) {
    let record = filtered[0];

    res.status(200).json(record);
  } else {
    res.status(404).json({ error: 'Recommendation not found.' });
  }
};
