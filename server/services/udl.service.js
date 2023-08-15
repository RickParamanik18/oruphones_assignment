const udlRepo = require("../repositories/udl.repository");
const jwt = require("jsonwebtoken");

const createItem = async (params) => {
    try {
        let data = await udlRepo.createItem(params);
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
const updateItem = async (params) => {
    try {
        let data = await udlRepo.updateItem(params);
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
const getItems = async (params) => {
    try {
        let data = await udlRepo.getItems(params);
        if (!data)
            return {
                status: 400,
                msg: "failed",
            };

        return {
            status: 200,
            msg: "success",
            data,
        };
    } catch (err) {
        console.log(err);
        return {
            status: 400,
            msg: "failed",
        };
    }
};
const deleteItem = async (params) => {
    try {
        let data = await udlRepo.deleteItem(params);
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
module.exports = { createItem, updateItem, getItems, deleteItem };
