import "./App.css"
import React from "react";

import First from "./components/basics/First";
import WithParam from "./components/basics/WithParam";
import Fragment from "./components/basics/Fragment";
import RandomNumber from "./components/basics/RandomNumber";
import Card from "./components/layout/Card";

export default () => {
    return (
        <div id="app" className="App">
            <h1>Fundamentals React</h1>

            <div className="Cards">
                <Card title="#04 - Random Exercise">
                    <RandomNumber min={1} max={60} />
                </Card>

                <Card title="#03 - Fragment">
                    <Fragment />
                </Card>

                <Card title="#02 - With Param">
                    <WithParam
                        titulo="Segundo Component"
                        aluno="Pedro"
                        nota={9.3}
                    />
                </Card>

                <Card title="#01 - First Component">
                    <First></First>
                </Card>
            </div>
        </div>
    );
};
