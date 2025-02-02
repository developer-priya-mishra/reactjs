import React, { useState } from "react";
import ReactDOM  from "react-dom/client";
import person from "./assets/image/person.png";

const jsxHeading = <h1 className="heading">Hello from JSX! </h1>

const Headings = () =>{
    const [name,setName]=useState("");

    return (
        <>
        <span>🔍</span>
        <input type="text" placeholder="Enter your name" value={name} onChange={(e)=>setName(e.target.value)}/>
        <button onClick={() => alert(`Name is: ${name}`)}>Search</button>
    </>
   )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<Headings/>);