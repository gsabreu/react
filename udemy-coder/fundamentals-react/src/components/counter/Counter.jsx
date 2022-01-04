import "./Counter.css";
import React, { Component } from "react";

import Display from "./Display";
import Buttons from "./Buttons";
import StepForm from "./StepForm";

class Counter extends Component {
    state = {
        number: this.props.initialNumber || 0,
        step: this.props.initialStep || 5,
    };

    // Use arrow function to change the state of state.number
    increase = () => {
        this.setState({
            number: this.state.number + this.state.step,
        });
    };

    decrease = () => {
        this.setState({
            number: this.state.number - this.state.step,
        });
    };

    setStep = (newStep) => {
        this.setState({
            step: newStep,
        });
    };

    render() {
        return (
            <div className="Counter">
                <h2>Counter</h2>
                <Display number={this.state.number}></Display>
                <StepForm step={this.state.step} setStep={this.setStep}></StepForm>
                <Buttons
                    setIncrease={this.increase}
                    setDecrease={this.decrease}
                ></Buttons>
            </div>
        );
    }
}

export default Counter;
