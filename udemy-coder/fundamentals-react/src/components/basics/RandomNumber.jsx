import React from "react";

export default (props) => {
    const { min, max } = props;
    const randomNumber = parseInt(Math.random() * (max - min)) + min;
    return (
        <div>
            <h2>Valor aleátorio</h2>
            <p>
                <strong>Valor mínimo: </strong> {min}
            </p>
            <p>
                <strong>Valor máximo: </strong> {max}
            </p>
            <p>
                <strong>Random: </strong> {randomNumber}
            </p>
        </div>
    );
};
