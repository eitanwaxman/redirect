const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // You can change this to the desired port number

app.get('*', (req, res) => {
  res.redirect('https://thewixwiz.com');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
