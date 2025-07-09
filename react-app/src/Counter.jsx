import React, {useState} from "react";

function Counter(){

    const [count, setCount] = useState(0);

    const increaseCount = () =>{
        setCount(count + 1);
    }

    const decreaseCount = () =>{
        setCount(count - 1);
    }

    const resetCount = () =>{
        setCount(0);
    }

    return(
        <div className="count">
            <div className="count-text">
                <p>{count}</p>
            </div>
            <button onClick={increaseCount}>Increase Count</button>
            <button onClick={decreaseCount}>Decrease Count</button>
            <button onClick={resetCount}>Reset Count</button>
        </div>
    );

}

export default Counter