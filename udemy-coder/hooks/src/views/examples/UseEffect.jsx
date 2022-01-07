import React, { useState, useEffect } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

function calcFactorial(num) {
    const number = parseInt(num);
    if (number < 0) return -1;
    if (number === 0) return 1;
    return calcFactorial(number - 1) * number;
}

function isEvenOrOdd(num) {
    const number = parseInt(num);
    return number % 2 === 0 ? "Odd" : "Even";
}

const UseEffect = (props) => {
    const [number, setNumber] = useState(1);
    const [factorial, setFactorial] = useState(1);
    const [evenOrOdd, setEvenOrOdd] = useState("Even");

    useEffect(() => {
        setFactorial(calcFactorial(number));
    }, [number]);

    useEffect(() => {
        if (factorial > 1000000) {
            document.title = "Wow!!";
        } else {
            document.title = "Use Effect Page";
        }
    }, [factorial]);

    useEffect(() => {
        setEvenOrOdd(isEvenOrOdd(number))
    }, [number])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Lets you run effects on functional components!!"
            />

            <SectionTitle title="Exercise #01" />

            <div className="center">
                <div>
                    <span className="text">Factorial: </span>
                    <span className="text red">
                        {factorial === -1 ? "N/A" : factorial}
                    </span>
                </div>

                <input
                    type="number"
                    className="input"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                ></input>
            </div>

            <SectionTitle title="Exercise #02" />
            <div className="center">
                <span className="text">Odd or Even: </span>
                <span className="text red">
                    {evenOrOdd}
                </span>
            </div>
        </div>
    );
};

export default UseEffect;
