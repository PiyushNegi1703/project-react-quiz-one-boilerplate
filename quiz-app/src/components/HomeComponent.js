export default function Home() {
    return(
        <div style={{display : "flex", justifyContent : "center", alignItems : "center", flexDirection : "column", color : "white"}}>
                <h1 style={{fontWeight : "400"}}>Quiz App</h1>
                <button style={
                    {backgroundColor : "green", width : "13vw", textAlign : "center", padding : "10px", color : "white", borderRadius : "200px", fontSize : "1em", marginTop : "10px", borderTop : "1px solid white", borderLeft : "1px solid white"}
                    }>
                    Play
                </button>
        </div>
    )
}