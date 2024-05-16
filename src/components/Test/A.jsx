const A = ({ toggledComponents, setToggledComponents }) => {
    return (
        <div
            disabled={toggledComponents.includes("A")}
            className={`box ${toggledComponents.includes("A") && "highlight"}`}
            onClick={() => setToggledComponents((state) => [...state, "A"])}
        >
            A
        </div>
    );
};

export default A;
