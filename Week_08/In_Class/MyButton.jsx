import React from "react";

function MyButton(props) {
    const handleDelete = (id, event) => {
        console.log(id, event.target);
      };
    return (
    <button onClick={(event) => handleDelet(1, event)}>
    삭제하기
    </button>
    );
    }

export default MyButton;
