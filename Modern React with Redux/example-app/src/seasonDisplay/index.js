import React from 'react';
import ReactDOM from 'react-dom';

import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
    // JS Specific (not React). Definition is optional
    // Is called before everything in the class
    // Is an appropriate place to define state
    // constructor(props) {
    //     super(props); // Must be the first call to initialize *Component*
    //     this.state = {lat: null, errorMessage: ''};
    // }
    // Alternative state initialization

    state = {lat: null, errorMessage: ''};

    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }
        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={ this.state.lat } />
        }
        if (!this.state.errorMessage && !this.state.lat) {
            return <Spinner message='Waiting for location...'/>
        }
    }

    // Must define *render()*
    render() {
        return (
            <div className="border">
                { this.renderContent() }
            </div>
        );
    }

    componentDidMount() {
        console.log('Component did mounted');
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude}), // Success callback
            err =>  this.setState({errorMessage: err.message}) // Failure callback
        );
    }

    componentDidUpdate() {
        console.log('Component just updated and rerendered');
    }

    componentWillUnmount() {
        console.log('Component will unmount');
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));