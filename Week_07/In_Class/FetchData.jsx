import React, { useState, useEffect } from "react";
function FetchData() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(data => setData(data.slice(0, 5))); // 5개만 가져오기
    }, []); // 처음 한 번만 실행
    return (
        <div>
            <h1>API 데이터</h1>
            <ul>
                {data.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
}
export default FetchData;