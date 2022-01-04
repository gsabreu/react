import React from "react";

export default (props) => {
    return (
        <div>
            <button onClick={props.setIncrease}>+</button>
            <button onClick={props.setDecrease}>-</button>
        </div>
    );
};
