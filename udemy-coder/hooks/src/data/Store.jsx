import React, { useState } from "react";

const initalState = {
    number: 1234,
    text: "Context API + hooks",
};

export const AppContext = React.createContext(initalState);

const Store = (props) => {
    const [state, setState] = useState(initalState);

    function updateState(key, value) {
        setState({
            ...state,
            [key]: value,
        });
    }

    return (
        <AppContext.Provider
            value={{
                number: state.number,
                text: state.text,
                setNumber: (num) => updateState("number", num),
                setText: (text) => updateState("text", text),
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};

export default Store;
