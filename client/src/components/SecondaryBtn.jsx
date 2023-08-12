const SecondaryBtn = (props) => {
    return (
        <button
            className="bg-[color:var(--smoke)] text-[color:var(--demon)] rounded-full px-7 py-1.5 text-sm font-semibold"
            onClick={props?.onClick}
        >
            {props?.name}
        </button>
    );
};

export default SecondaryBtn;
