import BasicDetails from "@/components/BasicDetails";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import ProfessionalDetails from "@/components/ProfessionalDetails";
import Certifications from "@/components/Certifications";
import Experience from "@/components/Experience";
import Education from "@/components/Education";

export default function Home() {
    const user = {
        name: "Rick Paramanik",
        phone: "7550912113",
        email: "rickckir100@gmail.com",
        password: "abc",
        pic: "pic url",
        about: "Lorem ipsum dolor sit amet consectetur. Erat auctor a aliquam vel congue luctus. Leo diam cras neque mauris ac arcu elit ipsum dolor sit amet consectetur.",
        skills: [],
        // skills: ["react", "node", "express", "javascript", "mongodb"],

        certifications: [
            // { name: "Python", issued_by: "Coading Ninjas" },
            // { name: "Javascript", issued_by: "Learn With Sumit" },
        ],
        experience: [
            // {
            //     role: "Full Stack Developer Intern",
            //     job_type: "Internship",
            //     company: "FacePrep",
            //     start: "june 2022",
            //     end: "sep 2022",
            //     currently_working: false,
            // },
        ],
        education: [
            // {
            //     institute_name: "DSMS College",
            //     degree_name: "BCA",
            //     start: "2020",
            //     end: "2023",
            //     description:
            //         "Lorem ipsum dolor sit amet consectetur. Erat auctor a aliquam vel congue luctus. Leo diam cras neque mauris ac arcu elit ipsum dolor sit amet consectetur.",
            // },
        ],
    };

    return (
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
                    <Certifications certifications={user.certifications} />
                    <Experience experience={user.experience} />
                    <Education education={user.education} />
                </div>
            </div>
        </div>
    );
}
