"use client";
import { Form, Input } from "antd";
import React, { useContext } from "react";
import PrimaryBtn from "../PrimaryBtn";
import { userContext } from "@/context/user.context";
import { createItem, updateItem } from "@/apis/udl.api";

const CertificationForm = (props) => {
    const {
        isEditing,
        _id,
        name = "",
        issued_by = "",
        hideFormModal = () => {},
    } = props;
    const { userCertification, setUserCertification, token } =
        useContext(userContext);
    const [form] = Form.useForm();

    const finishHandler = async (values) => {
        if (isEditing) {
            await updateItem(token, {
                listType: "certifications",
                _id,
                ...values,
            });
            userCertification.map((certefication, index) => {
                if (certefication._id === _id) {
                    const temp = userCertification;
                    temp.splice(index, 1, values);
                    setUserCertification(temp);
                }
            });
        } else {
            await createItem(token, {
                listType: "certifications",
                ...values,
            });
            setUserCertification((prev) => [values, ...prev]);
        }
        form.resetFields();
        //to close the form
        hideFormModal();
    };

    return (
        <div className="p-5">
            <p className="text-xl font-semibold mb-6">
                {isEditing ? "Edit Certifications" : "Add Certifications"}
            </p>
            <Form onFinish={finishHandler} layout="vertical" form={form}>
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
