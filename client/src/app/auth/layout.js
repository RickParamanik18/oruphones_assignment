"use client";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";
import { userContext } from "@/context/user.context";
const layout = ({ children }) => {
    const { isLoggedIn } = useContext(userContext);
    const router = useRouter();
    return !isLoggedIn ? (
        <div className="flex items-center justify-center h-screen">
            <div className="paper max-h-[80vh] max-w-[70vw] overflow-y-scroll">
                {children}
            </div>
        </div>
    ) : (
        router.push("/")
    );
};

export default layout;
