import React, {useState} from 'react';

const Counter = () =>{

    const [count, setCount] = useState(0);
    const countIncrementHandler = () =>{
        setCount( count +1);
    }
    const countDecrementHandler = () => {
        if(count <= 0){
            alert("Count cannnot be negative");
            return;
        }
        else
            setCount(count - 1);
    }
    return(
        <>
         Your Counter Component
         <h2>Counter: {count}</h2>
         <button onClick={countIncrementHandler}>Increment</button>
         <button onClick={countDecrementHandler}>Decrement</button>
        </>
    );
}

export default Counter;