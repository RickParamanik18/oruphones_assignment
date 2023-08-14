import NothingAdded from "./NothingAdded";
import SecondaryBtn from "./SecondaryBtn";

const Education = ({ education, onClick }) => {
    return (
        <div>
            <div className="flex justify-between items-center text-sm font-semibold">
                <span>Education</span>
                <SecondaryBtn name={"Edit"} onClick={onClick} />
            </div>
            {education.length ? (
                education.map((edu, index) => (
                    <div className="paper my-4" key={index}>
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
                ))
            ) : (
                <NothingAdded />
            )}
        </div>
    );
};

export default Education;
