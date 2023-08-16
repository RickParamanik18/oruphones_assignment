import SecondaryBtn from "./SecondaryBtn";
import NothingAdded from "./NothingAdded";
import { useState } from "react";
import { Modal } from "antd";
import SingleFieldEditing from "./forms/SingleFieldEditing";

const Skills = ({ skills, _id }) => {
    const [formModalVisible, setFormModalVisible] = useState(false);
    const [formModalData, setFormModalData] = useState({});
    const hideFormModal = () => {
        setFormModalData({});
        setFormModalVisible(false);
    };
    return (
        <div className="paper my-4">
            <div className="flex justify-between items-center mb-4">
                <span className="text-[color:var(--demon)] text-xl font-semibold">
                    Skills
                </span>
                <SecondaryBtn
                    name={"Edit"}
                    onClick={() => {
                        setFormModalData({
                            fieldName: "skills",
                            defaultVal: skills,
                        });
                        setFormModalVisible(true);
                    }}
                />
            </div>
            <ul className="text-[color:var(--demon)]">
                {skills.length ? (
                    skills.map((skill, index) => (
                        <li
                            key={index}
                            className="my-2 text-base font-semibold"
                        >
                            {skill}
                        </li>
                    ))
                ) : (
                    <NothingAdded />
                )}
            </ul>
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

export default Skills;
