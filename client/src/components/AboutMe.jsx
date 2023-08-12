import SecondaryBtn from "./SecondaryBtn";

const AboutMe = (props) => {
    const paper = " bg-white py-3 px-4 border-2 rounded-lg shadow ";

    return (
        <div className={paper + "my-4"}>
            <div className="flex justify-between items-center mb-4">
                <span className="text-[color:var(--demon)] text-xl font-semibold">
                    About {props.name.split(" ")[0]}
                </span>
                <SecondaryBtn name={"Edit"} />
            </div>
            <p className="text-[color:var(--demon)] text-sm">{props.about}</p>
        </div>
    );
};

export default AboutMe;
