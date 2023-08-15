const udlService = require("../services/udl.service");

const createItem = async (req, res) => {
    const headerParams = req.headers;

    const result = await udlService.createItem(headerParams);
    result.status == 200 &&
        res.cookie("userData", result.token, { maxAge: 86400000 });
    res.send(result);
};
const updateItem = async (req, res) => {
    const headerParams = req.headers;

    const result = await udlService.updateItem(headerParams);
    result.status == 200 &&
        res.cookie("userData", result.token, { maxAge: 86400000 });
    res.send(result);
};
const getItems = async (req, res) => {
    const headerParams = req.headers;

    const result = await udlService.getItems(headerParams);

    res.send(result);
};
const deleteItem = async (req, res) => {
    const headerParams = req.headers;

    const result = await udlService.deleteItem(headerParams);
    result.status == 200 &&
        res.cookie("userData", result.token, { maxAge: 86400000 });
    res.send(result);
};
module.exports = { createItem, updateItem, getItems, deleteItem };
