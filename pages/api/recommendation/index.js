// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import recommendations from '../../../data/recommendations';
export default function handler(req, res) {
  res.status(200).json(recommendations)
}
