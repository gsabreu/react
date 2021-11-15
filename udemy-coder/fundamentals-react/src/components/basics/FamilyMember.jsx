import React from "react";

export default (props) => {
    const { name, surname } = props
    return (
        <div>
            {name} <strong> {surname}</strong>
        </div>
    );
};
