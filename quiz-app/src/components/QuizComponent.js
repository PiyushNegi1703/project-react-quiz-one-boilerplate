export default function Quiz() {
    return(
        <div style={{height : "80vh", width : "80%", backgroundColor : "white", padding : "5vh", display : "flex", flexDirection : "column", justifyContent : "space-evenly", alignItems : "center"}}>
            <div className="question-container">
                <h1 style={{textAlign : "center"}}>Question</h1>
                <p>1 of 15</p>
                <p style={{textAlign : "center", fontSize: "1.2em"}}>Which is the only mammal that can jump?</p>
            </div>

            <div className="option-container">
                <div>Dog</div>
                <div>Elephant</div>
                <div>Goat</div>
                <div>Lion</div>
            </div>

            <div className="control-container">
                <div style={{backgroundColor : "cornflowerblue"}}>Previous</div>
                <div style={{backgroundColor : "green"}}>Next</div>
                <div style={{backgroundColor : "red"}}>Quit</div>
            </div>
        </div>
    )
}