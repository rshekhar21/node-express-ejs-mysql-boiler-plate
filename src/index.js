require('dotenv').config();
const log=console.log;
const port=process.env.PORT;
const path=require('path');

const express=require('express');
const ejs=require('ejs');
ejs.delimiter='?';

const app=express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/app', require('./router/router'));

app.listen(port, () => log(`server running at http://localhost:${port}`));