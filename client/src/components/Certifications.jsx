"user client";
import React, { useContext, useState } from "react";
import SecondaryBtn from "./SecondaryBtn";
import Image from "next/image";
import badgePic from "../../public/badge.png";
import NothingAdded from "./NothingAdded";
import { userContext } from "@/context/user.context";
import { MdDeleteOutline, MdEdit } from "react-icons/md";
import { Modal } from "antd";
import CertificationForm from "./forms/CertificationForm";
import { deleteItem } from "@/apis/udl.api";

const Certifications = ({ onClick, addEnabled = false }) => {
    const { userCertification, setUserCertification, token } =
        useContext(userContext);
    const [formModalVisible, setFormModalVisible] = useState(false);
    const [formModalData, setFormModalData] = useState({});

    const deleteCertification = async (_id) => {
        await deleteItem(token, {
            listType: "certifications",
            _id,
        })
            .then((data) => {
                if (data.status == 200) {
                    const tempCertifications = userCertification.filter(
                        (certification) => certification._id !== _id
                    );
                    setUserCertification(tempCertifications);
                }
            })
            .catch((err) => console.log(err));
    };
    const hideFormModal = () => {
        setFormModalData({});
        setFormModalVisible(false);
    };
    
    return (
        <div className="mb-12">
            <div className="flex justify-between items-center text-sm font-semibold">
                <span>Certifications</span>
                <SecondaryBtn
                    name={addEnabled ? "Add" : "Edit"}
                    onClick={
                        addEnabled ? () => setFormModalVisible(true) : onClick
                    }
                />
            </div>
            {userCertification?.length ? (
                userCertification?.map((certification, index) => (
                    <div key={index}>
                        {addEnabled ? (
                            <div className="flex ps-5">
                                <MdDeleteOutline
                                    size={25}
                                    className="cursor-pointer mx-1 text-[color:var(--primary)]"
                                    title="Delete"
                                    onClick={() =>
                                        deleteCertification(certification._id)
                                    }
                                />
                                <MdEdit
                                    size={20}
                                    className="cursor-pointer mx-1 text-[color:var(--primary)]"
                                    title="Edit"
                                    onClick={() => {
                                        setFormModalData(certification);
                                        setFormModalVisible(true);
                                    }}
                                />
                            </div>
                        ) : null}
                        <div
                            className={`bg-white py-2 px-8 border-2 shadow ${
                                addEnabled ? "mb-4" : "my-4"
                            } flex items-center rounded-full`}
                            key={index}
                        >
                            <div>
                                <Image
                                    src={badgePic}
                                    alt=""
                                    height={40}
                                    width={40}
                                />
                            </div>
                            <div className="w-full flex flex-col items-center text-[color:var(--demon)]">
                                <span className="text-xl mb-1">
                                    {certification.name}
                                </span>
                                <span className="text-lg">
                                    {certification.issued_by}
                                </span>
                            </div>
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
                <CertificationForm
                    {...formModalData}
                    isEditing={Object.keys(formModalData).length}
                    hideFormModal={hideFormModal}
                />
            </Modal>
        </div>
    );
};

export default Certifications;
