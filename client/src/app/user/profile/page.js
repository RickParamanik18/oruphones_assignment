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
    const { userData: user } = useContext(userContext);

    const getEditableElement = () => {
        if (editableField) {
            if (editableField == "education")
                return <Education addEnabled={true} />;
            else if (editableField == "experience")
                return <Experience addEnabled={true} />;
            else if (editableField == "certification")
                return <Certifications addEnabled={true} />;
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
                    <Skills skills={user?.skills} _id={user?._id} />
                </div>
                <div className="my-4 mx-1 sm:mx-8">
                    <ProfessionalDetails />
                    <Certifications onClick={() => onEdit("certification")} />
                    <Experience onClick={() => onEdit("experience")} />
                    <Education onClick={() => onEdit("education")} />
                </div>
            </div>
            <Modal
                open={modalVisible}
                title={"Edit " + editableField}
                footer={null}
                onCancel={() => setModalVisible(false)}
            >
                {getEditableElement()}
            </Modal>
        </div>
    ) : null;
}
