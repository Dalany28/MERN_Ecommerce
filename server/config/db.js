require('dotenv').config()
const mongoose = require('mongoose')


const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://dalany:namsom20072012@cluster0.ptimwlb.mongodb.net/dalashop?retryWrites=true&w=majority")
        console.log("MongoDB Connection Success")
    } catch(err) {
        console.error("MongoDb connection failed")
        process.exit(1)
    }
}

module.exports = connectDB