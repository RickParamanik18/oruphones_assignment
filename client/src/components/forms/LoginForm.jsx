"use client";
import { Form, Input } from "antd";
import React from "react";
import PrimaryBtn from "../PrimaryBtn";
import Link from "next/link";
import { login } from "@/apis/user.api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

const LoginForm = () => {
    const router = useRouter();
    const finishHandler = (values) => {
        login(values)
            .then((res) => {
                toast(res.status == 200 ? "Login Successful" : "Login Failed", {
                    autoClose: 1500,
                });
                res.status == 200 && router.push("/user/profile");
            })
            .catch((err) => console.log(err));
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
                    <Input size="large" type="password" />
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
            <ToastContainer />
        </div>
    );
};

export default LoginForm;
