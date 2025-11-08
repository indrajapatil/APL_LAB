const mongoose = require("mongoose");

// Load environment variables from .env (ignored in git)
require('dotenv').config();

// Prefer MONGO_URI from environment; otherwise use a safe local default
const mongoURI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/finedine';

async function connectToMongo() {
    try {
        await mongoose.connect(mongoURI, {
            // options are safe defaults for modern mongoose versions;
            // mongoose v6+ uses these by default but specifying them is harmless.
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB");
    } catch (err) {
        console.error("MongoDB connection error:", err);
        throw err;
    }
}

module.exports = connectToMongo;