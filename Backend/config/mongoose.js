const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todo_list_db', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open',function(){

    console.log('db connect successfully');

});

