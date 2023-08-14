import React from "react";
import SecondaryBtn from "./SecondaryBtn";
import oruLogo from "../../public/oru_logo.png";
import Image from "next/image";
import NothingAdded from "./NothingAdded";

const Experience = ({ experience, onClick }) => {
    return (
        <div className="mb-12">
            <div className="flex justify-between items-center text-sm font-semibold">
                <span>Experience</span>
                <SecondaryBtn name={"Edit"} onClick={onClick} />
            </div>
            {experience.length ? (
                experience.map((exp, index) => (
                    <div className="paper my-4 flex justify-between">
                        <div className="w-full text-sm ">
                            <div className="font-semibold flex justify-between mb-2">
                                <span>{`${exp.start} - ${exp.end}`}</span>
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
                ))
            ) : (
                <NothingAdded />
            )}
        </div>
    );
};

export default Experience;
