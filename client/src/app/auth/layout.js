"use client";
import React, { useState } from "react";

const layout = ({ children }) => {
    const [pageNo, setPageNo] = useState(0);
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="paper max-h-[80vh] max-w-[70vw] overflow-y-scroll">
                {children}
            </div>
        </div>
    );
};

export default layout;
