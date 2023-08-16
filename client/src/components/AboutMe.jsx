import { useState } from "react";
import SecondaryBtn from "./SecondaryBtn";
import SingleFieldEditing from "./forms/SingleFieldEditing";
import { Modal } from "antd";

const AboutMe = (props) => {
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
                    About {props.name.split(" ")[0]}
                </span>
                <SecondaryBtn
                    name={"Edit"}
                    onClick={() => {
                        setFormModalData({
                            fieldName: "about",
                            defaultVal: props.about,
                        });
                        setFormModalVisible(true);
                    }}
                />
            </div>
            <p className="text-[color:var(--demon)] text-sm">{props.about}</p>

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

export default AboutMe;
