const heading = React.createElement("h1", 
{id: "heading"}, 
"hello")
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading)

console.log(heading) // it will give an object


// To create more than one element
 /*
*<div id="parent">
    <div id="child">
       <h1> Hello </h1>
    </div>
</div>
*/

const parent = React.createElement(
    "div",
    {id: "parent"},
    React.createElement(
        "div",
        {id: 'child'},
        React.createElement("h1", {}, "Hello")
    )
)

//instead of heading render the parent element

// root.render(parent)

// To create siblings like below structure
 /*
*<div id="parent">
    <div id="child">
       <h1> Hello </h1>
       <h1> Hello 1</h1>
    </div>
</div>
*/ 
// For that create childern in array format

const parent1 = React.createElement(
    "div",
    {id: "parent"},
    React.createElement(
        "div",
        {id: 'child'},
        [React.createElement("h1", {}, "Hello"), React.createElement("h1", {}, "Hello1")]
    )
)

// root.render(parent1)

 /*
*<div id="parent">
    <div id="child">
       <h1> Hello </h1>
       <h1> Hello 1</h1>
    </div>
    <div id="child1">
       <h1> Hello </h1>
       <h1> Hello 1</h1>
    </div>
</div>
*/ 


const parent2 = React.createElement(
    "div",
    {id: "parent"},
    [ React.createElement(
        "div",
        {id: 'child'},
        [React.createElement("h1", {}, "Hello"), React.createElement("h1", {}, "Hello1")]
    ),  React.createElement(
        "div",
        {id: 'child1'},
        [React.createElement("h1", {}, "Hello"), React.createElement("h1", {}, "Hello1")]
    )]
)

root.render(parent2)

