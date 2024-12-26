const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Asynchronous operation that might throw an error
  someAsyncOperation().then(() => {
    res.send('Hello World!');
  }).catch(err => {
    console.error('Error:', err);
    // Missing error handling for the response
  });
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

async function someAsyncOperation() {
  // Simulate an asynchronous operation that might fail
  const success = Math.random() < 0.5;
  if (!success) {
    throw new Error('Something went wrong!');
  }
  // Simulate some work
  await new Promise(resolve => setTimeout(resolve, 1000));
}