import { useContext, useState } from "react";
import NothingAdded from "./NothingAdded";
import SecondaryBtn from "./SecondaryBtn";
import { userContext } from "@/context/user.context";
import { deleteItem } from "@/apis/udl.api";
import { MdDeleteOutline, MdEdit } from "react-icons/md";
import { Modal } from "antd";
import EducationForm from "./forms/EducationForm";
import dayjs from "dayjs";

const Education = ({ onClick, addEnabled = false }) => {
    const { userEducation, setUserEducation, token } = useContext(userContext);
    const [formModalVisible, setFormModalVisible] = useState(false);
    const [formModalData, setFormModalData] = useState({});

    const deleteEducation = async (_id) => {
        await deleteItem(token, {
            listType: "education",
            _id,
        })
            .then((data) => {
                if (data.status == 200) {
                    const tempEducation = userEducation.filter(
                        (edu) => edu._id !== _id
                    );
                    setUserEducation(tempEducation);
                }
            })
            .catch((err) => console.log(err));
    };
    const hideFormModal = () => {
        setFormModalData({});
        setFormModalVisible(false);
    };
    
    return (
        <div>
            <div className="flex justify-between items-center text-sm font-semibold">
                <span>Education</span>
                <SecondaryBtn
                    name={addEnabled ? "Add" : "Edit"}
                    onClick={
                        addEnabled ? () => setFormModalVisible(true) : onClick
                    }
                />
            </div>
            {userEducation.length ? (
                userEducation.map((edu, index) => (
                    <div key={index}>
                        {addEnabled ? (
                            <div className="flex ps-5">
                                <MdDeleteOutline
                                    size={25}
                                    className="cursor-pointer mx-1 text-[color:var(--primary)]"
                                    title="Delete"
                                    onClick={() => deleteEducation(edu._id)}
                                />
                                <MdEdit
                                    size={20}
                                    className="cursor-pointer mx-1 text-[color:var(--primary)]"
                                    title="Edit"
                                    onClick={() => {
                                        setFormModalData(edu);
                                        setFormModalVisible(true);
                                    }}
                                />
                            </div>
                        ) : null}
                        <div className="paper my-4">
                            <span className="text-[color:var(--primary)] text-xl font-semibold">
                                {edu.institute_name}
                            </span>
                            <div className="text-sm font-semibold flex justify-between mb-2 mt-4">
                                <span>{`( ${dayjs(edu.start).format(
                                    "YYYY"
                                )} - ${dayjs(edu.end).format("YYYY")} )`}</span>
                                <span>{edu.degree_name}</span>
                            </div>
                            <p className="text-[color:var(--demon)] text-sm">
                                {edu.description}
                            </p>
                        </div>
                    </div>
                ))
            ) : (
                <NothingAdded />
            )}
            <Modal
                onCancel={hideFormModal}
                open={formModalVisible}
                footer={null}
            >
                <EducationForm
                    {...formModalData}
                    isEditing={Object.keys(formModalData).length}
                    hideFormModal={hideFormModal}
                />
            </Modal>
        </div>
    );
};

export default Education;
