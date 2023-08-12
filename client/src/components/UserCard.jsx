import Image from "next/image";
import avatar from "../../public/avatar.png";
import PrimaryBtn from "./PrimaryBtn";

const UserCard = ({ btnText, userId }) => {
    const user = {
        name: "Rick Paramanik",
        phone: "7550912113",
        email: "rickckir100@gmail.com",
        password: "abc",
        pic: "pic url",
        about: "Lorem ipsum dolor sit amet consectetur. Erat auctor a aliquam vel congue luctus. Leo diam cras neque mauris ac arcu elit ipsum dolor sit amet consectetur.",
        skills: ["react", "node", "express", "javascript", "mongodb"],
        certifications: [
            { name: "Python", issued_by: "Coading Ninjas" },
            { name: "Javascript", issued_by: "Learn With Sumit" },
        ],
        experience: [
            {
                role: "Full Stack Developer Intern",
                job_type: "Internship",
                company: "FacePrep",
                start: "june 2022",
                end: "sep 2022",
                currently_working: false,
            },
        ],
        education: [
            {
                institute_name: "DSMS College",
                degree_name: "BCA",
                start: "2020",
                end: "2023",
                description:
                    "Lorem ipsum dolor sit amet consectetur. Erat auctor a aliquam vel congue luctus. Leo diam cras neque mauris ac arcu elit ipsum dolor sit amet consectetur.",
            },
        ],
    };
    return (
        <div className="max-w-[350px] py-3 px-4 my-4 me-8 border-2 rounded-lg shadow">
            <div className=" flex justify-between">
                <div className="text-sm w-full">
                    <p className="mb-3 font-semibold">{user.name}</p>
                    <p className="text-[color:var(--demon)] mb-5">
                        {`${user.experience[0].role} @${user.experience[0].company}`}
                    </p>
                </div>
                <div className="ms-4">
                    <Image src={avatar} alt="" height={150} width={150} />
                </div>
            </div>
            <PrimaryBtn name={btnText} />
        </div>
    );
};

export default UserCard;
