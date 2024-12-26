const express = require('express');
const app = express();
app.get('/', (req, res) => {
  someAsyncOperation().then(() => {
    res.send('Hello World!');
  }).catch(err => {
    console.error('Error:', err);
    res.status(500).send('Internal Server Error');
  });
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

async function someAsyncOperation() {
  const success = Math.random() < 0.5;
  if (!success) {
    throw new Error('Something went wrong!');
  }
  await new Promise(resolve => setTimeout(resolve, 1000));
}