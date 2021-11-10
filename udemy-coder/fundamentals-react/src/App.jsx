import React from "react";

import First from "./components/basics/First";
import WithParam from "./components/basics/WithParam";
import Fragment from "./components/basics/Fragment";

export default () => {
    return (
        <div id="app">
            <h1>Fundamentals React</h1>
            <Fragment />
            <WithParam titulo="Segundo Component" aluno="Pedro" nota={9.3} />
            <First></First>
        </div>
    );
};
