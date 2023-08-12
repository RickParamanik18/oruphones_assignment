import React from "react";

const layout = ({ children }) => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="paper max-h-[80vh] max-w-[70vw] overflow-scroll">
                {children}
            </div>
        </div>
    );
};

export default layout;
