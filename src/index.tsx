import React from "react";
import ReactDOM from "react-dom";

const Test = ({set}: {set: string}) => <p>{set}</p>

const App = () => (
    <>
        <h1>My React and TypeScript Apps!!</h1>
        <Test set={'1'}/>
    </>

);

ReactDOM.render(
    <App />,
    document.getElementById("root")
);