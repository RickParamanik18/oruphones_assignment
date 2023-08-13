const users = require("../models/user.model");

const login = async (params) => {
    try {
        const { email, password } = params;
        const result = await users.findOne({ email });
        return result && result.password === password ? result : null;
    } catch (err) {
        return null;
    }
};
const signin = async (params) => {
    try {
        const { name, phone, email, password, about, skills } = params;

        let result = await users.findOne({ email });
        if (result) return null;

        const newUser = new users({
            name,
            phone,
            email,
            password,
            about,
            skills,
        });

        result = await newUser.save();
        return result;
    } catch (err) {
        console.log(err);
        return null;
    }
};

module.exports = {
    login,
    signin,
};
