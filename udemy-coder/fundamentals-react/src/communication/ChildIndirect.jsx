import React from "react";

export default (props) => {
    const cb = props.whenClick
    const min = 50
    const max = 70
    const ageGenerator = () => parseInt(Math.random() * (max - min))
    const nerdGenerator = () => Math.random() > 0.5
    return (
        <div>
            <div>Filho</div>
            <button onClick={_ => cb("John", ageGenerator(), nerdGenerator())}>
                Provide Information
            </button>
        </div>
    );
};
