const con = require("../config/mongo.connection");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { certificationSchema } = require("./certification.model");
const { educationSchema } = require("./education.model");
const { experienceSchema } = require("./experience.model");

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
        type: [certificationSchema],
        default: [],
    },
    experience: {
        type: [experienceSchema],
        default: [],
    },
    education: {
        type: [educationSchema],
        default: [],
    },
});

module.exports = con.model("users", userSchema);
