import { Form, Input, Select } from "antd";
import React, { useContext } from "react";
import SecondaryBtn from "../SecondaryBtn";
import TextArea from "antd/es/input/TextArea";
import { singleUpdate } from "@/apis/user.api";
import { userContext } from "@/context/user.context";

const skillOptions = [
    { label: "React.js", value: "React.js" },
    { label: "Node.js", value: "Node.js" },
    { label: "HTML", value: "HTML" },
    { label: "CSS", value: "CSS" },
    { label: "MongoDB", value: "MongoDB" },
    { label: "Express.js", value: "Express.js" },
];

const SingleFieldEditing = (props) => {
    const { fieldName = "", defaultVal = "", hideFormModal = () => {} } = props;
    const [form] = Form.useForm();
    const { token, setUserData } = useContext(userContext);
    const finishHandler = (value) => {
        singleUpdate(token, value)
            .then((res) => {
                if (res.status == 200) {
                    setUserData((prev) => ({
                        ...prev,
                        ...value,
                    }));
                    hideFormModal();
                }
            })
            .catch((err) => console.log(err));
    };

    return (
        <div>
            <Form onFinish={finishHandler} layout="vertical" form={form}>
                {fieldName === "about" ? (
                    <Form.Item
                        name={"about"}
                        label={"About You"}
                        rules={[
                            {
                                required: true,
                                message: `Please enter About`,
                            },
                        ]}
                        initialValue={defaultVal}
                    >
                        <TextArea size="large" style={{ height: "100px" }} />
                    </Form.Item>
                ) : fieldName === "skills" ? (
                    <Form.Item
                        name={"skills"}
                        label={"Select Your Skills"}
                        initialValue={defaultVal}
                    >
                        <Select
                            mode="tags"
                            options={skillOptions}
                            size="large"
                        />
                    </Form.Item>
                ) : (
                    <Form.Item
                        name={fieldName}
                        label={`Your ${fieldName}`}
                        rules={[
                            {
                                required: true,
                                message: `Please enter Your ${fieldName}`,
                            },
                        ]}
                        initialValue={defaultVal}
                    >
                        <Input size="large" />
                    </Form.Item>
                )}
                <SecondaryBtn name={"Edit"} htmlType="submit" />
            </Form>
        </div>
    );
};

export default SingleFieldEditing;
