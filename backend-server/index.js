const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const config = require('./config');

const passport = require('passport');

//DB setup
mongoose
    .connect(
        `mongodb+srv://zuby:${config.mongoDB_pass}@zubycluster01.ians5.mongodb.net/auth?retryWrites=true&w=majority`
    )
    .then(() => console.log('connected to mongodb..'))
    .catch((err) => console.error('could not connect to MongoDB..', err));

const app = express();
const router = require('./router');

app.use(morgan('combined'));
app.use(bodyParser.json({ type: '*/*' }));
app.use(passport.initialize());
router(app);

const port = process.env.PORT || 3090;
const server = http.createServer(app);

server.listen(port);
console.log('Server listening on Port: ', port);
