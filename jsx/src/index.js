// Import the React and ReactDom Libraries
import React from 'react';
import ReactDom from 'react-dom';

function getButtonText(){
    return "Click Here!";
}

// Create the React Component
// this is functional component.
const App = () =>{
    const buttontype = "Click me";
    // For javascript object
    const jbutton =  {text : "click here"};
    return (
        // for in label should be htmlFor but it will also work fine with just for with some warnign in console.
    <div>
        <label className="label" htmlFor="name">Enter Name:</label>
        <input id="name" type="text"/>
        <button style = {{ backgroundColor: 'blue', color :'white' }}>{jbutton.text}</button>
    </div>
    )
};

//  Take the react component and show it on the screen
ReactDom.render(
 <App />,
 document.querySelector('#root')
);
