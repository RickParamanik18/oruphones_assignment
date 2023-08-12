const PrimaryBtn = (props) => {
    return (
        <button
            className="bg-[color:var(--secondary)] text-[color:var(--primary)] rounded-full px-7 py-1.5 text-sm font-semibold"
            onClick={props?.onClick}
        >
            {props?.name}
        </button>
    );
};

export default PrimaryBtn;
