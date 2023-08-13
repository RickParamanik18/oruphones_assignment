const con = require("../config/mongo.connection");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const certificationSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    issued_by: {
        type: String,
        required: true,
    },
});

module.exports = {
    certifications: con.model("certifications", certificationSchema),
    certificationSchema,
};
