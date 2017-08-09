var mongoose = require('mongoose')
var connection = mongoose.connection

mongoose.connect('mongodb://<dbuser>:<dbpassword>@ds151941.mlab.com:51941/gregslistdb', {
    server: {socketOptions: {keepAlive: 300000, connectionTimeoutMS: 30000} },
    replset: {socketOptions: {keepAlive: 300000, connectionTimeoutMS:30000}}
})

connection.on('error', (err) => {
    console.log('something failed when connecting to mlab', err)
})