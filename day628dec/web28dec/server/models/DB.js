var mongoose = require('mongoose');

function getConnection(callback)
{
    mongoose.connect('mongodb+srv://admin:admin123@cluster0.jvefa.mongodb.net/myFirstDatabase?retryWrites=true');
    var conn = mongoose.connection;
    callback(conn)
}

module.exports = getConnection


