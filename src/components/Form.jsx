import React from "react";
import { render } from "react-dom";

const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = formData.get('inputData');
    console.log(data);
};

function Form() {
    return(
        <form onSubmit={onSubmit}>
            <input type="text" name="inputData"/>
            <input type="submit" value="Send Request"/>
        </form>
    );
}

export default Form;