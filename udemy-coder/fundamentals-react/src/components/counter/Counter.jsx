import "./Counter.css"
import React, { Component } from "react";

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

    setStep = (e) => {
        this.setState({
            step: +e.target.value,
        });
    };

    render() {
        return (
            <div className="Counter">
                <h2>Counter</h2>
                <h3>{this.state.number}</h3>
                <div>
                    <label htmlFor="stepInput">Step: </label>
                    <input
                        id="stepInput"
                        type="number"
                        value={this.state.step}
                        onChange={this.setStep}
                    />
                </div>
                <button onClick={this.increase}>+</button>
                <button onClick={this.decrease}>-</button>
            </div>
        );
    }
}

export default Counter;
