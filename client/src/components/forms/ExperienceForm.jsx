"use client";
import { Checkbox, DatePicker, Form, Input, Select } from "antd";
import dayjs from "dayjs";
import React, { useState } from "react";

import PrimaryBtn from "../PrimaryBtn";

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
        role = "",
        job_type = "",
        company,
        start,
        end,
        currently_working = false,
    } = props;

    const [checkboxVal, setCheckboxVal] = useState(currently_working);
    const finishHandler = (values) => {
        values.start = values.start.format();
        values.end = values.end ? values.end.format() : "";

        values.currently_working = checkboxVal;
        console.log(values);
    };
    return (
        <div className="p-5">
            <p className="text-xl font-semibold mb-6">
                {isEditing ? "Edit Experience" : "Add Experience"}
            </p>
            <Form onFinish={finishHandler} layout="vertical">
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
