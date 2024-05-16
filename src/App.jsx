import { useState } from "react";
import "./App.css";
import ReactKeypress from "./components/ReactKeypress";
import A from "./components/Test/A";
import B from "./components/Test/B";
import C from "./components/Test/C";
import D from "./components/Test/D";

const componentKeys = ["A", "B", "C", "D"];
function App() {
    const [toggledComponents, setToggledComponents] = useState([]);
    const [toggleD, setToggleD] = useState(true);
    const [helpers, setHelpers] = useState([]);
    return (
        <>
            <ReactKeypress
                // renderProps={(_helpers) => {
                //     setHelpers(_helpers);
                // }}
                shortcuts={[
                    {
                        keys: "shift s",
                        action: "Toggle",
                        callback_fn: () => {
                            const newArr = componentKeys.filter(
                                (x) => !toggledComponents.includes(x)
                            );
                            setToggledComponents(newArr);
                        }
                    }
                ]}
            >
                <A
                    setToggledComponents={setToggledComponents}
                    toggledComponents={toggledComponents}
                    key="A"
                    allowShortcuts={true}
                />
                <B
                    setToggledComponents={setToggledComponents}
                    toggledComponents={toggledComponents}
                    key="B"
                    allowShortcuts={true}
                />
                <C
                    setToggledComponents={setToggledComponents}
                    toggledComponents={toggledComponents}
                    key="C"
                    allowShortcuts={true}
                />
                {toggleD && (
                    <D
                        setToggledComponents={setToggledComponents}
                        toggledComponents={toggledComponents}
                        key="D"
                        allowShortcuts={true}
                    />
                )}
                <button
                    onClick={() => setToggleD((state) => !state)}
                    allowShortcuts={false}
                >
                    {toggleD ? "Unmount" : "Mount"} D
                </button>
                {/* <div>
                    {helpers.map((helper, index) => (
                        <p key={index}>{helper}</p>
                    ))}
                </div> */}
            </ReactKeypress>
        </>
    );
}

export default App;
