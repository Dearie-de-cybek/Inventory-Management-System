const app = require('./app');
const dotenv = require('dotenv');

dotenv.config();

app.set('view engine', 'ejs');
app.set('views', (`${__dirname}/views`));




const dshRoute = require('./routes/Dashboard');
app.use('/', dshRoute);

const port = 3000;
    app.listen(port, () => {
      console.log(`App running on port ${port}...`);
    });

