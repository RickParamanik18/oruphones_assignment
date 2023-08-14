const con = require("../config/mongo.connection");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const educationSchema = new Schema({
    institute_name: {
        type: String,
        required: true,
    },
    degree_name: {
        type: String,
        required: true,
    },
    start: {
        type: String,
        required: true,
    },
    end: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
});

module.exports = con.model("educations", educationSchema);
