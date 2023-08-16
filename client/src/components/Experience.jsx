"use client";
import React, { useContext, useState } from "react";
import SecondaryBtn from "./SecondaryBtn";
import oruLogo from "../../public/oru_logo.png";
import Image from "next/image";
import NothingAdded from "./NothingAdded";
import { userContext } from "@/context/user.context";
import { deleteItem } from "@/apis/udl.api";
import { MdDeleteOutline, MdEdit } from "react-icons/md";
import { Modal } from "antd";
import ExperienceForm from "./forms/ExperienceForm";
import dayjs from "dayjs";

const Experience = ({ onClick, addEnabled = false }) => {
    const { userExperience, setUserExperience, token } =
        useContext(userContext);
    const [formModalVisible, setFormModalVisible] = useState(false);
    const [formModalData, setFormModalData] = useState({});

    const deleteExperience = async (_id) => {
        await deleteItem(token, {
            listType: "experience",
            _id,
        })
            .then((data) => {
                if (data.status == 200) {
                    const tempExperience = userExperience.filter(
                        (exp) => exp._id !== _id
                    );
                    setUserExperience(tempExperience);
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
                <span>Experience</span>
                <SecondaryBtn
                    name={addEnabled ? "Add" : "Edit"}
                    onClick={
                        addEnabled ? () => setFormModalVisible(true) : onClick
                    }
                />
            </div>
            {userExperience.length ? (
                userExperience.map((exp, index) => (
                    <div key={index}>
                        {addEnabled ? (
                            <div className="flex ps-5">
                                <MdDeleteOutline
                                    size={25}
                                    className="cursor-pointer mx-1 text-[color:var(--primary)]"
                                    title="Delete"
                                    onClick={() => deleteExperience(exp._id)}
                                />
                                <MdEdit
                                    size={20}
                                    className="cursor-pointer mx-1 text-[color:var(--primary)]"
                                    title="Edit"
                                    onClick={() => {
                                        setFormModalData(exp);
                                        setFormModalVisible(true);
                                    }}
                                />
                            </div>
                        ) : null}
                        <div className="paper my-4 flex justify-between">
                            <div className="w-full text-sm ">
                                <div className="font-semibold flex justify-between mb-2">
                                    <span>{`${dayjs(exp.start).format(
                                        "MM/YYYY"
                                    )} - ${
                                        exp.currently_working
                                            ? "Working"
                                            : dayjs(exp.end).format("MM/YYYY")
                                    }`}</span>
                                    <span>{exp.job_type}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>{exp.company}</span>
                                    <span>{exp.role}</span>
                                </div>
                            </div>
                            <div className="ms-4 flex items-center">
                                <Image src={oruLogo} alt="" />
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
                <ExperienceForm
                    {...formModalData}
                    isEditing={Object.keys(formModalData).length}
                    hideFormModal={hideFormModal}
                />
            </Modal>
        </div>
    );
};

export default Experience;
