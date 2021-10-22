import React from "react"
import ReactDOM from "react-dom"

/*
function App(){
    return <h1>My name is Huseyin </h1>
}
*/
class App2 extends React.Component{
    render(){
        return <h1>My name is Huseyin </h1>
    }
}

ReactDOM.render(
    <App2 />,
    document.querySelector("#root")
    //document.getElementById("root")
);