const userRepo = require("../repositories/user.repository");
const jwt = require("jsonwebtoken");

const login = async (params) => {
    try {
        let data = await userRepo.login(params);
        if (!data)
            return {
                status: 400,
                msg: "failed",
            };
        data = data.toObject();
        delete data.password;

        const token = jwt.sign(data, process.env.JWT_SECRET);

        return {
            status: 200,
            msg: "success",
            token,
        };
    } catch (err) {
        console.log(err);
        return {
            status: 400,
            msg: "failed",
        };
    }
};
const signin = async (params) => {
    try {
        let data = await userRepo.signin(params);
        if (!data)
            return {
                status: 400,
                msg: "failed",
            };
        data = data.toObject();
        delete data.password;

        const token = jwt.sign(data, process.env.JWT_SECRET);

        return {
            status: 200,
            msg: "success",
            token,
        };
    } catch (err) {
        console.log(err);
        return {
            status: 400,
            msg: "failed",
        };
    }
};

const singleUpdate = async (params) => {
    try {
        let data = await userRepo.singleUpdate(params);
        if (!data)
            return {
                status: 400,
                msg: "failed",
            };
        data = data.toObject();
        delete data.password;

        const token = jwt.sign(data, process.env.JWT_SECRET);

        return {
            status: 200,
            msg: "success",
            token,
        };
    } catch (err) {
        console.log(err);
        return {
            status: 400,
            msg: "failed",
        };
    }
};

module.exports = { login, signin, singleUpdate };
