import React from "react";
import ReactDOM  from "react-dom/client";

const jsxHeading = <h1 className="heading">Hello from JSX! </h1>

const Heading1 = () => {
    return <h1 className="heading">Hello from React Functional Component Heading1 </h1>
}

const Heading2 = () => <h1 className="heading">Hello from React Functional Component Heading2</h1>

const Heading3 = () => (<h1 className="heading">Hello from React Functional Component Heading3</h1>)

const Headings = () =>{
    return (
        <>
        <Heading1/>
        <Heading2/>
        <Heading3/>
        <h1 className="heading">Hello from React Functional Component Headings</h1>
    </>
   )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<Headings/>);