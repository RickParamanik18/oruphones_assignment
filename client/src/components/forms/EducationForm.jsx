"use client";
import { DatePicker, Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import dayjs from "dayjs";
import React, { useContext } from "react";
import PrimaryBtn from "../PrimaryBtn";
import { createItem, updateItem } from "@/apis/udl.api";
import { userContext } from "@/context/user.context";

const EducationForm = (props) => {
    const {
        isEditing,
        _id,
        institute_name = "",
        degree_name = "",
        start,
        end,
        description = "",
        hideFormModal = () => {},
    } = props;
    const { userEducation, setUserEducation, token } = useContext(userContext);
    const [form] = Form.useForm();

    const finishHandler = async (values) => {
        values.start = values.start.format();
        values.end = values.end.format();
        if (isEditing) {
            await updateItem(token, {
                listType: "education",
                _id,
                ...values,
            });
            userEducation.map((education, index) => {
                if (education._id === _id) {
                    const temp = userEducation;
                    temp.splice(index, 1, values);
                    setUserEducation(temp);
                }
            });
        } else {
            await createItem(token, {
                listType: "education",
                ...values,
            });
            setUserEducation((prev) => [values, ...prev]);
        }
        form.resetFields();
        //to close the form
        hideFormModal();
    };

    return (
        <div className="p-5">
            <p className="text-xl font-semibold mb-6">
                {isEditing ? "Edit Education" : "Add Education"}
            </p>
            <Form onFinish={finishHandler} layout="vertical" form={form}>
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
