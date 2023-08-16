"use client";
import { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import jwt from "jwt-decode";
import { getItems } from "@/apis/udl.api";
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
            setUserData(data);
            setIsLoggedIn(true);

            getItems(token, {
                listType: "certifications",
                _ids: JSON.stringify(data.certifications),
            })
                .then((res) => {
                    setUserCertification(res.data);
                })
                .catch((err) => console.log(err));
            getItems(token, {
                listType: "experience",
                _ids: JSON.stringify(data.experience),
            })
                .then((res) => {
                    setUserExperience(res.data);
                })
                .catch((err) => console.log(err));
            getItems(token, {
                listType: "education",
                _ids: JSON.stringify(data.education),
            })
                .then((res) => {
                    setUserEducation(res.data);
                })
                .catch((err) => console.log(err));
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
