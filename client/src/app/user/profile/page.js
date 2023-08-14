"use client";
import BasicDetails from "@/components/BasicDetails";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import ProfessionalDetails from "@/components/ProfessionalDetails";
import Certifications from "@/components/Certifications";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import { useContext, useState } from "react";
import { userContext } from "@/context/user.context";
import { Modal } from "antd";

export default function Home() {
    const [modalVisible, setModalVisible] = useState(false);
    const [editableField, setEditableField] = useState("");
    const {
        userData: user,
        userEducation,
        userCertification,
        userExperience,
    } = useContext(userContext);
    const getEditableElement = () => {
        if (editableField) {
            if (editableField == "edutation")
                return (
                    <Education education={userEducation} addEnabled={true} />
                );
            else if (editableField == "experience")
                return (
                    <Experience experience={userExperience} addEnabled={true} />
                );
            else if (editableField == "certification")
                return (
                    <Certifications
                        certifications={userCertification}
                        addEnabled={true}
                    />
                );
            else return null;
        }
    };
    const onEdit = (val) => {
        setEditableField(val);
        setModalVisible(true);
    };
    return user.name ? (
        <div className="relative">
            <div className="bg-[color:var(--primary)] text-white font-medium text-xl py-3 px-4 rounded-lg h-[150px]">
                MY PROFILE
            </div>
            <div className="paper absolute w-[90%] top-1/2 left-1/2 -translate-x-1/2	grid grid-cols-1 lg:grid-cols-2">
                <div className="my-4 mx-1 sm:mx-8">
                    <BasicDetails {...user} />
                    <AboutMe {...user} />
                    <Skills skills={user.skills} />
                </div>
                <div className="my-4 mx-1 sm:mx-8">
                    <ProfessionalDetails />
                    <Certifications
                        certifications={userCertification}
                        onClick={() => onEdit("certification")}
                    />
                    <Experience
                        experience={userExperience}
                        onClick={() => onEdit("experience")}
                    />
                    <Education
                        education={userEducation}
                        onClick={() => onEdit("education")}
                    />
                </div>
            </div>
            <Modal
                open={modalVisible}
                title={"Edit"}
                footer={null}
                onCancel={() => setModalVisible(false)}
            >
                {getEditableElement()}
            </Modal>
        </div>
    ) : null;
}
