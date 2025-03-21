// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import badges from '../../../data/badges';
export default function handler(req, res) {
  res.status(200).json(badges)
}
