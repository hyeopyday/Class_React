import React, { camelCase } from "react";

function ButtonComponent() {
    function handleClick() {
    alert("버튼이 클릭되었습니다!");
    }
    return <button onClick={handleClick}>클릭</button>;
    }
    
    export default ButtonComponent;