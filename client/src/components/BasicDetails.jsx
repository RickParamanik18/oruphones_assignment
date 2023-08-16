import { useState } from "react";
import SecondaryBtn from "./SecondaryBtn";
import SingleFieldEditing from "./forms/SingleFieldEditing";
import { Modal } from "antd";

const BasicDetails = (props) => {
    const [formModalVisible, setFormModalVisible] = useState(false);
    const [formModalData, setFormModalData] = useState({});
    const hideFormModal = () => {
        setFormModalData({});
        setFormModalVisible(false);
    };
    return (
        <div className="paper my-4">
            {/* name */}
            <div className="my-4 text-sm font-semibold">
                <p className="mb-1 text-[color:var(--demon)]">Your Name</p>
                <div className="flex justify-between items-center">
                    <span>{props.name}</span>
                    <SecondaryBtn
                        name={"Edit"}
                        onClick={() => {
                            setFormModalData({
                                fieldName: "name",
                                defaultVal: props.name,
                            });
                            setFormModalVisible(true);
                        }}
                    />
                </div>
            </div>
            {/* email */}
            <div className="my-4 text-sm font-semibold">
                <p className="mb-1 text-[color:var(--demon)]">Your Email</p>
                <div className="flex justify-between items-center">
                    <span>{props.email}</span>
                    <SecondaryBtn
                        name={"Edit"}
                        onClick={() => {
                            setFormModalData({
                                fieldName: "email",
                                defaultVal: props.email,
                            });
                            setFormModalVisible(true);
                        }}
                    />
                </div>
            </div>
            {/* phone */}
            <div className="my-4 text-sm font-semibold">
                <p className="mb-1 text-[color:var(--demon)]">Phone Number</p>
                <div className="flex justify-between items-center">
                    <span>{props.phone}</span>
                    <SecondaryBtn
                        name={"Edit"}
                        onClick={() => {
                            setFormModalData({
                                fieldName: "phone",
                                defaultVal: props.phone,
                            });
                            setFormModalVisible(true);
                        }}
                    />
                </div>
            </div>
            <Modal
                onCancel={hideFormModal}
                open={formModalVisible}
                footer={null}
            >
                <SingleFieldEditing
                    {...formModalData}
                    hideFormModal={hideFormModal}
                />
            </Modal>
        </div>
    );
};

export default BasicDetails;
