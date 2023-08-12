import UserCard from "@/components/UserCard";
import React from "react";

const Connectionspage = () => {
    return (
        <div>
            <div className="bg-[color:var(--primary)] text-white font-medium text-xl py-3 px-4 rounded-lg h-[80px]">
                My Connections
            </div>
            <div className="flex flex-wrap">
                <UserCard btnText={"Remove Connection"} />
                <UserCard btnText={"Remove Connection"} />
            </div>
            <div className="text-2xl mt-4">People you can also connect</div>
            <div>
                <UserCard btnText={"Connect"} />
            </div>
        </div>
    );
};

export default Connectionspage;
