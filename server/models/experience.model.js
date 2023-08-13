const con = require("../config/mongo.connection");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const experienceSchema = new Schema({
    role: {
        type: String,
        required: true,
    },
    job_type: {
        type: String,
        required: true,
    },
    company: {
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
    currently_working: {
        type: Boolean,
        required: true,
    },
});

module.exports = {
    experiences: con.model("experiences", experienceSchema),
    experienceSchema,
};
