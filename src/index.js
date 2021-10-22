import React from "react"
import ReactDOM from "react-dom"

function App() {
    // ? JSX ile html arasındaki farklar 
    // *1. Tek bir ana div icerisinde kullaniliyor .
    // !2. Style ozellikleri yaparken key value sekli yazim
    // *3.JSX icerisine js kodları entegre edebiliyoruz.
    // !4.HTML attributeleri icin camelCase yazim sekli kullaniliyor.

    // ?
    const str1 = "Click ";
    const str2 = "Me";

    return (
    <div>
        <button type="button" style={{padding:'10px', color: 'white', backgroundColor: 'blue', border: '2px solid yellow'}}>{str1.concat(str2)}</button>  
        {/* <button type="button" style={{padding:'10px', color: 'white', backgroundColor: 'blue', border: '2px solid yellow'}}>JSX button</button> */}
    </div>
    );
}
ReactDOM.render(
    <App />,
    document.getElementById("root")
);
