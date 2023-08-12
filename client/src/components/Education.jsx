import SecondaryBtn from "./SecondaryBtn";

const Education = ({ education }) => {
    const paper = " bg-white py-3 px-4 border-2 rounded-lg shadow ";

    return (
        <div>
            <div className="flex justify-between items-center text-sm font-semibold">
                <span>Education</span>
                <SecondaryBtn name={"Edit"} />
            </div>
            {education.map((edu, index) => (
                <div className={paper + "my-4"} key={index}>
                    <span className="text-[color:var(--primary)] text-xl font-semibold">
                        {edu.institute_name}
                    </span>
                    <div className="text-sm font-semibold flex justify-between mb-2 mt-4">
                        <span>{`( ${edu.start} - ${edu.end} )`}</span>
                        <span>{edu.degree_name}</span>
                    </div>
                    <p className="text-[color:var(--demon)] text-sm">
                        {edu.description}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default Education;
