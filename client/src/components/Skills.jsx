import SecondaryBtn from "./SecondaryBtn";

const Skills = ({skills}) => {
    const paper = " bg-white py-3 px-4 border-2 rounded-lg shadow ";

    return (
        <div className={paper + "my-4"}>
            <div className="flex justify-between items-center mb-4">
                <span className="text-[color:var(--demon)] text-xl font-semibold">
                    Skills
                </span>
                <SecondaryBtn name={"Edit"} />
            </div>
            <ul className="text-[color:var(--demon)]">
                {skills.map((skill, index) => (
                    <li key={index} className="my-2 text-base font-semibold">
                        {skill}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Skills;
