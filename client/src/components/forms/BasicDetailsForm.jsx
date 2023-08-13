"use client";
import { Form, Input, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";
import PrimaryBtn from "../PrimaryBtn";
import Link from "next/link";
import { signin } from "@/apis/user.api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

const skillOptions = [
    { label: "React.js", value: "React.js" },
    { label: "Node.js", value: "Node.js" },
    { label: "HTML", value: "HTML" },
    { label: "CSS", value: "CSS" },
    { label: "MongoDB", value: "MongoDB" },
    { label: "Express.js", value: "Express.js" },
];

const EducationForm = () => {
    const router = useRouter();
    const finishHandler = (values) => {
        signin(values)
            .then((res) => {
                toast(
                    res.status == 200 ? "Signin Successful" : "Signin Failed",
                    {
                        autoClose: 1500,
                    }
                );
                res.status == 200 && router.push("/user/profile");
            })
            .catch((err) => console.log(err));
    };

    return (
        <div className="p-5">
            <p className="text-xl font-semibold mb-6">
                Enter Your Basic Details to Signin
            </p>
            <Form onFinish={finishHandler} layout="vertical">
                <Form.Item
                    name={"name"}
                    label={"Your Name"}
                    rules={[
                        {
                            required: true,
                            message: `Please enter Your Name`,
                        },
                    ]}
                >
                    <Input size="large" />
                </Form.Item>
                <Form.Item
                    name={"email"}
                    label={"Your Email"}
                    rules={[
                        {
                            required: true,
                            message: `Please enter your email`,
                        },
                    ]}
                >
                    <Input size="large" type="email" />
                </Form.Item>
                <Form.Item
                    name={"phone"}
                    label={"Your Phone Number"}
                    rules={[
                        {
                            required: true,
                            message: `Please enter your phone number`,
                        },
                    ]}
                >
                    <Input size="large" />
                </Form.Item>
                <Form.Item
                    name={"password"}
                    label={"Your Password"}
                    rules={[
                        {
                            required: true,
                            message: `Please enter Password`,
                        },
                    ]}
                >
                    <Input size="large" password type="password" />
                </Form.Item>
                <Form.Item
                    name={"about"}
                    label={"About You"}
                    rules={[
                        {
                            required: true,
                            message: `Please enter About`,
                        },
                    ]}
                >
                    <TextArea size="large" style={{ height: "100px" }} />
                </Form.Item>
                <Form.Item
                    name={"skills"}
                    label={"Select Your Skills"}
                    initialValue={[]}
                >
                    <Select mode="tags" options={skillOptions} size="large" />
                </Form.Item>
                <div className="flex justify-center">
                    <PrimaryBtn name="Signin" htmlType="submit" />
                </div>
                <div>
                    GOTO: &nbsp;
                    <Link href={"/auth/login"}>Login</Link>&nbsp;
                    <Link href={"/"}>Home</Link>
                </div>
            </Form>
            <ToastContainer />
        </div>
    );
};

export default EducationForm;
