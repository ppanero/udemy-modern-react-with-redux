import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    // JS Specific (not React). Definition is optional
    // Is called before everything in the class
    // Is an appropriate place to define state
    constructor(props) {
        super(props); // Must be the first call to initialize *Component*
        this.state = {lat: null, errorMessage: ''};

        window.navigator.geolocation.getCurrentPosition(
            (position) => { // Success callback
                this.setState({lat: position.coords.latitude})
            },
            (err) => { // Failure callback
                this.setState({errorMessage: err.message})
            } 
        );
    }

    // Must define *render()*
    render() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }
        if (!this.state.errorMessage && this.state.lat) {
            return <div>Latitude: {this.state.lat}</div>
        }
        if (!this.state.errorMessage && !this.state.lat) {
            return <div>Loading...</div>
        }
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));