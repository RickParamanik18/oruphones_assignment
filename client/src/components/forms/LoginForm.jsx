"use client";
import { Form, Input } from "antd";
import React from "react";
import PrimaryBtn from "../PrimaryBtn";
import Link from "next/link";

const LoginForm = () => {
    const finishHandler = (values) => {
        console.log(values);
    };

    return (
        <div className="p-5">
            <p className="text-xl font-semibold mb-6">
                Enter your credentials to Login
            </p>
            <Form onFinish={finishHandler} layout="vertical">
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
                <div className="flex justify-center">
                    <PrimaryBtn name="Login" htmlType="submit" />
                </div>
                <div>
                    GOTO: &nbsp;
                    <Link href={"/auth/signin"}>Signin</Link>&nbsp;
                    <Link href={"/"}>Home</Link>
                </div>
            </Form>
        </div>
    );
};

export default LoginForm;
