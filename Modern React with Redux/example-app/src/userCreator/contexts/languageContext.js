import React from 'react';

// A default value can be passed upon creation
const Context = React.createContext({ language: 'english'});

export class LanguageStore extends React.Component {

    state = { language: 'english' }

    onLanguageChange = (language) => {
        this.setState({ language })
    }

    render() {

        // We have to encapsulate all the children in the provider
        // so they can receive the data updates.
        // Context have to be capital letters to tell JS that it is not a
        // html JSX element.
        return (
            <Context.Provider value={
                { ...this.state, onLanguageChange: this.onLanguageChange }
            }>
                { this.props.children }
            </Context.Provider>
        )
    }
}

export default Context;