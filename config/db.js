// Do not expose your credentials in your code.
let atlasDB = "mongodb+srv://dbuser:hZc110oKk3Cd8vcj@cluster005.u92wuqx.mongodb.net/todo?retryWrites=true&w=majority";

// mongodb+srv://dbuser:hZc110oKk3Cd8vcj@cluster005.u92wuqx.mongodb.net/admin

// Database setup
let mongoose = require('mongoose');

module.exports = function(){

    mongoose.connect(atlasDB);
    let mongodb = mongoose.connection;

    mongodb.on('error', console.error.bind(console, 'Connection Error:'));
    mongodb.once('open', ()=>{
        console.log('===> Connected to MongoDB.');
    })

    return mongodb;
}