import React from "react";
import ReactDOM from "react-dom/client"

{/* <div id="parent">
    <div id="child1">
        <h1>I'm from h1</h1>
        <h2>I'm from h2</h2>
    </div>
    <div id="child2">
        <h1>I'm from h1</h1>
        <h2>I'm from h2</h2>
    </div>
</div> */}

const heading = React.createElement(
    "div",{id:'parent'},
    [
        React.createElement(
        "div",{id:'child'},
        [
        React.createElement("h1",{},"I'm from h1"),
        React.createElement("h1",{},"I'm from h2")
        ]
    ),
        React.createElement(
        "div",{id:'child'},
        [
        React.createElement("h1",{},"I'm from h1"),
        React.createElement("h1",{},"I'm from h2")
        ]
        )
    ]
)




// const heading = React.createElement('h1',
//     {id:'heading',xyz:"abc"},
//     "Hello from React!")


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);