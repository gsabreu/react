import React from "react";

export default props => {
    return (
        <div>
            <span>{props.name} </span>
            <span><strong>{props.age}</strong> </span>
            <span>{props.nerd ? "True" : "False"}!</span>
        </div>
    )
}