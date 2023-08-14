import Image from "next/image";
import React from "react";
import nothingAdded from "../../public/nothing_added.png";

const NothingAdded = ({ height = 120, width = 120, className }) => {
    return (
        <div className="flex justify-center">
            <Image
                src={nothingAdded}
                height={height}
                width={width}
                alt=""
                className={className}
            />
        </div>
    );
};

export default NothingAdded;
