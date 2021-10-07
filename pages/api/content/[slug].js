import content from '../../../data/content';

export default async (req, res) => {
  const filtered = content.filter(item => item.slug === req.query.slug);

  if (filtered.length > 0) {
    let record = filtered[0];

    res.status(200).json(record);
  } else {
    res.status(404).json({ error: 'Content not found.' });
  }
};
