const C = ({ toggledComponents, setToggledComponents }) => {
    return (
        <div
            disabled={toggledComponents.includes("C")}
            className={`box ${toggledComponents.includes("C") && "highlight"}`}
            onClick={() => setToggledComponents((state) => [...state, "C"])}
        >
            C
        </div>
    );
};

export default C;
