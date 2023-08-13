"use client";
import { Form, Input } from "antd";
import React from "react";
import PrimaryBtn from "../PrimaryBtn";

const CertificationForm = (props) => {
    const { isEditing, name = "", issued_by = "" } = props;

    const finishHandler = (values) => {
        console.log(values);
    };
    return (
        <div className="p-5">
            <p className="text-xl font-semibold mb-6">
                {isEditing ? "Edit Certifications" : "Add Certifications"}
            </p>
            <Form onFinish={finishHandler} layout="vertical">
                <Form.Item
                    name={"name"}
                    label={"Certification on"}
                    initialValue={name}
                    rules={[
                        {
                            required: true,
                            message: `Please enter Certification Name`,
                        },
                    ]}
                >
                    <Input size="large" />
                </Form.Item>
                <Form.Item
                    name={"issued_by"}
                    label={"Issued by (org name)"}
                    initialValue={issued_by}
                    rules={[
                        {
                            required: true,
                            message: `Please enter Isssued by`,
                        },
                    ]}
                >
                    <Input size="large" />
                </Form.Item>
                <PrimaryBtn
                    name={isEditing ? "Edit" : "Add"}
                    htmlType="submit"
                />
            </Form>
        </div>
    );
};

export default CertificationForm;
