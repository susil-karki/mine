export default function handler(req, res) {
  if (req.method === 'POST') {
    const { choice, timestamp } = req.body;
    console.log(`User clicked: ${choice} at ${timestamp}`);

    // You can add database or email logic here if you want

    res.status(200).json({ message: 'Click logged' });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
