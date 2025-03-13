export default async function handler(req, res) {
    const response = await fetch('https://www.credly.com/users/alexbonilla/badges?page=1&page_size=48&sort=rank', {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    const data = await response.json();
    res.status(200).json(data);
  }  