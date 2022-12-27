export default function Result() {
    return(
        <div style={{height : "100vh", width : "100%", display : "flex", flexDirection : "column", alignItems : "center"}}>

            <h1 style={{color : "green", margin : "3vh 0"}}>Result</h1>

            <div style={{height : "40vh", width : "45%", backgroundColor : "white", padding : "4vh", display : "flex", flexDirection : "column", justifyContent : "space-between", alignItems : "center"}}>

                <h4>You need more practice</h4>

                <h3 style={{fontSize : "1.7em"}}>Your score is 20%</h3>

                <div className="score-container" style={{width : "100%", height : "40%", display : "flex", flexWrap : "wrap", justifyContent : "space-between"}}>
                    <p>Total number of questions</p><span>15</span>
                    <p>Number of attempted questions</p><span>9</span>
                    <p>Number of correct answers</p><span>3</span>
                    <p>Number of wrong answers</p><span>6</span>
                </div>
            </div>
            <div style={{display : "flex", width : "20%", justifyContent : "space-between", margin : "3vh 0"}}>
                <button style={{border : "1px solid blue", padding : "5px", color : "blue", boxShadow : "0 2px 2px black"}}>Play Again</button>
                <button style={{border : "1px solid green", padding : "5px", color : "green", boxShadow : "0 2px 5px black"}}>Back to home</button>
            </div>
        </div>
    )
}