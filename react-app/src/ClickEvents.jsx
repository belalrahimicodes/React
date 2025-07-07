

function ClickEvents(){

    let count = 0;

    const handleClick = (user) => 
    {
        if(count < 2){
            count++;
            console.log(`${user} clicked me ${count} times`);
    }
        else{
            console.log(`${user} stop clicking me!`);
    }    
    }
        

    return(
        <button onClick={() => handleClick("Alex")}>Click me♠️</button>
    );
}

export default ClickEvents