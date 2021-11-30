import React, { useState } from "react";
import ChildIndirect from "./ChildIndirect";

export default (props) => {

    const [name, setName] = useState('?')
    const [age, setAge] = useState(0)
    const [nerd, setNerd] = useState(false)

    function provideInformations(name, age, isNerd) {
       setName(name)
       setAge(age)
       setNerd(isNerd)
    }
    return (
        <div>
            <span>{name} </span>
            <span><strong>{age}</strong> </span>
            <span>{nerd ? 'True' : 'False'}</span>

            <ChildIndirect whenClick={provideInformations}></ChildIndirect>
        </div>
    );
};
