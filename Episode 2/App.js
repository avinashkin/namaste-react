import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
    "div", 
    {id: "parent"}, 
    React.createElement(
        "div", 
        {id: "child"},
        [React.createElement("h1", {}, "This is an h1 tag"), React.createElement("h2", {}, "This is an h2 tag")] 
    )
);

const heading = React.createElement("h1", {id: "heading"}, "Hello from React!");
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);