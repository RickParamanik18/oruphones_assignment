"use client";
import { Checkbox, DatePicker, Form, Input, Select } from "antd";
import dayjs from "dayjs";
import React, { useContext, useState } from "react";
import { createItem, updateItem } from "@/apis/udl.api";
import PrimaryBtn from "../PrimaryBtn";
import { userContext } from "@/context/user.context";

const jobTypeOptions = [
    {
        value: "Full Time",
        label: "Full Time",
    },
    {
        value: "Part Time",
        label: "Part Time",
    },
    {
        value: "Internship",
        label: "Internship",
    },
];
const ExperienceForm = (props) => {
    const {
        isEditing,
        _id,
        role = "",
        job_type = "",
        company,
        start,
        end,
        currently_working = false,
        hideFormModal = () => {},
    } = props;

    const [checkboxVal, setCheckboxVal] = useState(currently_working);
    const { userExperience, setUserExperience, token } =
        useContext(userContext);
    const [form] = Form.useForm();

    const finishHandler = async (values) => {
        values.start = values.start.format();
        values.end = values.end ? values.end.format() : "";
        values.currently_working = Number(checkboxVal);
        console.log(values);
        if (isEditing) {
            await updateItem(token, {
                listType: "experience",
                _id,
                ...values,
            });
            userExperience.map((exp, index) => {
                if (exp._id === _id) {
                    const temp = userExperience;
                    temp.splice(index, 1, values);
                    setUserExperience(temp);
                }
            });
        } else {
            const res = await createItem(token, {
                listType: "experience",
                ...values,
            });
            console.log(res);
            setUserExperience((prev) => [values, ...prev]);
        }
        form.resetFields();
        //to close the form
        hideFormModal();
    };
    return (
        <div className="p-5">
            <p className="text-xl font-semibold mb-6">
                {isEditing ? "Edit Experience" : "Add Experience"}
            </p>
            <Form onFinish={finishHandler} layout="vertical" form={form}>
                <Form.Item
                    name={"role"}
                    label={"Role Name"}
                    initialValue={role}
                    rules={[
                        {
                            required: true,
                            message: `Please enter Your Role`,
                        },
                    ]}
                >
                    <Input size="large" />
                </Form.Item>
                <Form.Item
                    name={"job_type"}
                    label={"Job Type"}
                    initialValue={job_type}
                    rules={[
                        {
                            required: true,
                            message: `Please enter Job type`,
                        },
                    ]}
                >
                    <Select options={jobTypeOptions} size="large" />
                </Form.Item>
                <Form.Item
                    name={"company"}
                    label={"Company"}
                    initialValue={company}
                    rules={[
                        {
                            required: true,
                            message: `Please enter Company Name`,
                        },
                    ]}
                >
                    <Input size="large" />
                </Form.Item>
                <Form.Item
                    name={"start"}
                    label={"Start Year"}
                    initialValue={start ? dayjs(start) : null}
                    rules={[
                        {
                            required: true,
                            message: `Please enter Start year`,
                        },
                    ]}
                >
                    <DatePicker picker="year" size="large" />
                </Form.Item>
                {!checkboxVal ? (
                    <Form.Item
                        name={"end"}
                        label={"End Year"}
                        initialValue={end ? dayjs(end) : null}
                        rules={[
                            {
                                required: true,
                                message: `Please enter End Year`,
                            },
                        ]}
                    >
                        <DatePicker picker="year" size="large" />
                    </Form.Item>
                ) : null}
                <div className="mb-6">
                    <Checkbox onChange={() => setCheckboxVal((prev) => !prev)}>
                        Currently Working
                    </Checkbox>
                </div>
                <PrimaryBtn
                    name={isEditing ? "Edit" : "Add"}
                    htmlType="submit"
                />
            </Form>
        </div>
    );
};

export default ExperienceForm;
