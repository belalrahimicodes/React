

function ClickEvents2(){
    
    const imgUrl = "./src/assets/rice.jpg";

    const handleClick = (e) => e.target.style.display = "none";

    return(
        <>
            <br />
            <br />
            <label style={{ marginBottom: '5px', display: 'block' }}>Double click on the image below</label>
            <br />
            <img style={{maxWidth: `10%`}} src={imgUrl} alt="rice image" onDoubleClick={(e) => handleClick(e)} />
        </>
    );
}

export default ClickEvents2