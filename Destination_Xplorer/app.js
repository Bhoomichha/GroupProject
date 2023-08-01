const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000; // Set the desired port number
const secretKey = 'SecretKey05'; // Replace with a secure secret key
