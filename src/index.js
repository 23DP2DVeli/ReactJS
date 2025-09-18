import React from "react"
import * as ReactDOMClient from 'react-dom/client';


const inputClick = () => console.log("Clicked")
const mouseOver = () => console.log("Mouse is ready!")


const helpText = "Help text!"



const Header = () => {
    return (
        <header>Header</header>
    )
}


function App() {
    return (<div className="name">
        <Header />


        <h1>{helpText}</h1>
        <input placeholder={helpText}
            onClick={inputClick} onMouseEnter={mouseOver}/>
        <p>{helpText === "Help text!" ? "Yes" : "No"}</p>

</div>)
}







const app = ReactDOMClient.createRoot(document.getElementById("app"))

app.render(<App />)