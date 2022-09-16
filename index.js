const express = require('express');
const cors = require('cors');

const rateLimit = require('express-rate-limit');


require('dotenv').config()//https://openweathermap.org/current

const PORT = process.env.PORT || 5000;

const app = express();

//rate limiting
//time boundary user gets to call API: 10 x 60 x 1000 = 10min 
//max is times within time boundary to make request
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max:10
});
app.use(limiter);
app.set('trust proxy', 1);

//set static folder
app.use(express.static('public'));

//routes
app.use('/api', require('./routes'));

//enable cors
app.use(cors());

app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));
