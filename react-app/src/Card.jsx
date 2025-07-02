import cardImg from "./assets/rice.jpg"

function Card(){
    return(
        <>
        <div className="card">
            <img src={cardImg} alt="card image" />
            <h1>Card</h1>
            <p>This is my card</p>
        </div>
        </>
    );
}

export default Card