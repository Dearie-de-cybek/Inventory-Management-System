const express = require('express');
const app = express();
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '/public')));
app.set('views', path.join(`${__dirname}/views`));



const dshRoute = require('./routes/Dashboard');
app.use('/', dshRoute);

const port = 3000;
    app.listen(port, () => {
      console.log(`App running on port ${port}...`);
    });

