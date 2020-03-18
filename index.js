const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const exphbs = require('express-handlebars')
const appRoutes = require('./routes/app')
const cookieParser = require('cookie-parser')
const colors = require('colors');
const config = require('./config/default')

const app = express()

const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))
app.use(appRoutes)
app.use(cookieParser('secret key'))

app.listen(config.server.port, () => {
    console.log('\nСервер запущен...\nПриложение доступно по ссылке http://localhost:77\n'.green)
})