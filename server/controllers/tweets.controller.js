const getAllTweets = (req, res) => {
  res.json({ message: 'All Tweets' });
};
const getTweetById = (req, res) => {
  const { id } = req.params;

  res.json({ message: `Tweet: ${id}` });
};

module.exports = { getAllTweets, getTweetById };
