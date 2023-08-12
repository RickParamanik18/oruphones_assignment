import Image from "next/image";
import starPic from "../../public/stars.png";

const ProfessionalDetails = () => {
    return (
        <div className="paper my-4 flex justify-between">
            <div className="text-sm ">
                <p className="mb-3 font-semibold">{"Professional Details"}</p>
                <p className="text-[color:var(--demon)]">
                    {
                        "This are the professional details shown to users in the app."
                    }
                </p>
            </div>
            <div className="flex items-center">
                <Image src={starPic} alt="" height={90} width={90} />
            </div>
        </div>
    );
};

export default ProfessionalDetails;
