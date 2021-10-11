const express = require('express');
const logger = require('morgan');
const cors = require('cors');
<<<<<<< Updated upstream
// const mangoose = require('mongoose');

// require('dotenv').config();

const contactsRouter = require('./routes/api/contacts');

// const { DB_HOST } = process.env;
// const { Schema, model } = mangoose;

//  const contactSchema = Schema({
//   name: String,
//   email: String,
//   phone: String,
//   favorite: Boolean,
// });

// const Contact = model('contact', contactSchema);

// mangoose
//   .connect(DB_HOST, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log('connect sucess');
//   })
//   .catch(error => {
//     console.log(error.message);
//   });
=======
const mangoose = require('mongoose');

require('dotenv').config();

const contactsRouter = require('./routes/api/contacts');

const { DB_HOST } = process.env;
const { Schema, model } = mangoose;

const contactSchema = Schema({
  name: String,
  email: String,
  phone: String,
  favorite: Boolean,
});

const Contact = model('contact', contactSchema);

mangoose
  .connect(DB_HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('connect sucess');
  })
  .catch(error => {
    console.log(error.message);
  });
>>>>>>> Stashed changes

const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use('/api/contacts', contactsRouter);

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

app.use((err, req, res, next) => {
  const { status = 500, message = 'Server error' } = err;
  res.status(status).json({ message });
});

module.exports = app;
