"use client";
import { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import jwt from "jwt-decode";
const userContext = createContext();

const UserContextProvider = ({ children }) => {
    const [userData, setUserData] = useState({});
    const [userCertification, setUserCertification] = useState([]);
    const [userEducation, setUserEducation] = useState([]);
    const [userExperience, setUserExperience] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const token = Cookies.get("userData");

    useEffect(() => {
        const data = token ? jwt(token) : {};
        if (data.name) {
            setIsLoggedIn(true);
            // setUserData(data);
            setUserData({
                name: "Rick Paramanik",
                phone: "7550912113",
                email: "rickckir100@gmail.com",
                password: "abc",
                pic: "pic url",
                about: "Lorem ipsum dolor sit amet consectetur. Erat auctor a aliquam vel congue luctus. Leo diam cras neque mauris ac arcu elit ipsum dolor sit amet consectetur.",
                skills: ["react", "node", "express", "javascript", "mongodb"],
            });
            setUserCertification([
                {
                    _id: "1231232323",
                    name: "Python",
                    issued_by: "Coading Ninjas",
                },
                {
                    _id: "5675634546",
                    name: "Javascript",
                    issued_by: "Learn With Sumit",
                },
            ]);
            setUserEducation([
                {
                    institute_name: "DSMS College",
                    degree_name: "BCA",
                    start: "2020",
                    end: "2023",
                    description:
                        "Lorem ipsum dolor sit amet consectetur. Erat auctor a aliquam vel congue luctus. Leo diam cras neque mauris ac arcu elit ipsum dolor sit amet consectetur.",
                },
            ]);
            setUserExperience([
                {
                    role: "Full Stack Developer Intern",
                    job_type: "Internship",
                    company: "FacePrep",
                    start: "june 2022",
                    end: "sep 2022",
                    currently_working: false,
                },
            ]);
        }
    }, []);

    return (
        <userContext.Provider
            value={{
                userData,
                setUserData,
                userCertification,
                setUserCertification,
                userEducation,
                setUserEducation,
                userExperience,
                setUserExperience,
                isLoggedIn,
                setIsLoggedIn,
                token,
            }}
        >
            {children}
        </userContext.Provider>
    );
};

export { userContext, UserContextProvider };
