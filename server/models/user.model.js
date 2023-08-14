const con = require("../config/mongo.connection");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    pic: {
        type: String,
        default: "http://localhost:8000/default_user.jpg",
    },
    about: {
        type: String,
        required: true,
    },
    skills: {
        type: [String],
        default: [],
    },
    certifications: {
        type: [String],
        default: [],
    },
    experience: {
        type: [String],
        default: [],
    },
    education: {
        type: [String],
        default: [],
    },
});

module.exports = con.model("users", userSchema);
