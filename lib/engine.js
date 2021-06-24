const mongoose = require('mongoose'),
    bp = require('body-parser'),
    micro = require('express-microservice-starter')

module.exports = app => {
    app.use(require('cors')({
        origin: 'http://localhost:3000',
        allowedHeaders: ['content-type', 'authorization'],
        optionsSuccessStatus: 203
    }))

    app.use(bp.urlencoded({
        extended: false
    }))
    app.use(bp.json())

    mongoose.connect('mongodb+srv://lynxapp:QngQ4Oms9NLfs0T9@cluster0.9u5ne.mongodb.net/lynxapp-web?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    })
    mongoose.connection.on('connected', e => {
        if (e) throw e
        console.info('connected to data base!')
    })

    app.use('/', require('../views/main'))

}
