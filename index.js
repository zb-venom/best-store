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

async function start() {
    try { 
        await mongoose.connect(config.db.key, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        })
        app.listen(config.server.port, () => {
            console.log('\nСервер запущен...\nПриложение доступно по ссылке http://localhost:7777\n'.green)
        })
    }
    catch (e) {
        console.log(e);        
    }
}
console.log('\nЗапуск сервера...\nОжидайте.\n'.red);

start()