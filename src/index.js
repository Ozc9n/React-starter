import React from "react"
import ReactDOM from "react-dom"

import Card from './components/card.js';
import Collapse from './components/collapse.js';

const App = () => {
    return (
        <div className="card-group">
            <Collapse href="collapseExample1">
                Pure Collapse Content NO CARD
            </Collapse>
            
            <Collapse href="collapseExample2">
                <Card
                        cardTitle="Card Title II"
                        cardText="Lorem Ipsum Text II"
                        updatedTime="Last Updated 2 min ago"
                        image="https://picsum.photos/id/10/200/300"
                />
            </Collapse>
                <Card
                    cardTitle="Card Title III"
                    cardText="Lorem Ipsum Text III"
                    updatedTime="Last Updated 3 min ago"
                    image="https://picsum.photos/id/100/200/300"
                />
        </div>        
    );
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
)




