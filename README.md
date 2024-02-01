This documentation provides information on how to set up, run, and test the Node Express project. Follow the steps below to get started.

Table of Contents
Installation
Configuration
Run the Application
Testing
Installation
Clone the repository:

git clone https://github.com/ArnabBiswas123/E-commerce-APIs.git

Change into the project directory:
cd E-commerce-APIs


Install dependencies:
npm install


Configuration
Create a .env file in the project root with the following configuration:
MONGO_URI=mongodb+srv://iamarnabbiswas2001:arnab123@cluster0.mjr3rpf.mongodb.net/?retryWrites=true&w=majority


Run the Application
To start the Node Express application, use the following command:
npm start
The application will be running on http://localhost:5000 by default (change the port in the .env file if necessary).

Testing
The project uses Mocha as the testing framework and Chai for assertions.

Run the tests with the following command:

npm test
This will execute the test suite and provide feedback on the test results.

API documentation 
https://documenter.getpostman.com/view/32180071/2s9Yyti1uN


Assumption
Product model has name as unique key
