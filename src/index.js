import React from "react"
import ReactDOM from "react-dom"

import Card from './components/card.js';

const App = () => {
       return(
        <div>
            <div className="card-group">
                <Card cardTitle="Card Title 1"/>
                <Card cardTitle="Card Title 2"/>
                <Card cardTitle="Card Title 3"/>
            </div>
        </div>
       );
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
)




