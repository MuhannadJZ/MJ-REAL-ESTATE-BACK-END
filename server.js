require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');

const propertyRoutes = require('./routes/realEstate');
const authRoutes = require('./routes/auth');

