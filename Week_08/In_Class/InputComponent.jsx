import React from "react";

function InputComponent() {
    function handleChange(event) {
    console.log("입력값:", event.target.value);
    }
    return <input type="text" onChange={handleChange} />;
    }

    export default InputComponent;