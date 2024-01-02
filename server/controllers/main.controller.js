const mainHello = (req, res) => {
  res.json({ message: 'Hello, world' });
};

const firstHello = (req, res) => {
  res.json({ message: 'Hello, First' });
};

module.exports = { firstHello, mainHello };
