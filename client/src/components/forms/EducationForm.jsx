"use client";
import { DatePicker, Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import dayjs from "dayjs";
import React from "react";
import PrimaryBtn from "../PrimaryBtn";

const EducationForm = (props) => {
    const {
        isEditing,
        institute_name = "",
        degree_name = "",
        start,
        end,
        description = "",
    } = props;

    const finishHandler = (values) => {
        values.start = values.start.format();
        values.end = values.end.format();
        console.log(values);
    };
    return (
        <div className="p-5">
            <p className="text-xl font-semibold mb-6">
                {isEditing ? "Edit Education" : "Add Education"}
            </p>
            <Form onFinish={finishHandler} layout="vertical">
                <Form.Item
                    name={"degree_name"}
                    label={"Degree Name"}
                    initialValue={degree_name}
                    rules={[
                        {
                            required: true,
                            message: `Please enter Degree Name`,
                        },
                    ]}
                >
                    <Input size="large" />
                </Form.Item>
                <Form.Item
                    name={"institute_name"}
                    label={"Institute Name"}
                    initialValue={institute_name}
                    rules={[
                        {
                            required: true,
                            message: `Please enter Institute Name`,
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

                <Form.Item
                    name={"description"}
                    label={"Description"}
                    initialValue={description}
                    rules={[
                        {
                            required: true,
                            message: `Please enter Description`,
                        },
                    ]}
                >
                    <TextArea size="large" style={{ height: "100px" }} />
                </Form.Item>

                <PrimaryBtn
                    name={isEditing ? "Edit" : "Add"}
                    htmlType="submit"
                />
            </Form>
        </div>
    );
};

export default EducationForm;
