import React from "react";

export default (props) => {
    const { min, max } = props;
    const randomNumber = parseInt(Math.random() * (max - min)) + min;
    return (
        <div>
            <h2>Valor aleátorio</h2>
            <p>
                <strong>Valor mínimo: {min}</strong>
            </p>
            <p>
                <strong>Valor máximo: {max}</strong>
            </p>
            <p>
                <strong>Random: {randomNumber}</strong>
            </p>
        </div>
    );
};
