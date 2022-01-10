import React, { useCallback, useState } from "react";
import PageTitle from "../../components/layout/PageTitle";
import UseCallbackButtons from "./UseCallbackButtons";

const UseCallback = (props) => {
    const [count, setCount] = useState(0);

    const increase = useCallback(
        (delta) => {
            setCount((curr) => curr + delta);
        },
        [setCount] //use setCount because it returns always the same setCount, this render only time the UseCallbackButtons component
    );

    return (
        <div className="UseCallback">
            <PageTitle
                title="Hook UseCallback"
                subtitle="Returns a memorized function!"
            />
            <div className="center">
                <span className="text">{count}</span>
                <UseCallbackButtons increase={increase} />
            </div>
        </div>
    );
};

export default UseCallback;
