import SecondaryBtn from "./SecondaryBtn";

const BasicDetails = (props) => {
    const paper = " bg-white py-3 px-4 border-2 rounded-lg shadow ";

    return (
        <div className={paper + "my-4"}>
            {/* name */}
            <div className="my-4 text-sm font-semibold">
                <p className="mb-1 text-[color:var(--demon)]">Your Name</p>
                <div className="flex justify-between items-center">
                    <span>{props.name}</span>
                    <SecondaryBtn name={"Edit"} />
                </div>
            </div>
            {/* email */}
            <div className="my-4 text-sm font-semibold">
                <p className="mb-1 text-[color:var(--demon)]">Your Email</p>
                <div className="flex justify-between items-center">
                    <span>{props.email}</span>
                    <SecondaryBtn name={"Edit"} />
                </div>
            </div>
            {/* phone */}
            <div className="my-4 text-sm font-semibold">
                <p className="mb-1 text-[color:var(--demon)]">Phone Number</p>
                <div className="flex justify-between items-center">
                    <span>{props.phone}</span>
                    <SecondaryBtn name={"Edit"} />
                </div>
            </div>
        </div>
    );
};

export default BasicDetails;
