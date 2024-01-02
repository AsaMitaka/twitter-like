const getAllUsers = (req, res) => {
  res.json({ message: 'All Users' });
};

const getUserById = (req, res) => {
  const { id } = req.params;

  res.json({ message: `User: ${id}` });
};

module.exports = { getAllUsers, getUserById };
