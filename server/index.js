const express = require('express');
const app = express();
const PORT = 3000;

const route = require('./routes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', route);

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`listening on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
