const createError = require('http-errors');//
const express = require('express');//
const path = require('path');//
const cookieParser = require('cookie-parser');//
const logger = require('morgan');//
const fs = require("fs");//
const https = require("https");
const cors = require("cors");

const authRouter = require('./routes/auth');
const commentRouter = require('./routes/comment');
const loginRouter = require('./routes/login');
const logoutRouter = require('./routes/logout');
const petRouter = require('./routes/pet');
const postRouter = require('./routes/post');
const replyRouter = require('./routes/reply');
const userRouter = require('./routes/user')

var app = express();
const port = 3000;

require("dotenv").config();

app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

//CORS Setting
app.use(
  cors({
      origin: ["http://localhost:3000"],
      credentials: true,
      methods: ["GET", "POST", "DELETE", "PUT"],
  })
);

//Connect Routers
app.use('/auth', authRouter);
app.use('/login', loginRouter);
app.use('/logout', logoutRouter);
app.use('/user', userRouter);
app.use('/pet', petRouter);
app.use('/post', postRouter);
app.use('/comment', commentRouter);
app.use('/reply', replyRouter);


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

module.exports = app;
