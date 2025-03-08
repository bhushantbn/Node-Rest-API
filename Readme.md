# Node.js REST API

## Project Overview
This is a simple Node.js REST API for managing products. It includes routes for retrieving, adding, updating, and deleting products stored in a JSON database.

## Directory Structure
```
node-rest-api/
├── app.js                # Main entry point of the application
├── data.json             # Sample data file
├── package.json          # Project dependencies and scripts
├── productDB.js          # Database interaction logic
├── productDB.json        # Product database (JSON format)
├── controllers/
│   └── products.js       # Controller for handling product-related logic
├── db/
│   └── db.js             # Database connection file
├── models/
│   └── product.js        # Product model definition
└── routes/
    └── products.js       # Routes for product API endpoints
```

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/node-rest-api.git
   cd node-rest-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Usage
### Start the Server
```bash
node app.js
```
By default, the server runs on `http://localhost:3000`.

### API Endpoints
| Method | Endpoint         | Description               |
|--------|-----------------|---------------------------|
| GET    | /api/products   | Get all products         |
| GET    | /api/products/:id | Get product by ID        |
| POST   | /api/products   | Add a new product        |
| PUT    | /api/products/:id | Update product by ID    |
| DELETE | /api/products/:id | Delete product by ID    |

## Dependencies
- Express.js
- Nodemon (for development)

## License
This project is licensed under the MIT License.

