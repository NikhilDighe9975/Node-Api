// Import required libraries
const express = require('express');
const bodyParser = require('body-parser');

// Create an Express.js application
const app = express();

// Use middleware to parse JSON request bodies
app.use(bodyParser.json());

// Define an API endpoint to calculate BMI
app.post('/calculate-bmi', (req, res) => {
  // Extract height (in meters) and weight (in kilograms) from the request body
  const { height, weight } = req.body;

  // Validate input
  if (!height || !weight) {
    return res.status(400).json({ error: 'Height and weight are required.' });
  }

  // Calculate BMI
  const bmi = weight / (height * height);

  // Determine BMI category
  let category;
  if (bmi < 18.5) {
    category = 'Underweight';
  } else if (bmi < 24.9) {
    category = 'Normal Weight';
  } else if (bmi < 29.9) {
    category = 'Overweight';
  } else {
    category = 'Obese';
  }

  // Return the calculated BMI and category in the response
  res.json({ bmi, category });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
