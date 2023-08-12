import React from "react";
import SecondaryBtn from "./SecondaryBtn";
import Image from "next/image";
import badgePic from "../../public/badge.png";

const Certifications = ({ certifications }) => {
    return (
        <div className="mb-12">
            <div className="flex justify-between items-center text-sm font-semibold">
                <span>Certifications</span>
                <SecondaryBtn name={"Edit"} />
            </div>
            {certifications.map((certification, index) => (
                <div
                    className=" bg-white py-2 px-8 border-2 shadow my-4 flex items-center rounded-full"
                    key={index}
                >
                    <div>
                        <Image src={badgePic} alt="" height={40} width={40} />
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
            ))}
        </div>
    );
};

export default Certifications;
