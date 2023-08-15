const users = require("../models/user.model");
const certifications = require("../models/certification.model");
const educations = require("../models/education.model");
const experiences = require("../models/experience.model");

const createItem = async (params) => {
    try {
        const {
            listtype: listType,
            userData,
            name,
            issued_by,
            institute_name,
            degree_name,
            start,
            end,
            description,
            role,
            job_type,
            company,
            currently_working,
        } = params;

        let schemaObj = null;

        if (listType === "certifications") {
            schemaObj = new certifications({
                name,
                issued_by,
            });
        } else if (listType === "education") {
            schemaObj = new educations({
                institute_name,
                degree_name,
                start,
                end,
                description,
            });
        } else if (listType == "experience") {
            schemaObj = new experiences({
                role,
                job_type,
                company,
                start,
                end,
                currently_working,
            });
        } else return null;

        const result = await schemaObj.save();
        console.log(result);

        await users.updateOne(
            { email: userData.email },
            {
                $push: {
                    [listType]: result._id,
                },
            }
        );

        return await users.findOne({ email: userData.email });
    } catch (err) {
        return null;
    }
};
const updateItem = async (params) => {
    try {
        const {
            listtype: listType,
            userData,
            _id,
            name,
            issued_by,
            institute_name,
            degree_name,
            start,
            end,
            description,
            role,
            job_type,
            company,
            currently_working,
        } = params;

        if (listType === "certifications") {
            await certifications.updateOne(
                { _id },
                {
                    $set: {
                        name,
                        issued_by,
                    },
                }
            );
        } else if (listType === "education") {
            await educations.updateOne(
                { _id },
                {
                    $set: {
                        institute_name,
                        degree_name,
                        start,
                        end,
                        description,
                    },
                }
            );
        } else if (listType == "experience") {
            console.log("hei");
            await experiences.updateOne(
                { _id },
                {
                    $set: {
                        role,
                        job_type,
                        company,
                        start,
                        end,
                        currently_working,
                    },
                }
            );
        } else return null;

        return await users.findOne({ email: userData.email });
    } catch (err) {
        console.log(err);
        return null;
    }
};
const getItems = async (params) => {
    try {
        let { listtype: listType, _ids } = params;
        _ids = JSON.parse(_ids);

        if (listType === "certifications") {
            return await certifications.find({ _id: { $in: _ids } });
        } else if (listType === "education") {
            return await educations.find({ _id: { $in: _ids } });
        } else if (listType == "experience") {
            return await experiences.find({ _id: { $in: _ids } });
        } else null;
    } catch (err) {
        console.log(err);
        return null;
    }
};
const deleteItem = async (params) => {
    try {
        const { listtype: listType, userData, _id } = params;
        let updatedList = [];

        if (listType === "certifications") {
            await certifications.deleteOne({ _id });
        } else if (listType === "education") {
            await educations.deleteOne({ _id });
        } else if (listType == "experience") {
            await experiences.deleteOne({ _id });
        } else return null;

        await users.updateOne(
            { email: userData.email },
            {
                $pull: {
                    [listType]: _id,
                },
            }
        );

        return await users.findOne({ email: userData.email });
    } catch (err) {
        console.log(err);
        return null;
    }
};
module.exports = { createItem, updateItem, getItems, deleteItem };
