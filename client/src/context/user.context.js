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
            setUserData(data);
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
