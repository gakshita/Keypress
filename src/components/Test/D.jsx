const D = ({ toggledComponents, setToggledComponents }) => {
    return (
        <div
            disabled={toggledComponents.includes("D")}
            className={`box ${toggledComponents.includes("D") && "highlight"}`}
            onClick={() => setToggledComponents((state) => [...state, "D"])}
        >
            D
        </div>
    );
};

export default D;
