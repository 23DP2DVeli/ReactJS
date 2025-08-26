// ReactDOM.render(React.createElement('input',{
//     placeholder: "Help text",
//     onClick: () => console.log("Clicked"),
//     onMouseEnter: () => console.log("Mouse is ready")
// }), document.getElementById("app"))

const inputClick = () => console.log("Clicked")
const mouseOver = () => console.log("Mouse is ready!")


const elements = <input placeholder="Help text" onClick={inputClick} onMouseEnter={mouseOver}/>
const app = document.getElementById("app")

ReactDOM.render(elements, app)
