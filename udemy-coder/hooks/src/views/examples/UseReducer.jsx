import React, { useReducer, useState } from "react";
import PageTitle from "../../components/layout/PageTitle";

import { initialState, reducer } from '../../store'


const UseReducer = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [number, setNumber] = useState(0);
    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />

            <div className="center">
                {state.user ? (
                    <span className="text">{state.user.name}</span>
                ) : (
                    <span className="text"> No user</span>
                )}
                <span className="text">{state.number}</span>
                <div>
                    <button
                        className="btn"
                        onClick={() =>
                            dispatch({ type: "login", payload: "Maria" })
                        }
                    >
                        Login
                    </button>
                    <button
                        className="btn"
                        onClick={() => dispatch({ type: "number_add2" })}
                    >
                        +2
                    </button>
                    <button
                        className="btn"
                        onClick={() => dispatch({ type: "number_mutiply7" })}
                    >
                        * 7
                    </button>
                    <button
                        className="btn"
                        onClick={() => dispatch({ type: "number_divide25" })}
                    >
                        / 25
                    </button>
                    <button
                        className="btn"
                        onClick={() => dispatch({ type: "number_parse" })}
                    >
                        Parse to Integer
                    </button>
                </div>

                <div>
                    <input
                        type="number"
                        className="text"
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                    />
                    <button className="btn" onClick={() => dispatch({ type: "number_addN", payload: number })}>Insert Number</button>
                </div>
            </div>
        </div>
    );
};

export default UseReducer;
