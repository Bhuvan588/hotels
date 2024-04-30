const mongoose = require('mongoose')



//Using the connection string

const mongoURL = 'mongodb://localhost:27017/hotels'  // If hotels database is not created then it will be created

//Connect with MongoDB

mongoose.connect(mongoURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})


//Mongoose maitains a default connection representing the Mongodb connection

const db = mongoose.connection



// Add event listeners for connection successfull, error and connection unsuccessfull
db.on('connected',()=>{
    console.log("Connected to MongoDB server")
})

db.on('error',()=>{
    console.log("MongoDB Error!!")
})

db.on('disconnected',()=>{
    console.log("Disconnected from MongoDB server")
})


//Exporting the database connection i.e the db object

module.exports = db;