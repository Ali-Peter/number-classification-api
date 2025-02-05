##  NUMBER CLASSIFICATION API

A simple RESTful API that classifies numbers based on their mathematical properties and provides a fun fact about the number.

# FEATURES
- Determines whether a number is prime or perfect.
- Checks if the number is an Armstrong number.
- Identifies whether the number is even or odd.
- Calculates the sum of its digits.
- Fetches a fun fact about the number from Numbers API.

## API ENDPOINT
  # GET /api/classify-number
  
# REQUEST PARAMETERS
 # PARAMETER            # TYPE           # DESCRIPTION
  number                integer         The number to classify

# Example Request
GET https://number-classification-api-ihpu.onrender.com/api/classify-number?number=371

# Example Response (200 OK)
{
    "number": 371,
    "is_prime": false,
    "is_perfect": false,
    "properties": ["armstrong", "odd"],
    "digit_sum": 11,
    "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
}

# Example Response (400 Bad Request)
{
    "number": "alphabet",
    "error": true
}

## TECHNOLOGIES USED
- Node.js (JavaScript Runtime)
- Express.js (Web Framework)
- Axios (HTTP Requests)
- CORS (Cross-Origin Resource Sharing)

## INSTALLATION & SETUP
 # Clone the repository
  git clone https://github.com/Ali-Peter/number-classification-api
  
  cd number-classifier

# Install dependencies
  npm install

# Run the API locally
  node index.js
  The API will be available at http://localhost:3000/api/classify-number?number=371

## DEPLOYMENT
  You can deploy the API using Render by:
  - Pushing your code to GitHub.
  - Connecting your repository to Render.
  - Setting the start command to:
    node index.js
  - Setting the environment variable (port) to:
    3000
  - Deploying to get a public URL.

## LICENSE
  This project is licensed under the MIT License.
