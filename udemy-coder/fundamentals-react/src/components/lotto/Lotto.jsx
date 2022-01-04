import "./Lotto.css";
import React, { useState } from "react";

export default (props) => {
    function generateNumbers(size) {
        const numbers = Array(size)
            .fill(0)
            .reduce((nums) => {
                const newNumber = generateNumberWithouRepeatiton(1, 60, nums);
                return [...nums, newNumber];
            }, [])
            .sort((n1, n2) => n1 - n2);
        return numbers;
    }

    function generateNumberWithouRepeatiton(min, max, array) {
        const random = parseInt(Math.random() * (max - min)) + min;
        return array.includes(random)
            ? generateNumberWithouRepeatiton(min, max, array)
            : random;
    }

    const [numbersLenght, setNumbersLenght] = useState(
        props.numbersLenght || 6
    );
    const initalNumbers = Array(props.size || 6).fill(0);
    const [numbers, setNumbers] = useState(initalNumbers);

    return (
        <div>
            <h2>Lotto</h2>
            <h3>{numbers.join(" ")}</h3>
            <div className="Lotto">
                <label htmlFor="numbersLenght">Number Lenght</label>
                <input
                    id="numbersLenght"
                    min="6"
                    max="10"
                    type="number"
                    value={numbersLenght}
                    onChange={(e) => {
                        setNumbersLenght(+e.target.value);
                        setNumbers(generateNumbers(numbersLenght));
                    }}
                />
            </div>
            <button onClick={(_) => setNumbers(generateNumbers(numbersLenght))}>
                Generate Lotto Numbers
            </button>
        </div>
    );
};
