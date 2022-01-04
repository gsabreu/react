import "./App.css";
import React from "react";

import Counter from "./components/counter/Counter";
import Input from "./components/forms/Input";
import MainIndirect from "./communication/MainIndirect";
import MainDirect from "./communication/MainDirect";
import UserInfo from "./components/conditional/UserInfo";
import EvenOrOdd from "./components/conditional/EvenOrOdd";
import ProductsTable from "./components/loop/ProductsTable";
import StudentList from "./components/loop/StudentList";
import First from "./components/basics/First";
import WithParam from "./components/basics/WithParam";
import Fragment from "./components/basics/Fragment";
import RandomNumber from "./components/basics/RandomNumber";
import Card from "./components/layout/Card";
import Family from "./components/basics/Family";
import FamilyMember from "./components/basics/FamilyMember";

export default () => {
    return (
        <div id="app" className="App">
            <h1>Fundamentals React</h1>

            <div className="Cards">

                <Card title="#12- Counter" color="#424242">
                    <Counter initialNumber={100}></Counter>
                </Card>

                <Card title="#11- Controled component (Input)" color="#E45F56">
                    <Input></Input>
                </Card>

                <Card title="#10- Indirect Communication" color="#8BAD39">
                    <MainIndirect></MainIndirect>
                </Card>

                <Card title="#09- Direct Communication" color="#59323C">
                    <MainDirect></MainDirect>
                </Card>

                <Card title="#08- Conditional Render" color="#982395">
                    <EvenOrOdd number={20}></EvenOrOdd>
                    <UserInfo user={{ name: "Guilherme" }}></UserInfo>
                    <UserInfo user={{ email: "Guilherme@" }}></UserInfo>
                </Card>

                <Card title="#07- Loop Challenge" color="#3A9AD9">
                    <ProductsTable></ProductsTable>
                </Card>

                <Card title="#06 - Loop" color="#FF4C65">
                    <StudentList></StudentList>
                </Card>

                <Card title="#05 - Componets with Children" color="#00C8F8">
                    <Family surname= "Silva">
                        <FamilyMember name="Pedro" />
                        <FamilyMember name="Ana" />
                        <FamilyMember name="Gustavo" />
                    </Family>
                </Card>

                <Card title="#04 - Random Exercise" color="#FA6900">
                    <RandomNumber min={1} max={60} />
                </Card>

                <Card title="#03 - Fragment" color="#E94C6F">
                    <Fragment />
                </Card>

                <Card title="#02 - With Param" color="#E8B71A">
                    <WithParam
                        titulo="Segundo Component"
                        aluno="Pedro"
                        nota={9.3}
                    />
                </Card>

                <Card title="#01 - First Component" color="#588C73">
                    <First></First>
                </Card>
            </div>
        </div>
    );
};
