import React, {useState} from 'react';

function UzeState(){

    const [user, setUser] = useState("Guest");

    const changeName = () =>{
        setUser("Alex");
    }

    const [age, setAge] = useState(0);

    const increaseAge = () =>{
        setAge(age + 1);
    }

    const [isWorking, setIsWorking] = useState(false);

    const toggleWorkStatus = () =>{
        setIsWorking(!isWorking);
    }

    return(
        <>
            <p>User: {user}</p>
            <button onClick={changeName}>Set User</button>

            <p>Age: {age}</p>
            <button onClick={increaseAge}>Increase Age</button>

            <p>Work Status: {isWorking ? "Yes" : "No"}</p>
            <button onClick={toggleWorkStatus}>Toggle Work Status</button>
        </>
    );
}

export default UzeState