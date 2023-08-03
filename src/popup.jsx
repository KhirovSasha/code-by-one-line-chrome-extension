import React from "react";
import { render } from "react-dom";
import Form from "./components/Form";

function Popup() {
    return (
        <div>
            <h1>Hello, world</h1>
            <p>This is a simple popup.</p>
            <Form/>
        </div>
    );
}

render(<Popup />, document.getElementById("react-target"));