const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers');

const app = express();
const PORT = 3001;










//this is for connecting with out direct pathing in the public folder
app.use(express.static(path.join(__dirname, 'public')));
