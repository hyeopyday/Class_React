import { useState } from 'react';
const Counter = () => {
    const [count, setCount] = useState(0);
    const plus = () => {
        setCount(count + 1);
        console.log(count);
        // setCount로 count를 변경한 후 바로 콘솔에 찍었다
    }
    const minus = () => {
        setCount(count - 1);
        console.log(count);
        // setCount로 count를 변경한 후 바로 콘솔에 찍었다
    }
    return (
        <div className='container'>
            <h2 className='int'>{count}</h2>
            <button className='plus' onClick={plus}>+</button>
            <button className='minus' onClick={minus}>-</button>
        </div>
    )
}
export default Counter;