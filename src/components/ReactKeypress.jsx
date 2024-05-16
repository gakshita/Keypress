import { useEffect, useState } from "react";

const ReactKeypress = ({ shortcuts, children }) => {
    const [shortcutHelpers, setShortcutHelper] = useState([]);

    const getShortcuts = () => {
        const _shortcutHelpers = [];

        for (let i = 0; i < children.length; i++) {
            if (!children[i].props?.allowShortcuts) continue;
            for (let j = 0; j < shortcuts.length; j++) {
                _shortcutHelpers.push(
                    "Press " +
                        shortcuts[j].keys +
                        " to " +
                        shortcuts[j].action +
                        " " +
                        children[i].key
                );
            }
        }

        setShortcutHelper(_shortcutHelpers);
    };

    useEffect(() => {
        var listener = new window.keypress.Listener();
        shortcuts.forEach((shortcut) => {
            listener.simple_combo(shortcut.keys, function () {
                console.log("You pressed shift and s", shortcut);
                shortcut.callback_fn();
            });
        });

        getShortcuts();
        console.log({ children, shortcuts });

        return () => {
            shortcuts.forEach((shortcut) => {
                listener.unregister_combo(shortcut.keys);
            });
        };
    }, [children]);

    return (
        <div>
            {/* {renderProps(shortcutHelpers)} */}
            {children}
        </div>
    );
};

export default ReactKeypress;
