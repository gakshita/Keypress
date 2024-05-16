const B = ({ toggledComponents, setToggledComponents }) => {
    return (
        <div
            disabled={toggledComponents.includes("B")}
            className={`box ${toggledComponents.includes("B") && "highlight"}`}
            onClick={() => setToggledComponents((state) => [...state, "B"])}
        >
            B
        </div>
    );
};

export default B;
