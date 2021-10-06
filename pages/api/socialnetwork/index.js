// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import socialnetwork from '../../../data/socialnetwork';
export default function handler(req, res) {
  res.status(200).json(socialnetwork)
}
