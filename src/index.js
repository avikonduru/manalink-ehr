const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./config/db');

//Import Routes
const patientsRoute = require('./routes/patients');

//Connect Database
connectDB();

//Middlewares
app.use(cors());
app.use(express.json());

//Route Middlewares
app.use('/api/patients', patientsRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
