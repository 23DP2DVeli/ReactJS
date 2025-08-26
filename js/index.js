// ReactDOM.render(React.createElement('input',{
//     placeholder: "Help text",
//     onClick: () => console.log("Clicked"),
//     onMouseEnter: () => console.log("Mouse is ready")
// }), document.getElementById("app"))

const elements = <input placeholder="Help text" />
const app = document.getElementById("app")

ReactDOM.render(elements, app)
