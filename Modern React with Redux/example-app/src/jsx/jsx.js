// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

function getButtonText() {
    return ['Click on Me! ', 10];
}

// Create a react component
const App = () => { // Arrow function
    const buttonStyle = {
        backgroundColor: 'blue',
        color: 'white'
    }

    return (
        <div>
            <label className="label" htmlFor="name">Enter name:</label>
            <input id="name" type="text"></input>
            <button style={ buttonStyle }>
                {getButtonText()}
            </button>
        </div>
    );
};

// Take the react component and show it on the screen
ReactDOM.render(
    <App />, // Component as a HTML tag
    document.querySelector('#root') // Reference to a existing DOM element in our HTML file
);