const express = require('express');
const routes = require('./routes');
// import sequelize connection (i added line 4)
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server (I added line 15) I have issues here
sequelize.sync().then(() => {
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
}});
