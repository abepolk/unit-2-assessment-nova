const express = require('express')
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const controller = require('./controllers/todos.js')

const PORT = process.env.port || 3000;

const MONGOD0B_URI = process.env.MONGODB_URI || 'mongodb://localhost/unit-2-assessment'

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/abeslist';

// Connect to Mongo
mongoose.connect(MONGODB_URI ,  { useNewUrlParser: true});
const db = mongoose.connection;
// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

// open the connection to mongo
db.on('open' , ()=>{});

app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false }));

app.use(controller);
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.listen(PORT, () => console.log( 'Listening on port:', PORT));